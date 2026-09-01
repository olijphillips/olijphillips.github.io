"use strict";

/* ==========================================================================
   Internationalization (ES / EN)
   ========================================================================== */

const translations = {
  es: {
    "meta.title": "Olivier Jara Phillips — Director de Tecnología",
    "meta.description":
      "Olivier Jara Phillips — Director de Tecnología y líder ejecutivo con más de 25 años liderando organizaciones tecnológicas y transformación digital en Estados Unidos y Latinoamérica.",
    "aria.nav": "Navegación principal",
    "aria.menu": "Abrir menú",
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.services": "Servicios",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Director de Tecnología · Heredia, Costa Rica",
    "hero.subtitle":
      "Director de Tecnología y líder ejecutivo con más de 25 años liderando organizaciones tecnológicas, desarrollo de software y transformación digital en Estados Unidos y Latinoamérica.",
    "hero.ctaPrimary": "Hablemos",
    "hero.ctaSecondary": "Ver experiencia",
    "hero.portraitAlt": "Retrato en blanco y negro de Olivier Jara Phillips",
    "about.title": "Sobre mí",
    "about.p1":
      "Combino liderazgo ejecutivo con conocimiento práctico de tecnologías modernas: desarrollo Frontend y Backend, Cloud, DevOps, CI/CD, Docker, APIs y bases de datos, con un fuerte enfoque en IA, LLMs, RAG, AI Agents y automatización inteligente.",
    "about.p2":
      "Experiencia comprobada liderando equipos tecnológicos a gran escala y entregando soluciones escalables que conectan la estrategia de negocio con la ejecución tecnológica. Aporta experiencia adicional en Country Management y conocimiento experto en Lean Six Sigma, PMP, Agile, Scrum, DevOps e ITIL.",
    "about.fact1": "Años de experiencia",
    "about.fact2": "Colaboradores liderados",
    "about.fact3": "P&L anual gestionado",
    "about.fact4": "Profesionales formados",
    "about.credMore": "Ver las 40+ certificaciones en LinkedIn →",
    "about.edu1t": "MBA, Major en Finanzas",
    "about.edu1b": "Tecnológico de Costa Rica",
    "about.edu2t": "Executive Education",
    "about.edu2b": "Cornell · University of Virginia · George Washington",
    "about.edu3t": "BSc Computer Science + BSc Business Administration",
    "about.edu3b": "Universidad Internacional de las Américas",
    "experience.title": "Experiencia",
    "exp1.period": "10/2024 — Actualidad",
    "exp1.desc":
      "Soluciones de IA, automatización, consultoría tecnológica y desarrollo full-stack para clientes de múltiples industrias.",
    "exp2.period": "05/2024 — 10/2024",
    "exp2.desc":
      "Lideré el delivery de TI para servicios back-end y aplicaciones en la nube sobre Azure (REST APIs, Function Apps, C#, SQL Server), entregando 25 proyectos con Scrum.",
    "exp3.period": "01/2023 — 08/2023",
    "exp3.role": "Director País",
    "exp3.desc":
      "Responsable del P&L del país; definí y ejecuté la estrategia de crecimiento alineada con las operaciones globales nearshore.",
    "exp4.period": "10/2014 — 06/2022",
    "exp4.role": "Director Systems Application",
    "exp4.desc":
      "Director de estrategia DevOps, CX, Client Services y desarrollo de aplicaciones para 100+ instituciones financieras en EE.UU. Lideré una organización de 130+ asociados; reduje 20% los gastos de IT local y 70% el aging de tickets con Six Sigma.",
    "exp5.period": "04/2009 — 09/2014",
    "exp5.role": "VP — Director de Tecnología y Operaciones LATAM",
    "exp5.desc":
      "Líder nearshore de operaciones bancarias, gestión y desarrollo de aplicaciones, PM e infraestructura. Escalé una organización de 550+ colaboradores en México y Costa Rica con un P&L anual de $40M.",
    "exp6.period": "09/2004 — 01/2009",
    "exp6.role": "Regional SAP Logistics Service Delivery Mgr (LATAM)",
    "exp6.desc":
      "Lideré el delivery de SAP Supply Chain y Finance (SD/MM/FI/CO) para Procter & Gamble en Latinoamérica, con una organización regional de 70+ personas y niveles de servicio del 98.9%.",
    "exp7.period": "06/2000 — 09/2004",
    "exp7.role": "Senior Application Analyst",
    "exp7.desc":
      "Global Application Owner de soluciones de Payroll, Benefits, HR y Contact Center en Latinoamérica y EE.UU., incluyendo upgrades de SAP y soporte L3.",
    "projects.title": "Proyectos destacados",
    "proj1.title": "Soluciones de IA para servicio al cliente",
    "proj1.desc":
      "Diseño e implementación de soluciones de atención al cliente potenciadas con IA para clientes de diversas industrias.",
    "proj2.title": "Automatización de procesos empresariales",
    "proj2.desc":
      "Automatización de procesos de RRHH y contabilidad para múltiples empresas, reduciendo trabajo manual y errores operativos.",
    "proj3.title": "Plataformas web full-stack",
    "proj3.desc":
      "Desarrollo de aplicaciones web completas con React, Next.js y Node.js sobre PostgreSQL y APIs REST desplegadas en la nube.",
    "proj4.title": "Ramp-up de organizaciones de Tecnología y Operaciones",
    "proj4.desc":
      "Construcción y escalado de organizaciones nearshore de tecnología y operaciones desde cero: 550+ colaboradores entre Costa Rica y México dando servicio a unidades de negocio en EE.UU., con ownership de un P&L anual de $40M.",
    "skills.title": "Habilidades",
    "skills.group1": "Frontend",
    "skills.group2": "Backend & APIs",
    "skills.group3": "Dev & CI/CD",
    "skills.group4": "IA & Automatización",
    "services.title": "¿Cómo puedo ayudarte?",
    "services.lead":
      "No vendo servicios: resuelvo tus retos. Dime qué quieres lograr y armamos juntos el camino.",
    "services.wantLabel": "Quiero…",
    "services.howLabel": "Olivier te ayuda mediante",
    "services.outcomeLabel": "El outcome",
    "services.sc1want":
      "Incorporar tecnología para aprovechar las innovaciones en mi propuesta de valor.",
    "services.sc1how":
      "explorar tecnologías emergentes (IA, automatización), identificar los casos de uso de mayor impacto y lanzar un piloto rápido que demuestre valor.",
    "services.sc1outcome":
      "Innovación aplicada a tu propuesta de valor, con ventaja competitiva medible y un piloto validado en semanas.",
    "services.sc2want": "Procesos más ágiles y costos bajo control.",
    "services.sc2how":
      "mapeo de value stream, mejoras Lean Six Sigma y automatización con IA de los pasos repetitivos.",
    "services.sc2outcome":
      "Ciclos más cortos, menos errores y un ahorro medible en horas y dinero.",
    "services.sc3want": "Crecer como líder sin quemarme en el intento.",
    "services.sc3how":
      "asesoría 1:1 en liderazgo, manejo del estrés y la ansiedad, y un plan de carrera con metas concretas.",
    "services.sc3outcome":
      "Decisiones más claras, un equipo comprometido y una carrera con dirección.",
    "services.catalogTitle": "¿Qué puedo hacer por usted?",
    "services.g1": "Estrategia & Liderazgo",
    "services.i1t": "Asesoría en estrategia y liderazgo",
    "services.i1b":
      "liderazgo empresarial y organizacional con foco en resultados.",
    "services.i2t": "Planificación estratégica",
    "services.i2b": "del objetivo de negocio a un plan ejecutable.",
    "services.g2": "Proyectos & Procesos",
    "services.i5t": "Gestión de proyectos",
    "services.i5b":
      "con Agile, Waterfall o el framework del PMI, según el reto.",
    "services.i7t": "Prototipado de productos",
    "services.i7b": "de la idea a un prototipo que valida antes de invertir.",
    "services.i8t": "Mejora de procesos",
    "services.i8b": "diagnóstico y rediseño para operar con menos fricción.",
    "services.i9t": "Optimización / Value Stream Mapping",
    "services.i9b": "el flujo completo visible, los cuellos de botella fuera.",
    "services.g4": "Personas & Carrera",
    "services.i12t": "Manejo del estrés y la ansiedad",
    "services.i12b":
      "herramientas prácticas para liderar con calma bajo presión.",
    "services.i15t": "Planificación de carrera",
    "services.i15b": "una ruta realista hacia el rol que quieres alcanzar.",
    "services.trainerLabel": "Facilitador certificado",
    "services.trainerNote":
      "Speed of Trust (FranklinCovey) · Culture of Accountability (Partners In Leadership) · DevOps Trainer acreditado (DASA). Liderazgo, gestión del cambio, accountability y DevOps para 400+ profesionales — y me sigue gustando tanto como el día uno.",
    "services.moreLine":
      "¿No ves lo que buscas? Pregúntame igual — lo resolvemos.",
    "services.cta": "Conversemos 30 minutos — sin compromiso",
    "contact.title": "Contacto",
    "contact.lead":
      "¿Conversamos sobre tecnología, IA o transformación digital? Escríbeme y coordinamos una llamada — sin compromiso y sin letra chica.",
    "contact.ctaEmail": "Escríbeme y conversamos",
    "contact.ctaWhatsapp": "WhatsApp",
    "contact.ctaLinkedin": "LinkedIn",
    "contact.labelEmail": "Email",
    "contact.labelPhone": "Teléfono",
    "contact.labelLocation": "Ubicación",
    "contact.location": "Heredia, Costa Rica",
    "footer.rights": "Olivier Jara Phillips · Todos los derechos reservados.",
  },
  en: {
    "meta.title": "Olivier Jara Phillips — Technology Director",
    "meta.description":
      "Olivier Jara Phillips — Technology Director and executive leader with 25+ years leading technology organizations and digital transformation across the US and Latin America.",
    "aria.nav": "Main navigation",
    "aria.menu": "Open menu",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.eyebrow": "Technology Director · Heredia, Costa Rica",
    "hero.subtitle":
      "Technology Director and executive leader with 25+ years leading technology organizations, software development, and digital transformation across the US and Latin America.",
    "hero.ctaPrimary": "Let's talk",
    "hero.ctaSecondary": "View experience",
    "hero.portraitAlt": "Black and white portrait of Olivier Jara Phillips",
    "about.title": "About me",
    "about.p1":
      "I combine executive leadership with hands-on knowledge of modern technologies: Frontend and Backend development, Cloud, DevOps, CI/CD, Docker, APIs, and databases, with a strong focus on AI, LLMs, RAG, AI Agents, and intelligent automation.",
    "about.p2":
      "Proven experience leading large-scale technology teams and delivering scalable solutions that connect business strategy with technology execution. Brings additional Country Management experience and expert knowledge of Lean Six Sigma, PMP, Agile, Scrum, DevOps, and ITIL.",
    "about.fact1": "Years of experience",
    "about.fact2": "Associates led",
    "about.fact3": "Annual P&L managed",
    "about.fact4": "Professionals trained",
    "about.credMore": "See all 40+ certifications on LinkedIn →",
    "about.edu1t": "MBA, Finance Major",
    "about.edu1b": "Tecnológico de Costa Rica",
    "about.edu2t": "Executive Education",
    "about.edu2b": "Cornell · University of Virginia · George Washington",
    "about.edu3t": "BSc Computer Science + BSc Business Administration",
    "about.edu3b": "Universidad Internacional de las Américas",
    "experience.title": "Experience",
    "exp1.period": "10/2024 — Present",
    "exp1.desc":
      "AI, automation, technology consulting, and full-stack solutions for clients across multiple industries.",
    "exp2.period": "05/2024 — 10/2024",
    "exp2.desc":
      "Led IT delivery for back-end services and cloud applications on Azure (REST APIs, Function Apps, C#, SQL Server), delivering 25 projects using Scrum.",
    "exp3.period": "01/2023 — 08/2023",
    "exp3.role": "Country Director",
    "exp3.desc":
      "Country P&L owner; defined and executed the country growth strategy aligned to global nearshore operations.",
    "exp4.period": "10/2014 — 06/2022",
    "exp4.role": "Director Systems Application",
    "exp4.desc":
      "Director for DevOps strategy, CX, Client Services, and application development serving 100+ US financial institutions. Led an organization of 130+ associates; cut local IT expenses by 20% and ticket aging by 70% through Six Sigma improvements.",
    "exp5.period": "04/2009 — 09/2014",
    "exp5.role": "VP — Technology & Operations Director LATAM",
    "exp5.desc":
      "Nearshore leader for banking operations, application management and development, PM, and infrastructure. Ramped up an organization of 550+ associates across Mexico and Costa Rica, owning a $40M annual P&L.",
    "exp6.period": "09/2004 — 01/2009",
    "exp6.role": "Regional SAP Logistics Service Delivery Mgr (LATAM)",
    "exp6.desc":
      "Led SAP Supply Chain and Finance (SD/MM/FI/CO) application delivery for Procter & Gamble across Latin America, including a 70+ person regional organization and 98.9% contractual service levels.",
    "exp7.period": "06/2000 — 09/2004",
    "exp7.role": "Senior Application Analyst",
    "exp7.desc":
      "Global application owner for Payroll, Benefits, HR, and contact-center solutions across Latin America and the US, including SAP upgrades and L3 support.",
    "projects.title": "Featured projects",
    "proj1.title": "AI-powered customer service solutions",
    "proj1.desc":
      "Designed and implemented AI-powered customer service solutions for clients across various industries.",
    "proj2.title": "Business process automation",
    "proj2.desc":
      "Automated HR and accounting processes for multiple companies, reducing manual work and operational errors.",
    "proj3.title": "Full-stack web platforms",
    "proj3.desc":
      "Built complete web applications with React, Next.js, and Node.js on PostgreSQL and REST APIs deployed to the cloud.",
    "proj4.title": "Technology & Operations organization ramp-up",
    "proj4.desc":
      "Built and scaled nearshore technology and operations organizations from the ground up: 550+ associates across Costa Rica and Mexico serving US business units, owning a $40M annual P&L.",
    "skills.title": "Skills",
    "skills.group1": "Frontend",
    "skills.group2": "Backend & APIs",
    "skills.group3": "Dev & CI/CD",
    "skills.group4": "AI & Automation",
    "services.title": "How can I help you?",
    "services.lead":
      "I don't sell services — I solve your challenges. Tell me what you want to achieve and we'll build the path together.",
    "services.wantLabel": "I want…",
    "services.howLabel": "Olivier helps you through",
    "services.outcomeLabel": "The outcome",
    "services.sc1want":
      "Bring technology into my value proposition to leverage innovation.",
    "services.sc1how":
      "exploring emerging technologies (AI, automation), identifying the highest-impact use cases, and launching a quick pilot that proves value.",
    "services.sc1outcome":
      "Innovation applied to your value proposition, with measurable competitive advantage and a pilot validated in weeks.",
    "services.sc2want": "Faster processes and costs under control.",
    "services.sc2how":
      "value stream mapping, Lean Six Sigma improvements, and AI automation of repetitive steps.",
    "services.sc2outcome":
      "Shorter cycles, fewer errors, and measurable savings in hours and money.",
    "services.sc3want": "Grow as a leader without burning out.",
    "services.sc3how":
      "1:1 leadership coaching, stress and anxiety management, and a career plan with concrete goals.",
    "services.sc3outcome":
      "Clearer decisions, a committed team, and a career with direction.",
    "services.catalogTitle": "What can I do for you?",
    "services.g1": "Strategy & Leadership",
    "services.i1t": "Strategy & leadership advisory",
    "services.i1b":
      "business and organizational leadership focused on results.",
    "services.i2t": "Strategic planning",
    "services.i2b": "from business goal to an executable plan.",
    "services.g2": "Projects & Processes",
    "services.i5t": "Project management",
    "services.i5b":
      "with Agile, Waterfall, or the PMI framework — whatever the challenge calls for.",
    "services.i7t": "Product prototyping",
    "services.i7b":
      "from idea to a prototype that validates before you invest.",
    "services.i8t": "Process improvement",
    "services.i8b": "diagnosis and redesign to operate with less friction.",
    "services.i9t": "Optimization / Value Stream Mapping",
    "services.i9b": "the full flow made visible, bottlenecks removed.",
    "services.g4": "People & Career",
    "services.i12t": "Stress & anxiety management",
    "services.i12b": "practical tools to lead calmly under pressure.",
    "services.i15t": "Career planning",
    "services.i15b": "a realistic path to the role you want to reach.",
    "services.trainerLabel": "Certified facilitator",
    "services.trainerNote":
      "Speed of Trust (FranklinCovey) · Culture of Accountability (Partners In Leadership) · Accredited DevOps Trainer (DASA). Leadership, change management, accountability, and DevOps for 400+ professionals — and I still enjoy it as much as day one.",
    "services.moreLine":
      "Don't see what you're looking for? Ask anyway — we'll figure it out.",
    "services.cta": "Let's talk for 30 minutes — no strings attached",
    "contact.title": "Contact",
    "contact.lead":
      "Let's talk about technology, AI, or digital transformation. Reach out and let's schedule a call — no pressure, no fine print.",
    "contact.ctaEmail": "Write me and let's talk",
    "contact.ctaWhatsapp": "WhatsApp",
    "contact.ctaLinkedin": "LinkedIn",
    "contact.labelEmail": "Email",
    "contact.labelPhone": "Phone",
    "contact.labelLocation": "Location",
    "contact.location": "Heredia, Costa Rica",
    "footer.rights": "Olivier Jara Phillips · All rights reserved.",
  },
};

const LANG_STORAGE_KEY = "lang";

const getInitialLanguage = () => {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  if (saved === "es" || saved === "en") return saved;
  return "es";
};

const applyLanguage = (lang) => {
  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      element.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const spec = element.getAttribute("data-i18n-attr");
    const [attr, key] = spec.split(":").map((part) => part.trim());
    if (attr && key && dict[key] !== undefined) {
      element.setAttribute(attr, dict[key]);
    }
  });

  document.documentElement.lang = lang;
  langToggle.textContent = lang === "es" ? "EN" : "ES";
  langToggle.setAttribute(
    "aria-label",
    lang === "es" ? "Cambiar idioma a inglés" : "Switch language to Spanish",
  );
};

const langToggle = document.getElementById("langToggle");
let currentLang = getInitialLanguage();
applyLanguage(currentLang);

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  localStorage.setItem(LANG_STORAGE_KEY, currentLang);
  applyLanguage(currentLang);
});

/* ==========================================================================
   Mobile navigation
   ========================================================================== */

const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.addEventListener("click", (event) => {
  if (event.target.matches(".nav-link, .lang-toggle")) {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* ==========================================================================
   Header border on scroll
   ========================================================================== */

const siteHeader = document.getElementById("siteHeader");

window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 10);
});

/* ==========================================================================
   Active navigation link based on visible section
   ========================================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const setActiveLink = (sectionId) => {
  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${sectionId}`,
    );
  });
};

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);

sections.forEach((section) => sectionObserver.observe(section));

/* ==========================================================================
   Scroll reveal animations
   ========================================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

revealElements.forEach((element) => revealObserver.observe(element));

/* ==========================================================================
   Footer year
   ========================================================================== */

document.getElementById("currentYear").textContent = new Date().getFullYear();
