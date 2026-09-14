# Publicity and Design

Web de agencia en español, preparada para despliegue automático en Netlify. Repositorio: [Priska47/publicity-and-design](https://github.com/Priska47/publicity-and-design). Rojo oficial: `#CD141E`. WhatsApp: `+591 68446443`.

Incluye Inicio, Nosotros, Servicios, paquetes mensuales, Trabajos y Contacto. Distingue los paquetes de los servicios individuales y ofrece asesoría gratuita y cotizaciones personalizadas. El portafolio contiene cinco videos con métricas, cinco diseños, dos selecciones de catálogo y cuatro fotografías. Los dos videos del proceso están en Nosotros.

## Revisar localmente

Requiere Node.js 22 o superior. No hay dependencias que instalar.

```sh
npm run dev
```

Abre `http://127.0.0.1:4173`. El administrador se muestra en `/admin/`, pero su acceso y persistencia requieren Netlify y las variables indicadas abajo. La vista local no simula un guardado publicado.

```sh
npm test
npm run build
```

El resultado público se escribe en `dist/`. El build valida el contenido, referencias a archivos y sintaxis. Las pruebas cubren autenticación, sesiones, validación, archivos permitidos y conflictos al guardar. La verificación visual en navegador se realizó además a 320, 390, 768 y 1440 píxeles.

## GitHub y Netlify

1. Usa el repositorio `Priska47/publicity-and-design`, rama `main`. El proyecto incluye `public/assets/`, `netlify/functions/` y `lib/`. No subas `dist`, `.env`, claves privadas ni el ZIP original.
2. En Netlify, elige **Add new project → Import an existing project** y conecta el repositorio de GitHub.
3. El archivo `netlify.toml` configura el comando `npm run build`, la carpeta pública `dist`, las funciones y Node 22. No es necesaria una herramienta de frontend adicional.
4. Verifica el primer despliegue. Configura después las variables del administrador con alcance **Functions** y vuelve a desplegar.
5. Abre la URL definitiva y comprueba la página pública y `/admin/`. Cada cambio guardado por el administrador produce un commit que activa el despliegue automático. Se conserva un historial en GitHub.

Referencia oficial: [Netlify Functions](https://docs.netlify.com/build/functions/get-started/) y [variables de funciones](https://docs.netlify.com/build/functions/environment-variables/).

## Activar el administrador

Guarda estos valores en **Netlify → Project configuration → Environment variables**. Los valores reales no se comparten en el chat ni se incluyen en GitHub.

| Variable | Valor |
| --- | --- |
| `ADMIN_PASSWORD` | Contraseña larga y única, mínimo 16 caracteres. |
| `ADMIN_SESSION_SECRET` | Clave aleatoria de al menos 32 caracteres. |
| `GITHUB_TOKEN` | Token fine-grained limitado a este repositorio, con permiso **Contents: Read and write**. |
| `GITHUB_REPOSITORY` | `Priska47/publicity-and-design`, sin URL ni `.git`. |
| `GITHUB_BRANCH` | Rama de producción, normalmente `main`. |
| `ADMIN_SITE_ORIGIN` | Origen HTTPS de producción, sin ruta, por ejemplo `https://nombre.netlify.app`. Al cambiar a dominio propio, actualízalo. |

El token debe pertenecer a una cuenta con acceso al repositorio. Las reglas de protección de rama deben permitir que esa cuenta actualice el contenido en la rama elegida. Si la organización exige aprobación del token, apruébalo antes de activar el panel. Nunca uses un token con acceso innecesario a otros repositorios.

La función guarda `public/content.json` mediante la [API de contenido de GitHub](https://docs.github.com/en/rest/repos/contents). La clave permanece en el servidor. El acceso usa una cookie firmada, HttpOnly, Secure y SameSite Strict, válida durante una hora; los cambios requieren el origen de producción. Cambiar la contraseña invalida las sesiones emitidas. Se aplica un límite de 30 solicitudes por minuto por IP y dominio.

Este panel sirve a un administrador compartido. No ofrece cuentas individuales ni roles. Si Netlify o GitHub rechazan una operación, muestra el error y no informa un guardado exitoso. Ante un conflicto entre dos sesiones, recarga antes de editar de nuevo.

## Materiales

Las fotografías originales y los PDF son muy pesados; se usan fotografías optimizadas y cuatro páginas seleccionadas por catálogo. Los siete videos suministrados se conservan completos. No se incluye información comercial de la conversación en la página pública.

Las portadas de los videos se extraen de los propios archivos; no se usan imágenes generadas ni material ajeno. Las vistas, likes, comentarios y guardados son valores de las capturas aportadas, editables manualmente. No se consulta TikTok en tiempo real.

Para nuevas imágenes, el administrador admite subida y optimización a WebP. El límite de subida es 3 MB por archivo. Para videos más grandes, añade el MP4 a `public/assets/` desde GitHub y usa su ruta, o usa un enlace HTTPS directo a un MP4 alojado externamente. El navegador necesita que el proveedor permita reproducir el archivo. Los enlaces normales de TikTok o YouTube no funcionan como un archivo MP4.

Las páginas de catálogo se editan como una lista de rutas o enlaces a imágenes. Para cambiar completamente un catálogo, convierte primero las páginas elegidas en imágenes y añádelas al repositorio. El panel no convierte PDF automáticamente.

## Pendientes para publicar

- Conectar el repositorio a Netlify; el usuario se encarga del despliegue.
- Configurar las variables del administrador y comprobar el guardado real en producción.
- Confirmar la URL exacta de Facebook. La tarjeta aporta el nombre `PublicityDesign`, pero no identifica una URL inequívoca, por eso no se inventa un enlace.
- Generar el QR con la URL definitiva y realizar la entrega final.

Consulta `REQUISITOS.md` para la separación entre requisitos del sitio y condiciones comerciales. `GUIA-ADMINISTRADOR.md` contiene el tutorial de uso.
