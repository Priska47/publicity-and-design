# Guía de administración

Cuando el proyecto esté publicado y el acceso esté activado, entra a la dirección de la web seguida de `/admin/`. Escribe la contraseña que se entregará por un canal privado.

1. **Inicio:** cambia el título, descripción, color, logo y fotografía principal. Para que el título se divida en dos partes, separa la primera frase de la segunda con un punto y un espacio.
2. **Nosotros:** actualiza la presentación y los dos videos del proceso. Cada video necesita una ruta al MP4 y una imagen de portada.
3. **Servicios:** edita los nombres, descripciones y detalles. Escribe un detalle por línea. Puedes agregar, eliminar o reordenar servicios.
4. **Planes (paquetes):** cambia nombres, precios y beneficios. Los precios son mensuales y están expresados en bolivianos. Marca el plan que quieres destacar. Revisa también la aclaración sobre inversión publicitaria.
5. **Trabajos:** agrega videos, diseños, fotos y selecciones de catálogo. Para cada video, registra las vistas, los me gusta, comentarios y guardados. Las métricas se actualizan manualmente.
6. **Contacto:** cambia WhatsApp, correo o redes sociales. Para WhatsApp, escribe solo números, con código de país. Ejemplo: `59168446443`. Una red vacía se oculta de la web.
7. Pulsa **Guardar cambios**. El panel confirmará si se guardaron. La nueva versión aparecerá cuando termine la publicación; puede tomar unos minutos. Si no aparece, revisa el estado en Netlify.

## Cambiar imágenes o videos

Pulsa **Subir archivo** junto al campo correspondiente. Las imágenes se optimizan automáticamente. Después de subir, pulsa **Guardar cambios** para aplicar la nueva ruta al contenido.

El límite de subida es 3 MB. Para un video mayor, pide que se añada al repositorio y escribe su ruta, como `/assets/nuevo-video.mp4`, o usa un enlace HTTPS directo a un archivo MP4. No pegues la dirección de una publicación de TikTok como si fuera el archivo de video.

Para un catálogo, escribe una ruta por línea en **Páginas seleccionadas**. Incluye la portada como primera imagen. Si se necesita una página nueva, debe añadirse primero como imagen. El panel no transforma PDF en imágenes.

## Si aparece un error

- **Contraseña incorrecta:** comprueba tu clave e intenta de nuevo.
- **Inicia sesión para continuar:** la sesión venció; vuelve a entrar. Si hay cambios pendientes, descarga una copia del contenido antes de recargar.
- **El contenido cambió:** otra sesión guardó cambios. Descarga tu copia si la necesitas, recarga el contenido y vuelve a aplicar tus cambios.
- **No se pudo acceder al repositorio:** pide que se revise la conexión con GitHub o la vigencia del token.
- **Administrador aún no activado:** faltan las variables de acceso o la conexión en Netlify.

Antes de hacer una actualización grande, usa **Descargar copia del contenido**. Esa copia es un respaldo de los textos y las rutas; no contiene los archivos multimedia. Los commits en GitHub conservan el historial de actualizaciones.

**Cerrar sesión** elimina el acceso de ese navegador. Evita compartir la contraseña en grupos o dejar una sesión abierta en un equipo ajeno.
