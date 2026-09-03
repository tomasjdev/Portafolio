# Portafolio — Tomás Jiménez Albornoz

Sitio web personal de portafolio: **HTML, CSS y JavaScript puro**, sin frameworks, sin
paso de build y sin dependencias que instalar. Se publica gratis en GitHub Pages.

**Analista de Datos · Automatización de Procesos** — Ingeniería en Computación e
Informática (Universidad Andrés Bello).

---

## Características

| | |
|---|---|
| **Bilingüe ES/EN** | Toggle en la barra de navegación. Detecta el idioma del navegador y recuerda la elección en `localStorage`. |
| **Tema claro / oscuro** | Respeta `prefers-color-scheme` y guarda la preferencia del usuario. |
| **Contenido centralizado** | Todo el texto y los proyectos viven en `assets/js/content.js`. |
| **Responsive** | Diseño fluido con CSS Grid; menú hamburguesa bajo 820 px. |
| **Accesible** | Navegación por teclado, `skip link`, modal con foco atrapado y `aria-*`, respeta `prefers-reduced-motion`. |
| **SEO** | Meta tags, Open Graph y datos estructurados JSON-LD (`schema.org/Person`). |
| **Sin dependencias** | Cero `npm install`. Los iconos son SVG inline; las fuentes tienen fallback del sistema. |

---

## Estructura del proyecto

```
Portafolio/
├── index.html                  # Estructura y secciones del sitio
├── assets/
│   ├── css/styles.css          # Estilos (tokens, temas, componentes, responsive)
│   ├── js/
│   │   ├── content.js          # ← DATOS: textos, proyectos, experiencia, skills
│   │   └── main.js             # Lógica: i18n, tema, render, modal, navegación
│   ├── cv/
│   │   └── Tomas-Jimenez-Albornoz-CV.pdf
│   └── img/                    # Imágenes (vacío por ahora)
├── .nojekyll                   # Evita que GitHub Pages procese el sitio con Jekyll
└── README.md
```

---

## Ejecutar en local

No requiere instalación. Basta con abrir `index.html` en el navegador, aunque se
recomienda un servidor local para que las rutas relativas se comporten igual que en
producción:

```bash
# Opción 1 — Python (ya viene instalado en macOS y la mayoría de Linux)
python3 -m http.server 8000

# Opción 2 — Node
npx serve .
```

Luego abrir <http://localhost:8000>.

---

## Cómo actualizar el contenido

Casi todo se edita en un solo archivo: **`assets/js/content.js`**.

### 1. Datos de contacto y enlaces

```js
const CONFIG = {
  email: 'jimeneztomas912@gmail.com',
  linkedin: 'https://www.linkedin.com/in/...',   // ← revisar
  github: 'https://github.com/tomasjdev',
  cv: 'assets/cv/Tomas-Jimenez-Albornoz-CV.pdf',
};
```

### 2. Agregar un proyecto

Copiar un objeto del array `CONTENT.projects` y ajustar los campos. Cada texto
traducible usa la forma `{ es: '...', en: '...' }`:

```js
{
  id: 'nuevo-proyecto',
  featured: false,                 // true = ocupa el ancho completo en escritorio
  year: '2026',
  icon: 'bolt',                    // clave del objeto ICONS en main.js
  title:       { es: '...', en: '...' },
  summary:     { es: '...', en: '...' },   // texto de la tarjeta
  description: { es: '...', en: '...' },   // texto del modal
  value:       { es: '...', en: '...' },   // valor entregado
  highlights:  { es: ['...'], en: ['...'] },
  stack: ['Python', 'SQL'],        // se muestran los 4 primeros en la tarjeta
  tags: ['automation', 'etl'],
  repo: 'https://github.com/...',  // o null si no hay repositorio público
}
```

### 3. Textos de interfaz

Los textos fijos (menú, títulos de sección, botones) están en el objeto `I18N`,
con una entrada por idioma. En el HTML se referencian con `data-i18n="clave"`.

### 4. Actualizar el CV

Reemplazar `assets/cv/Tomas-Jimenez-Albornoz-CV.pdf` manteniendo el mismo nombre de
archivo; los botones de descarga apuntan a esa ruta.

### 5. Iconos disponibles

`code`, `globe`, `cloud`, `chart`, `bolt`, `tools`, `boxes`, `truck`, `shield`,
`work`, `education`, `mail`, `phone`, `pin`, `linkedin`, `github`, `award`.
Para añadir uno nuevo, agregar su `path` SVG (viewBox `0 0 24 24`) al objeto
`ICONS` en `assets/js/main.js`.

---

## Publicar en GitHub Pages (gratis)

1. En el repositorio: **Settings → Pages**.
2. En *Source*, elegir **Deploy from a branch**.
3. Seleccionar la rama (`main`) y la carpeta `/ (root)`. Guardar.
4. El sitio queda disponible en `https://tomasjdev.github.io/Portafolio/` en un par de minutos.

El archivo `.nojekyll` evita que Jekyll ignore carpetas o archivos del proyecto.

> Para usar un dominio propio: agregar un archivo `CNAME` en la raíz con el dominio
> y configurar el registro DNS según la documentación de GitHub Pages.

---

## Pendientes / mejoras futuras

- [ ] Confirmar la URL real de LinkedIn en `CONFIG.linkedin` (el CV apunta a un placeholder).
- [ ] Agregar capturas de pantalla de los proyectos en `assets/img/` y mostrarlas en el modal.
- [ ] Publicar el repositorio del sistema de inventario y enlazarlo en `repo`.
- [ ] Generar una imagen Open Graph (1200×630) para las vistas previas al compartir.

---

## Licencia

Código bajo licencia MIT. El contenido, textos y CV son propiedad de Tomás Jiménez Albornoz.
