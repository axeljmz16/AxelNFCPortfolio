import { motion } from "framer-motion";
import {
  Award,
  ArrowRight,
  BadgeCheck,
  Bot,
  Building2,
  ChevronRight,
  Crown,
  Cpu,
  Droplets,
  Globe,
  MessageCircle,
  Orbit,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Stars,
  Trophy,
  Wrench,
} from "lucide-react";

const SECTION_PADDING = "px-4 sm:px-6 md:px-10 lg:px-16";
const CARD_PANEL = "rounded-[28px] sm:rounded-[32px] border border-white/10 backdrop-blur-xl";
const GLASS_PANEL = `${CARD_PANEL} bg-white/5`;

const WHATSAPP_NUMBER = "528444956004";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola Axel Gabriel Pérez Jiménez, vi tu perfil y me gustaría ponerme en contacto contigo."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const heroTags = [
  "Ingeniería",
  "Automatización",
  "IoT",
  "Producto",
  "Innovación",
  "Liderazgo",
];

const profileHighlights = [
  {
    title: "Logro clave",
    value: "Campeón nacional de robótica",
    tone: "text-cyan-300",
  },
  {
    title: "Alcance",
    value: "Competencias internacionales (Italia y Turquía)",
    tone: "text-fuchsia-300",
  },
  {
    title: "Rol",
    value: "Presidente y fundador de ANRIS MÉXICO",
    tone: "text-blue-300",
  },
];

const projects = [
  {
    title: "WATERWARDEN",
    subtitle: "Plataforma tecnológica para gestión y calidad del agua",
    description:
      "Desarrollo de una solución integral orientada al análisis, tratamiento y control de calidad del agua, mediante la integración de instrumentación, automatización y arquitectura tecnológica. Enfoque en eficiencia operativa, escalabilidad y aplicación en entornos reales.",
    icon: Droplets,
    tags: ["Ingeniería", "Automatización", "IoT", "Sistemas"],
    featured: true,
  },
  {
    title: "Arquitecturas de monitoreo inteligente",
    subtitle: "Adquisición, procesamiento y visualización de datos",
    description:
      "Diseño de sistemas para captura y análisis de información en tiempo real mediante integración de hardware especializado, conectividad y plataformas digitales, orientados a la toma de decisiones estratégicas.",
    icon: Cpu,
    tags: ["Data", "Hardware", "Integración", "IoT"],
  },
  {
    title: "Desarrollo de productos y plataformas digitales",
    subtitle: "Experiencia de usuario y visión de producto",
    description:
      "Conceptualización y desarrollo de soluciones digitales con enfoque en interacción, posicionamiento, escalabilidad y experiencia de usuario, alineadas a objetivos tecnológicos y de mercado.",
    icon: Smartphone,
    tags: ["UX/UI", "Producto", "Apps", "Estrategia"],
  },
  {
    title: "Prototipado e ingeniería aplicada",
    subtitle: "De la conceptualización a la validación funcional",
    description:
      "Desarrollo de prototipos y sistemas mediante integración de diseño, manufactura, electrónica y validación técnica, orientados a implementación práctica y resultados medibles.",
    icon: Wrench,
    tags: ["Ingeniería", "Prototipos", "Innovación", "Desarrollo"],
  },
];

const milestones = [
  {
    year: "01",
    label: "Logros",
    title: "Campeón nacional en robótica",
    text: "Reconocimiento máximo en competencias nacionales de alto nivel, destacando por desempeño técnico, innovación y presentación de soluciones.",
  },
  {
    year: "02",
    label: "Internacional",
    title: "Representación global",
    text: "Seleccionado para competencias internacionales en Italia y Turquía, con participación sobresaliente en la olimpiada internacional en Italia.",
  },
  {
    year: "03",
    label: "Liderazgo",
    title: "Fundador y presidente de ANRIS MÉXICO",
    text: "Liderazgo institucional enfocado en impulsar innovación, robótica y desarrollo tecnológico con proyección nacional.",
  },
  {
    year: "04",
    label: "Trayectoria",
    title: "Perfil multidisciplinario",
    text: "Experiencia en desarrollo de soluciones tecnológicas integrando robótica, automatización, sistemas inteligentes, diseño de producto y plataformas digitales.",
  },
];

const strengths = [
  { title: "Robótica e innovación tecnológica", icon: Bot },
  { title: "Automatización y sistemas inteligentes", icon: ShieldCheck },
  { title: "Ingeniería de producto y prototipado", icon: Rocket },
  { title: "Desarrollo de plataformas digitales", icon: Globe },
  { title: "Presentación y proyección estratégica", icon: Award },
  { title: "Visión tecnológica y liderazgo", icon: Sparkles },
];

const stats = [
  { value: "Nacional", label: "Campeón en robótica" },
  { value: "Italia + Turquía", label: "Escenario internacional" },
  { value: "ANRIS", label: "Fundador y presidente" },
  { value: "High Impact", label: "Desarrollo tecnológico" },
];

const impactItems = [
  "Desarrollo de soluciones tecnológicas con aplicación real",
  "Participación en entornos competitivos de alto nivel",
  "Liderazgo de iniciativas con proyección institucional",
  "Integración de ingeniería, producto y estrategia",
];

const cn = (...classes) => classes.filter(Boolean).join(" ");

const heroIntroMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75 },
};

const heroAsideMotion = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, delay: 0.15 },
};

const fadeInUp = (delay = 0, y = 24) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay },
});

function SectionBlock({ id, className = "", children, ...props }) {
  return (
    <section id={id} className={cn(SECTION_PADDING, className)} {...props}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, headingId }) {
  return (
    <div className="mb-8">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-3">{eyebrow}</p>
      <h2 id={headingId} className="text-3xl sm:text-4xl md:text-5xl font-black">
        {title}
      </h2>
    </div>
  );
}

function WhatsAppLink({ className = "", children }) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Axel Gabriel Pérez Jiménez por WhatsApp"
      className={className}
    >
      {children}
    </a>
  );
}

export default function AxelNFCPortfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white selection:bg-cyan-400/30 selection:text-white">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 sm:-top-32 -left-20 sm:-left-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-[12%] -right-20 sm:-right-24 h-80 w-80 sm:h-[28rem] sm:w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-[10%] h-72 w-72 sm:h-80 sm:w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />
      </div>

      <WhatsAppLink className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-slate-950/80 px-4 py-3 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl transition hover:scale-[1.03]">
        <MessageCircle aria-hidden="true" className="h-5 w-5 text-cyan-300" />
        <span className="hidden text-sm font-semibold text-white sm:inline">WhatsApp</span>
      </WhatsAppLink>

      <main className="relative z-10">
        <SectionBlock className="pt-5 pb-12 sm:pt-8 sm:pb-16">
          <motion.div
            {...heroIntroMotion}
            className={cn(
              GLASS_PANEL,
              "relative overflow-hidden p-5 shadow-2xl sm:p-7 md:p-8 lg:p-10"
            )}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.10),transparent_30%,rgba(217,70,239,0.08))]"
            />

            <div className="relative flex flex-col items-stretch justify-between gap-8 xl:flex-row xl:gap-10">
              <div className="min-w-0 flex-1">
                <div className="mb-5 flex flex-wrap items-center gap-3 sm:mb-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs text-cyan-200 sm:text-sm">
                    <Sparkles aria-hidden="true" className="h-4 w-4" />
                    Perfil profesional
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300 sm:text-sm">
                    <Stars aria-hidden="true" className="h-4 w-4 text-fuchsia-300" />
                    Innovación · Ingeniería · Liderazgo
                  </div>
                </div>

                <h1 className="text-4xl font-black leading-[0.95] tracking-tight break-words sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px]">
                  Axel Gabriel
                  <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent sm:mt-2">
                    Pérez Jiménez
                  </span>
                </h1>

                <div className="mt-5 max-w-4xl space-y-4 sm:mt-7">
                  <p className="text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg lg:text-xl">
                    Desarrollador e innovador tecnológico enfocado en la creación de soluciones de alto impacto.
                    Especializado en robótica, automatización, ingeniería aplicada y desarrollo de producto,
                    con experiencia en entornos competitivos nacionales e internacionales y liderazgo de iniciativas tecnológicas.
                  </p>
                  <p className="max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base md:text-lg">
                    Perfil orientado a resultados, posicionamiento estratégico y ejecución técnica. Mi trabajo se centra
                    en construir proyectos con identidad sólida, funcionalidad real y proyección de crecimiento.
                  </p>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3" aria-label="Áreas principales">
                  {heroTags.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.08] px-3.5 py-2 text-xs text-slate-200 sm:text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col flex-wrap gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                  <WhatsAppLink className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] sm:px-6">
                    <MessageCircle aria-hidden="true" className="h-5 w-5" />
                    Registrar contacto en WhatsApp
                    <ArrowRight aria-hidden="true" className="h-5 w-5 transition group-hover:translate-x-1" />
                  </WhatsAppLink>

                  <a
                    href="#proyectos"
                    className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl border border-white/[0.15] bg-white/5 px-5 py-4 font-semibold text-white transition hover:bg-white/10 sm:px-6"
                  >
                    Ver áreas de especialización
                    <ChevronRight aria-hidden="true" className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <motion.aside {...heroAsideMotion} className="w-full xl:max-w-md 2xl:max-w-lg">
                <div className="relative h-full">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-1 rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 blur-xl opacity-50"
                  />
                  <div className="relative h-full rounded-[28px] border border-white/10 bg-slate-950/80 p-5 backdrop-blur-xl sm:rounded-[32px] sm:p-6 md:p-7">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400 sm:text-xs">Perfil</p>
                        <p className="mt-2 text-2xl font-bold sm:text-3xl">Alto rendimiento</p>
                      </div>
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-lg sm:h-16 sm:w-16">
                        <Trophy aria-hidden="true" className="h-7 w-7 text-white" />
                      </div>
                    </div>

                    <ul className="space-y-4" aria-label="Resumen profesional">
                      {profileHighlights.map((item) => (
                        <li key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                          <p className="text-sm text-slate-400">{item.title}</p>
                          <p className={cn("mt-1 text-base font-semibold leading-snug sm:text-lg", item.tone)}>
                            {item.value}
                          </p>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] p-4">
                      <Crown aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-relaxed text-slate-300">
                        Posicionamiento orientado a innovación, liderazgo tecnológico y construcción de iniciativas con proyección real.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.aside>
            </div>
          </motion.div>
        </SectionBlock>

        <SectionBlock className="pb-8 sm:pb-10">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Datos destacados">
            {stats.map((stat, index) => (
              <motion.li
                key={stat.label}
                {...fadeInUp(index * 0.08, 20)}
                className={cn(GLASS_PANEL, "p-5 text-center sm:p-6")}
              >
                <p className="break-words bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-2xl font-black text-transparent sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </motion.li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock className="py-8 sm:py-10">
          <div className="grid items-start gap-6 xl:grid-cols-[1.1fr_0.9fr] sm:gap-8">
            <motion.article
              {...fadeInUp()}
              className={cn(GLASS_PANEL, "p-5 sm:p-6 md:p-8")}
              aria-labelledby="perfil-y-posicionamiento"
            >
                <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.15] sm:h-12 sm:w-12">
                  <Orbit aria-hidden="true" className="h-5 w-5 text-cyan-300 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Trayectoria</p>
                  <h2 id="perfil-y-posicionamiento" className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    Perfil, visión y posicionamiento
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
                <p>
                  Desarrollo soluciones tecnológicas con enfoque en funcionalidad, impacto y escalabilidad.
                  Mi trabajo integra ingeniería, diseño de producto y estrategia, con el objetivo de construir sistemas
                  capaces de resolver problemas reales en entornos exigentes.
                </p>
                <p>
                  He participado en escenarios competitivos de alto nivel, desarrollando propuestas con identidad técnica,
                  presentación profesional y visión clara de implementación. Cada proyecto que impulso busca combinar
                  solidez técnica, valor estratégico y una presencia visual fuerte.
                </p>
                <p>
                  Mi perfil se define por la capacidad de transformar ideas en soluciones con proyección institucional,
                  competitiva y tecnológica, manteniendo un estándar alto tanto en ejecución como en posicionamiento.
                </p>
              </div>
            </motion.article>

            <motion.aside
              {...fadeInUp(0.08)}
              className={cn(
                CARD_PANEL,
                "bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10 p-5 sm:p-6 md:p-8"
              )}
              aria-labelledby="fortalezas"
            >
              <p className="mb-5 text-sm uppercase tracking-[0.25em] text-slate-400">Fortalezas</p>
              <ul id="fortalezas" className="grid grid-cols-1 gap-4 sm:grid-cols-2" aria-label="Fortalezas principales">
                {strengths.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.li
                      key={item.title}
                      {...fadeInUp(index * 0.05, 12)}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/[0.08]"
                    >
                      <Icon aria-hidden="true" className="mb-3 h-5 w-5 text-cyan-300" />
                      <p className="text-sm font-semibold leading-snug text-white sm:text-base">{item.title}</p>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.aside>
          </div>
        </SectionBlock>

        <SectionBlock className="py-8 sm:py-12">
          <motion.section
            {...fadeInUp()}
            className={cn(
              CARD_PANEL,
              "bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10 p-5 sm:p-7 md:p-8"
            )}
            aria-labelledby="impacto-estrategico"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <BadgeCheck aria-hidden="true" className="h-4 w-4 text-cyan-300" />
                  Impacto estratégico
                </div>
                <h2 id="impacto-estrategico" className="text-2xl font-black sm:text-3xl md:text-4xl">
                  Construcción de soluciones con presencia competitiva e institucional
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
                  Mi enfoque combina ejecución técnica, posicionamiento de marca personal y liderazgo de iniciativas con proyección real.
                </p>
              </div>

              <ul className="grid w-full gap-3 lg:max-w-xl" aria-label="Áreas de impacto">
                {impactItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </SectionBlock>

        <SectionBlock id="proyectos" className="py-10 sm:py-12" aria-labelledby="areas-de-especializacion">
          <SectionIntro
            eyebrow="Proyecto insignia y especialización"
            title="Áreas de especialización"
            headingId="areas-de-especializacion"
          />

          <ul className="grid gap-6 lg:grid-cols-2" aria-label="Portafolio de proyectos">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.li
                  key={project.title}
                  {...fadeInUp(index * 0.07)}
                  className={cn(
                    CARD_PANEL,
                    "relative overflow-hidden p-5 transition hover:-translate-y-1 sm:p-6 md:p-7",
                    project.featured
                      ? "border-cyan-300/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10"
                      : "bg-white/5 hover:bg-white/[0.07]"
                  )}
                >
                  {project.featured && (
                    <div className="absolute right-4 top-4 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-200">
                      Insignia
                    </div>
                  )}

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20">
                    <Icon aria-hidden="true" className="h-7 w-7 text-cyan-300" />
                  </div>

                  <article>
                    <h3 className="mt-5 text-2xl font-bold sm:text-3xl">{project.title}</h3>
                    <p className="mt-2 text-sm font-medium text-cyan-300 sm:text-base">{project.subtitle}</p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{project.description}</p>
                  </article>

                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Etiquetas de ${project.title}`}>
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/10 bg-slate-900/50 px-3 py-2 text-xs text-slate-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </motion.li>
              );
            })}
          </ul>
        </SectionBlock>

        <SectionBlock className="py-10 sm:py-12" aria-labelledby="logros-y-evolucion">
          <SectionIntro
            eyebrow="Trayectoria competitiva"
            title="Logros y evolución"
            headingId="logros-y-evolucion"
          />

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-cyan-400/50 via-blue-400/30 to-fuchsia-400/50 md:block"
            />
            <ol className="grid gap-5">
              {milestones.map((item, index) => (
                <motion.li
                  key={item.title}
                  {...fadeInUp(index * 0.06, 20)}
                  className="relative md:pl-16"
                >
                  <div className="absolute left-0 top-6 hidden h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 font-bold text-cyan-200 md:flex">
                    {item.year}
                  </div>
                  <article className="rounded-[26px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <span className="inline-flex rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-fuchsia-200">
                        {item.label}
                      </span>
                      <span className="text-xs uppercase tracking-[0.2em] text-cyan-200 md:hidden">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold sm:text-2xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{item.text}</p>
                  </article>
                </motion.li>
              ))}
            </ol>
          </div>
        </SectionBlock>

        <SectionBlock className="py-10 sm:py-12">
          <motion.section
            {...fadeInUp()}
            className={cn(GLASS_PANEL, "p-5 sm:p-7 md:p-8")}
            aria-labelledby="anris-mexico"
          >
            <div className="grid items-start gap-6 md:gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <Building2 aria-hidden="true" className="h-4 w-4 text-cyan-300" />
                  Liderazgo institucional
                </div>
                <h2 id="anris-mexico" className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                  ANRIS MÉXICO como plataforma de proyección y visión
                </h2>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
                <p>
                  Como presidente y fundador de ANRIS MÉXICO, mi visión se extiende más allá del desarrollo individual de proyectos.
                  El objetivo es impulsar estructuras, iniciativas y ecosistemas con capacidad de fortalecer la robótica,
                  la innovación social y el desarrollo tecnológico con mayor alcance.
                </p>
                <p>
                  Esta dimensión institucional fortalece mi perfil al combinar ejecución técnica, liderazgo organizacional,
                  visión estratégica y proyección de largo plazo.
                </p>
              </div>
            </div>
          </motion.section>
        </SectionBlock>

        <SectionBlock className="py-14 pb-24">
          <motion.section
            {...fadeInUp()}
            className={cn(
              CARD_PANEL,
              "relative overflow-hidden bg-gradient-to-r from-cyan-500/[0.15] via-blue-500/10 to-fuchsia-500/[0.15] p-6 sm:p-8 md:p-12"
            )}
            aria-labelledby="contacto"
          >
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute -right-10 top-0 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl sm:h-52 sm:w-52" />
              <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-fuchsia-500/20 blur-3xl sm:h-56 sm:w-56" />
            </div>

            <div className="relative z-10 max-w-4xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-300">Contacto</p>
              <h2 id="contacto" className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                ¿Te interesa conectar, colaborar o conocer más sobre mi trabajo?
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg">
                Esta página fue diseñada para compartirse de forma instantánea desde una tarjeta NFC.
                Con un solo toque, puedes conocer mi perfil y contactarme directamente por WhatsApp desde computadora, celular o tableta.
              </p>

              <div className="mt-8 flex flex-col flex-wrap gap-4 sm:flex-row">
                <WhatsAppLink className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-bold text-slate-950 transition hover:scale-[1.02]">
                  <MessageCircle aria-hidden="true" className="h-5 w-5" />
                  Contactar por WhatsApp
                  <ArrowRight aria-hidden="true" className="h-5 w-5 transition group-hover:translate-x-1" />
                </WhatsAppLink>
              </div>
            </div>
          </motion.section>
        </SectionBlock>
      </main>
    </div>
  );
}
