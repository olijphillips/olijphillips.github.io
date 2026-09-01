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
      "Mejorar mi administración del tiempo y dejar de apagar incendios.",
    "services.sc1how":
      "una evaluación de tus hábitos y agenda, priorización, time-blocking y rituales semanales de foco.",
    "services.sc1outcome":
      "Una agenda que refleja tus prioridades reales, menos días reactivos y espacio para lo estratégico.",
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
    "services.i3t": "Gestión política en organizaciones",
    "services.i3b":
      "influencia constructiva y alianzas que destraban proyectos.",
    "services.i4t": "Navegación por gerencia matricial",
    "services.i4b":
      "resultados sin autoridad directa, aprendida en la práctica.",
    "services.g2": "Proyectos & Entrega",
    "services.i5t": "Gestión de proyectos",
    "services.i5b":
      "con Agile, Waterfall o el framework del PMI, según el reto.",
    "services.i6t": "Administración de riesgos",
    "services.i6b":
      "riesgos identificados y gestionados antes de que sean crisis.",
    "services.i7t": "Prototipado de productos",
    "services.i7b": "de la idea a un prototipo que valida antes de invertir.",
    "services.g3": "Procesos & Operaciones",
    "services.i8t": "Mejora de procesos",
    "services.i8b": "diagnóstico y rediseño para operar con menos fricción.",
    "services.i9t": "Optimización / Value Stream Mapping",
    "services.i9b": "el flujo completo visible, los cuellos de botella fuera.",
    "services.i10t": "Control y monitoreo",
    "services.i10b": "indicadores que informan decisiones, no solo reportes.",
    "services.i11t": "Planificación financiera",
    "services.i11b": "presupuestos y P&L alineados a la estrategia.",
    "services.g4": "Personas & Carrera",
    "services.i12t": "Manejo del estrés y la ansiedad",
    "services.i12b":
      "herramientas prácticas para liderar con calma bajo presión.",
    "services.i13t": "Productividad personal",
    "services.i13b": "sistemas de trabajo que rinden sin sacrificar tu vida.",
    "services.i14t": "Administración del tiempo",
    "services.i14b": "prioridades claras y foco en lo que de verdad importa.",
    "services.i15t": "Planificación de carrera",
    "services.i15b": "una ruta realista hacia el rol que quieres alcanzar.",
    "services.g5": "Equipos & Talento",
    "services.i16t": "RRHH en tecnología",
    "services.i16b": "administración y desarrollo de talento técnico a escala.",
    "services.i17t": "Trabajo en equipo",
    "services.i17b": "equipos que colaboran, entregan y disfrutan el camino.",
    "services.cta": "Agendemos una conversación",
    "contact.title": "Contacto",
    "contact.lead":
      "¿Conversamos sobre tecnología, IA o transformación digital? Escríbeme y coordinamos una llamada.",
    "contact.ctaEmail": "Enviar correo",
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
    "services.sc1want": "Take control of my time and stop putting out fires.",
    "services.sc1how":
      "an assessment of your habits and schedule, prioritization, time-blocking, and weekly focus rituals.",
    "services.sc1outcome":
      "A schedule that reflects your real priorities, fewer reactive days, and room for strategic work.",
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
    "services.i3t": "Organizational politics management",
    "services.i3b":
      "constructive influence and alliances that unblock projects.",
    "services.i4t": "Navigating matrix management",
    "services.i4b":
      "delivering without direct authority — learned in practice.",
    "services.g2": "Projects & Delivery",
    "services.i5t": "Project management",
    "services.i5b":
      "with Agile, Waterfall, or the PMI framework — whatever the challenge calls for.",
    "services.i6t": "Risk management",
    "services.i6b": "risks identified and managed before they become crises.",
    "services.i7t": "Product prototyping",
    "services.i7b":
      "from idea to a prototype that validates before you invest.",
    "services.g3": "Processes & Operations",
    "services.i8t": "Process improvement",
    "services.i8b": "diagnosis and redesign to operate with less friction.",
    "services.i9t": "Optimization / Value Stream Mapping",
    "services.i9b": "the full flow made visible, bottlenecks removed.",
    "services.i10t": "Control & monitoring",
    "services.i10b": "metrics that inform decisions, not just reports.",
    "services.i11t": "Financial planning",
    "services.i11b": "budgets and P&L aligned with strategy.",
    "services.g4": "People & Career",
    "services.i12t": "Stress & anxiety management",
    "services.i12b": "practical tools to lead calmly under pressure.",
    "services.i13t": "Personal productivity",
    "services.i13b": "work systems that deliver without sacrificing your life.",
    "services.i14t": "Time management",
    "services.i14b": "clear priorities and focus on what truly matters.",
    "services.i15t": "Career planning",
    "services.i15b": "a realistic path to the role you want to reach.",
    "services.g5": "Teams & Talent",
    "services.i16t": "Tech HR management",
    "services.i16b": "managing and developing technical talent at scale.",
    "services.i17t": "Teamwork",
    "services.i17b": "teams that collaborate, deliver, and enjoy the journey.",
    "services.cta": "Let's schedule a conversation",
    "contact.title": "Contact",
    "contact.lead":
      "Let's talk about technology, AI, or digital transformation. Reach out and let's schedule a call.",
    "contact.ctaEmail": "Send email",
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
