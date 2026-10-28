---
name: estructura-web
description: Genera la estructura base de un sitio web estático (index.html,
  css/styles.css, js/main.js, carpeta img/ y README.md) lista para abrir en el
  navegador. Úsala siempre que el usuario quiera empezar una página web, una
  landing, un portafolio o un proyecto HTML/CSS/JS desde cero, aunque no diga
  "estructura" ni "plantilla" (por ejemplo "hazme una página para mi negocio").
---

# Estructura web base

## Pasos
1. Averigua el nombre del proyecto y de qué trata.
2. Crea el árbol: index.html, css/styles.css, js/main.js, img/, README.md.
3. Copia las plantillas de assets/ y reemplaza {{TITULO}}, {{DESCRIPCION}},
   {{IDIOMA}} y {{ANIO}}. Adapta el texto al tema del negocio.
4. Imágenes: en cada tarjeta usa <img src="img/imagesN.jpg" alt="...">.
   Si el usuario no tiene fotos, deja los nombres images1, images2, images3
   y avísale que debe copiarlas a img/ con ese nombre y extensión.
5. Horario: si el negocio tiene horario, agrégalo en la sección de contacto
   y ajusta los días y horas en main.js para el aviso "Abierto / Cerrado".
6. Escribe el README.md con el nombre del proyecto como título principal.
7. Resume al usuario lo que creaste y cómo abrir la página.