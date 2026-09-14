import fs from 'node:fs/promises';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {validateContent} from '../lib/content.mjs';
const content=validateContent(JSON.parse(await fs.readFile('public/content.json','utf8')));
const files=[];async function walk(dir){for(const item of await fs.readdir(dir,{withFileTypes:true})){const file=path.join(dir,item.name);if(item.isDirectory())await walk(file);else files.push(file);}}await walk('public');
for(const file of files){if(file.endsWith('.js'))execFileSync(process.execPath,['--check',file]);}
for(const file of ['netlify/functions/admin.mjs','lib/content.mjs'])execFileSync(process.execPath,['--check',file]);
const references=[];function find(value){if(typeof value==='string'&&value.startsWith('/assets/'))references.push(value);else if(Array.isArray(value))value.forEach(find);else if(value&&typeof value==='object')Object.values(value).forEach(find);}find(content);
for(const reference of references)await fs.access(path.join('public',reference));
for(const file of files.filter(f=>f.endsWith('.html'))){const html=await fs.readFile(file,'utf8');for(const match of html.matchAll(/(?:src|href)="(\/[^"#?]*)"/g)){const ref=match[1];if(ref.endsWith('/'))await fs.access(path.join('public',ref,'index.html'));else await fs.access(path.join('public',ref));}}
const output=path.resolve('dist');if(path.dirname(output)!==process.cwd()||path.basename(output)!=='dist')throw Error('Unsafe build output path');await fs.rm(output,{recursive:true,force:true});await fs.mkdir(output,{recursive:true});await fs.cp('public',output,{recursive:true});
console.log(`Build verified: ${files.length} public files; ${content.projects.length} portfolio projects.`);
