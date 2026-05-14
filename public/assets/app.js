const whatsappNumber = "528444956004";
const whatsappMessage = encodeURIComponent(
  "Hola Axel Gabriel P\u00e9rez Jim\u00e9nez, revis\u00e9 tu portafolio y me gustar\u00eda conversar contigo."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const heroTags = [
  "Systems architecture",
  "Applied engineering",
  "Automation",
  "Hardware + IoT",
  "Technical product",
  "Field execution",
];

const profileHighlights = [
  {
    title: "Perfil base",
    value: "Arquitectura de sistemas con mentalidad builder",
    tone: "cyan",
  },
  {
    title: "Rango de ejecuci\u00f3n",
    value: "Hardware, automatizaci\u00f3n, software y producto",
    tone: "pink",
  },
  {
    title: "Contexto de trabajo",
    value: "Entornos competitivos, operativos y de validaci\u00f3n real",
    tone: "blue",
  },
];

const stats = [
  { value: "End-to-End", label: "Arquitectura t\u00e9cnica de extremo a extremo" },
  { value: "Italia + Turqu\u00eda", label: "Exposici\u00f3n internacional en competencia" },
  { value: "Hardware + Software", label: "Integraci\u00f3n multidisciplinaria real" },
  { value: "Build to Deploy", label: "Del prototipo funcional al sistema usable" },
];

const strengths = [
  { title: "Arquitectura de sistemas para entornos hardware-software", token: "SYS" },
  { title: "Automatizaci\u00f3n, control l\u00f3gico y flujos inteligentes", token: "AUT" },
  { title: "Instrumentaci\u00f3n, sensado e integraci\u00f3n IoT", token: "IOT" },
  { title: "Desarrollo de producto y software orientado a operaci\u00f3n", token: "PRD" },
  { title: "Prototipado r\u00e1pido, validaci\u00f3n t\u00e9cnica e iteraci\u00f3n", token: "VAL" },
  { title: "Direcci\u00f3n t\u00e9cnica y toma de decisiones de arquitectura", token: "ARC" },
];

const impactItems = [
  "Convertir requisitos difusos en arquitectura t\u00e9cnica clara",
  "Conectar sensado, l\u00f3gica, interfaz, datos y operaci\u00f3n dentro del mismo sistema",
  "Equilibrar factibilidad, rendimiento, mantenibilidad y costo de despliegue",
  "Dise\u00f1ar soluciones que funcionen fuera del demo: en campo, bajo restricci\u00f3n y con usuarios reales",
];

const projects = [
  {
    title: "WATERWARDEN",
    subtitle: "Ingenier\u00eda de sistemas h\u00eddricos, monitoreo y arquitectura de tratamiento",
    description:
      "Iniciativa orientada a construir un sistema t\u00e9cnico para operaci\u00f3n y calidad del agua, combinando instrumentaci\u00f3n, monitoreo, automatizaci\u00f3n y capas digitales. Se plantea como una arquitectura completa, no como un dispositivo aislado.",
    tags: ["Water Systems", "Instrumentation", "Automation", "Platform Architecture"],
    token: "H2O",
    featured: true,
    featuredLabel: "Flagship",
  },
  {
    title: "Arquitecturas de monitoreo y telemetr\u00eda",
    subtitle: "Captura, transporte y lectura operativa de datos",
    description:
      "Dise\u00f1o de stacks conectados donde sensores, electr\u00f3nica, comunicaciones, procesamiento y visualizaci\u00f3n se comportan como una sola arquitectura. Enfoque en trazabilidad, lectura en tiempo real y utilidad operativa.",
    tags: ["Telemetry", "IoT", "Edge Systems", "Data Visibility"],
    token: "TEL",
  },
  {
    title: "Producto t\u00e9cnico y plataformas de operaci\u00f3n",
    subtitle: "Interfaces, workflows y capas digitales sobre sistemas complejos",
    description:
      "Construcci\u00f3n de productos digitales que no viven aislados del sistema t\u00e9cnico: tableros, herramientas de operaci\u00f3n y decisiones de producto dise\u00f1adas para procesos reales, no solo para presentaci\u00f3n.",
    tags: ["Product Architecture", "Interfaces", "Operations", "Software"],
    token: "OPS",
  },
  {
    title: "Prototipado e ingenier\u00eda de validaci\u00f3n",
    subtitle: "Concepto t\u00e9cnico, integraci\u00f3n f\u00edsica y pruebas funcionales",
    description:
      "Desarrollo de prototipos y ensamblajes donde mec\u00e1nica, electr\u00f3nica, firmware o software deben converger con velocidad. El objetivo no es solo demostrar una idea, sino reducir riesgo t\u00e9cnico antes del despliegue.",
    tags: ["Prototyping", "Electronics", "Validation", "Integration"],
    token: "LAB",
  },
];

const milestones = [
  {
    year: "01",
    label: "Competitive engineering",
    title: "Campe\u00f3n nacional en rob\u00f3tica",
    text: "Resultado construido bajo presi\u00f3n t\u00e9cnica, criterios p\u00fablicos de evaluaci\u00f3n y ciclos cortos de iteraci\u00f3n; un entorno donde la calidad del sistema y la ejecuci\u00f3n pesan al mismo tiempo.",
  },
  {
    year: "02",
    label: "International stage",
    title: "Italia y Turqu\u00eda",
    text: "Participaci\u00f3n internacional frente a est\u00e1ndares globales de competencia, colaboraci\u00f3n multidisciplinaria y exigencia de entrega en escenarios de alta visibilidad.",
  },
  {
    year: "03",
    label: "Platform building",
    title: "ANRIS M\u00e9xico",
    text: "Creaci\u00f3n de ANRIS M\u00e9xico como una plataforma para articular talento, iniciativas y cultura t\u00e9cnica alrededor de rob\u00f3tica y tecnolog\u00eda aplicada.",
  },
  {
    year: "04",
    label: "Expanded scope",
    title: "De rob\u00f3tica competitiva a sistemas aplicados",
    text: "Expansi\u00f3n del trabajo hacia automatizaci\u00f3n, hardware conectado, arquitectura tecnol\u00f3gica, producto digital y soluciones dise\u00f1adas para operar fuera del entorno de competencia.",
  },
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function revealNodes() {
  const items = document.querySelectorAll(".reveal");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  items.forEach((item) => observer.observe(item));
}

function populateWhatsAppLinks() {
  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = whatsappLink;
  });
}

function renderHeroTags() {
  const container = document.querySelector("#hero-tags");
  if (!container) return;

  container.innerHTML = heroTags
    .map((tag) => `<li class="tag-list__item">${escapeHtml(tag)}</li>`)
    .join("");
}

function renderProfileHighlights() {
  const container = document.querySelector("#profile-highlights");
  if (!container) return;

  container.innerHTML = profileHighlights
    .map(
      (item) => `
        <li class="profile-list__item">
          <p class="profile-list__title">${escapeHtml(item.title)}</p>
          <p class="profile-list__value profile-list__value--${escapeHtml(item.tone)}">${escapeHtml(item.value)}</p>
        </li>
      `
    )
    .join("");
}

function renderStats() {
  const container = document.querySelector("#stats-grid");
  if (!container) return;

  container.innerHTML = stats
    .map(
      (item, index) => `
        <li class="panel stats-card reveal reveal-delay-${Math.min(index + 1, 3)}">
          <p class="stats-card__value">${escapeHtml(item.value)}</p>
          <p class="stats-card__label">${escapeHtml(item.label)}</p>
        </li>
      `
    )
    .join("");
}

function renderStrengths() {
  const container = document.querySelector("#strengths-grid");
  if (!container) return;

  container.innerHTML = strengths
    .map(
      (item, index) => `
        <li class="strength-card reveal reveal-delay-${Math.min(index % 3, 2)}">
          <span class="token-badge">${escapeHtml(item.token)}</span>
          <p>${escapeHtml(item.title)}</p>
        </li>
      `
    )
    .join("");
}

function renderImpact() {
  const container = document.querySelector("#impact-grid");
  if (!container) return;

  container.innerHTML = impactItems
    .map((item) => `<li class="impact-item">${escapeHtml(item)}</li>`)
    .join("");
}

function renderProjects() {
  const container = document.querySelector("#projects-grid");
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project, index) => `
        <li class="project-card panel ${project.featured ? "project-card--featured" : ""} reveal reveal-delay-${Math.min(index, 3)}">
          ${
            project.featured
              ? `<span class="project-card__flag" aria-label="${escapeHtml(project.featuredLabel || "Flagship")}">${escapeHtml(project.featuredLabel || "Flagship")}</span>`
              : ""
          }
          <div class="project-card__token token-badge token-badge-large">${escapeHtml(project.token)}</div>
          <article>
            <h3>${escapeHtml(project.title)}</h3>
            <p class="project-card__subtitle">${escapeHtml(project.subtitle)}</p>
            <p class="project-card__description">${escapeHtml(project.description)}</p>
          </article>
          <ul class="project-card__tags" aria-label="Etiquetas de ${escapeHtml(project.title)}">
            ${project.tags
              .map((tag) => `<li class="project-card__tag">${escapeHtml(tag)}</li>`)
              .join("")}
          </ul>
        </li>
      `
    )
    .join("");
}

function renderTimeline() {
  const container = document.querySelector("#timeline");
  if (!container) return;

  container.innerHTML = milestones
    .map(
      (item, index) => `
        <li class="timeline__item reveal reveal-delay-${Math.min(index, 3)}">
          <span class="timeline__year" aria-hidden="true">${escapeHtml(item.year)}</span>
          <article class="timeline__card panel">
            <div class="timeline__header">
              <span class="timeline__label">${escapeHtml(item.label)}</span>
              <span class="timeline__year-mobile">${escapeHtml(item.year)}</span>
            </div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </article>
        </li>
      `
    )
    .join("");
}

function updateFooterYear() {
  const footerYear = document.querySelector("#footer-year");
  if (!footerYear) return;

  const currentYear = new Date().getFullYear();
  footerYear.textContent = `Axel Gabriel P\u00e9rez Jim\u00e9nez \u00b7 ${currentYear}`;
}

renderHeroTags();
renderProfileHighlights();
renderStats();
renderStrengths();
renderImpact();
renderProjects();
renderTimeline();
populateWhatsAppLinks();
updateFooterYear();
revealNodes();
