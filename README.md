# Axel NFC Portfolio

Sitio estático listo para desplegar en GitHub Pages, pensado para compartirse desde una tarjeta NFC.

## Qué incluye

- Portafolio responsivo con diseño premium y foco en innovación tecnológica.
- Implementación estática sin build step, ideal para GitHub Pages.
- SEO básico, `manifest`, `robots.txt`, favicon y preview social en SVG.
- Workflow de GitHub Actions para desplegar automáticamente el contenido de `public/`.

## Estructura

- `public/index.html`: página principal.
- `public/assets/styles.css`: estilos y diseño responsivo.
- `public/assets/app.js`: contenido dinámico y animaciones de entrada.
- `public/404.html`: fallback para rutas inexistentes.
- `.github/workflows/deploy.yml`: despliegue automático a GitHub Pages.

## Publicación

1. Crea un repositorio en GitHub, por ejemplo `axel-nfc-portfolio`.
2. Sube el contenido de esta carpeta al branch `main`.
3. GitHub Actions desplegará automáticamente el sitio en GitHub Pages.
4. La URL final normalmente quedará con este formato:
   `https://axeljmz16.github.io/axel-nfc-portfolio/`

## Correr en VS Code

- Abre esta carpeta en VS Code.
- Presiona `F5` y elige `Portafolio NFC en Edge` o `Portafolio NFC en Chrome`.
- VS Code iniciará el servidor local automáticamente en `http://127.0.0.1:5500`.
- Si prefieres tareas manuales, usa `Terminal > Run Task > Iniciar servidor portafolio`.
- Para detenerlo, usa `Terminal > Run Task > Detener servidor portafolio`.

## Personalización rápida

- WhatsApp: cambia el número o el mensaje en `public/assets/app.js`.
- Textos del portafolio: edítalos en `public/assets/app.js`.
- Estilo visual: ajusta variables y bloques en `public/assets/styles.css`.
- Vista social: modifica `public/assets/og-image.svg`.
