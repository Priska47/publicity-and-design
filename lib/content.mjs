export function validateContent(d){
 const fail=m=>{throw new Error(m);};
 const text=(v,name,max=5000)=>{if(typeof v!=='string'||v.length>max)fail('Campo inválido: '+name);};
 const asset=(v,name,optional=false)=>{if(optional&&!v)return;if(typeof v!=='string'||v.length>2048)fail('Archivo inválido: '+name);if(/^\/assets\/[a-zA-Z0-9_./-]+$/.test(v)&&!v.includes('..'))return;try{if(new URL(v).protocol==='https:')return;}catch{}fail('Usa una ruta /assets/ o enlace HTTPS: '+name);};
 const array=(v,name,max=100)=>{if(!Array.isArray(v)||v.length>max)fail('Lista inválida: '+name);};
 const strings=(v,name)=>{array(v,name,30);v.forEach(x=>text(x,name,500));};
 if(!d||typeof d!=='object')fail('Contenido inválido');
 for(const key of ['name','heroTitle','heroDescription'])text(d.brand?.[key],'marca.'+key,1000);
 if(!/^#[0-9a-f]{6}$/i.test(d.brand.red))fail('Color inválido');asset(d.brand.logo,'logo');asset(d.brand.heroImage,'portada principal');asset(d.brand.heroVideo,'video principal');for(const key of ['stat1Value','stat1Label','stat2Value','stat2Label'])text(d.brand[key],'marca.'+key,100);
 for(const key of ['title','description','story','approach'])text(d.about?.[key],'nosotros.'+key);
 array(d.about.processVideos,'videos del proceso',10);d.about.processVideos.forEach(p=>{text(p.title,'video.title',300);asset(p.src,'video');asset(p.poster,'poster');});
 array(d.services,'servicios',20);d.services.forEach(s=>{text(s.title,'servicio',300);text(s.description,'descripción');strings(s.items,'detalle del servicio');});
 array(d.projects,'trabajos');const ids=new Set();d.projects.forEach(p=>{text(p.id,'id',100);if(!/^[a-z0-9-]+$/.test(p.id)||ids.has(p.id))fail('Identificador repetido o inválido');ids.add(p.id);if(!['videos','diseno','catalogos','fotos'].includes(p.category))fail('Categoría inválida');text(p.title,'título',300);text(p.subtitle,'subtítulo',500);asset(p.src,'trabajo');asset(p.poster,'portada',p.category!=='videos');if(p.gallery!==undefined){array(p.gallery,'galería',40);p.gallery.forEach(x=>asset(x,'galería'));}for(const key of ['views','likes','comments','saves'])if(p[key]!==undefined&&(!Number.isSafeInteger(p[key])||p[key]<0))fail('Métrica inválida: '+key);});
 const c=d.contact;if(!c||typeof c!=='object')fail('Contacto inválido');text(c.whatsapp,'WhatsApp',20);if(c.whatsapp&&!/^\d{8,15}$/.test(c.whatsapp))fail('WhatsApp: usa solo dígitos con código de país');text(c.email,'correo',254);if(c.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email))fail('Correo inválido');for(const key of ['instagram','tiktok','facebook']){text(c[key],'red social',2048);if(c[key]){try{if(new URL(c[key]).protocol!=='https:')fail('Red social inválida');}catch{fail('Red social inválida');}}}if(!c.whatsapp&&!c.email)fail('Incluye WhatsApp o correo');text(c.facebookLabel||'','nombre de Facebook',200);
 text(d.notes?.metrics,'nota de métricas');return d;
}
