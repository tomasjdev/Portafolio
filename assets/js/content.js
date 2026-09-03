/**
 * content.js — Fuente única de verdad del portafolio.
 *
 * Para actualizar el sitio normalmente basta con editar ESTE archivo:
 *   · CONFIG   → datos de contacto y enlaces.
 *   · I18N     → textos fijos de la interfaz (claves data-i18n del HTML).
 *   · CONTENT  → skills, proyectos, experiencia y certificaciones (ES/EN).
 *
 * Convención: cada bloque de contenido tiene la forma { es: ..., en: ... }.
 */

/* ────────────────────────────── CONFIGURACIÓN ────────────────────────────── */

const CONFIG = {
  email: 'jimeneztomas912@gmail.com',
  // El teléfono se mantiene solo en el PDF del CV: al ser un sitio público,
  // publicarlo en el HTML lo expone a rastreo automatizado.
  location: 'Isla de Maipo, Santiago, Chile',
  linkedin: 'https://www.linkedin.com/in/tomas-jimenez-albornoz',
  github: 'https://github.com/tomasjdev',
  cv: 'assets/cv/Tomas-Jimenez-Albornoz-CV.pdf',
};

/* ──────────────────────── TEXTOS DE INTERFAZ (i18n) ──────────────────────── */

const I18N = {
  es: {
    'a11y.skip': 'Saltar al contenido principal',

    'nav.about': 'Sobre mí',
    'nav.skills': 'Skills',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.certs': 'Certificaciones',
    'nav.contact': 'Contacto',

    'hero.eyebrow': 'Disponible para nuevos proyectos',
    'hero.greeting': 'Hola, soy',
    'hero.role': 'Analista de Datos',
    'hero.role2': 'Automatización de Procesos',
    'hero.desc': 'Identifico procesos manuales que consumen tiempo y los transformo en herramientas automatizadas, prácticas y fáciles de mantener — usando la herramienta más simple que resuelve el problema, no la más compleja.',
    'hero.ctaProjects': 'Ver proyectos',
    'hero.ctaCv': 'Descargar CV',

    'about.title': 'Sobre mí',
    'about.sub': 'Quién soy y cómo trabajo',
    'about.p1': 'Soy estudiante de Ingeniería en Computación e Informática (Universidad Andrés Bello) con experiencia práctica en <strong>gobierno de datos</strong>, automatización de procesos e infraestructura en la nube.',
    'about.p2': 'En mi paso por el área de Gobierno de Datos de BCI aseguré la calidad e integridad de activos de información sobre AWS, lideré el mapeo técnico del linaje de datos de la empresa y automaticé controles de auditoría que antes se cruzaban a mano.',
    'about.p3': 'Me interesa el punto donde los datos, los procesos y la infraestructura se cruzan: construir sistemas funcionales, seguros y escalables que alguien más pueda mantener sin necesitarme al lado.',
    'about.location': 'Ubicación',
    'about.education': 'Formación',
    'about.educationV': 'Ing. en Computación e Informática — UNAB',
    'about.languages': 'Idiomas',
    'about.languagesV': 'Español (nativo) · Inglés (avanzado)',
    'about.approachTitle': 'Cómo abordo un problema',

    'skills.title': 'Stack técnico',
    'skills.sub': 'Herramientas con las que trabajo a diario',

    'projects.title': 'Proyectos',
    'projects.sub': 'Procesos manuales convertidos en sistemas automatizados',
    'projects.detail': 'Ver detalle',
    'projects.value': 'Valor entregado',
    'projects.stack': 'Stack',
    'projects.highlights': 'Puntos clave',
    'projects.repo': 'Ver repositorio',

    'experience.title': 'Experiencia y educación',
    'experience.sub': 'Trayectoria laboral y académica',

    'certs.title': 'Certificaciones',
    'certs.sub': 'Formación complementaria',

    'contact.title': 'Conversemos',
    'contact.sub': '¿Tienes un proceso que se puede automatizar? Escríbeme.',
    'contact.cv': 'Descargar CV en PDF',
    'contact.emailLabel': 'Correo',
    'contact.linkedinLabel': 'LinkedIn',
    'contact.githubLabel': 'GitHub',
    'contact.locationLabel': 'Ubicación',

    'footer.note': 'Hecho con HTML, CSS y JavaScript — sin frameworks.',
  },

  en: {
    'a11y.skip': 'Skip to main content',

    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.certs': 'Certifications',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Available for new projects',
    'hero.greeting': "Hi, I'm",
    'hero.role': 'Data Analyst',
    'hero.role2': 'Process Automation',
    'hero.desc': 'I find manual, time-consuming processes and turn them into automated tools that are practical and easy to maintain — using the simplest tool that solves the problem, not the most complex one.',
    'hero.ctaProjects': 'View projects',
    'hero.ctaCv': 'Download CV',

    'about.title': 'About me',
    'about.sub': 'Who I am and how I work',
    'about.p1': "I'm a Computer Engineering student at Universidad Andrés Bello with hands-on experience in <strong>data governance</strong>, process automation and cloud infrastructure.",
    'about.p2': "During my time in BCI's Data Governance team I safeguarded the quality and integrity of information assets on AWS, led the technical mapping of the company's data lineage, and automated audit controls that used to be cross-checked by hand.",
    'about.p3': "I'm drawn to where data, processes and infrastructure meet: building functional, secure and scalable systems that someone else can maintain without needing me next to them.",
    'about.location': 'Location',
    'about.education': 'Education',
    'about.educationV': 'Computer Engineering — UNAB',
    'about.languages': 'Languages',
    'about.languagesV': 'Spanish (native) · English (advanced)',
    'about.approachTitle': 'How I approach a problem',

    'skills.title': 'Tech stack',
    'skills.sub': 'Tools I work with every day',

    'projects.title': 'Projects',
    'projects.sub': 'Manual processes turned into automated systems',
    'projects.detail': 'View details',
    'projects.value': 'Value delivered',
    'projects.stack': 'Stack',
    'projects.highlights': 'Key points',
    'projects.repo': 'View repository',

    'experience.title': 'Experience & education',
    'experience.sub': 'Professional and academic background',

    'certs.title': 'Certifications',
    'certs.sub': 'Complementary training',

    'contact.title': "Let's talk",
    'contact.sub': 'Got a process that could be automated? Drop me a line.',
    'contact.cv': 'Download CV (PDF)',
    'contact.emailLabel': 'Email',
    'contact.linkedinLabel': 'LinkedIn',
    'contact.githubLabel': 'GitHub',
    'contact.locationLabel': 'Location',

    'footer.note': 'Built with HTML, CSS and JavaScript — no frameworks.',
  },
};

/* ─────────────────────────── CONTENIDO DINÁMICO ─────────────────────────── */

const CONTENT = {

  /* Contadores del hero */
  stats: [
    { value: '3+',  label: { es: 'Sistemas automatizados', en: 'Automated systems' } },
    { value: '5',   label: { es: 'Años de formación en ingeniería', en: 'Years of engineering training' } },
    { value: 'AWS', label: { es: 'S3 · Athena · Redshift', en: 'S3 · Athena · Redshift' } },
  ],

  /* Método de trabajo (tarjeta de "Sobre mí") */
  approach: [
    {
      title: { es: 'Entender el proceso real', en: 'Understand the real process' },
      text: {
        es: 'Antes de escribir código, mapeo cómo se hace hoy la tarea y dónde se pierde el tiempo.',
        en: 'Before writing code, I map how the task is done today and where the time is lost.',
      },
    },
    {
      title: { es: 'Elegir la herramienta más simple', en: 'Pick the simplest tool' },
      text: {
        es: 'Excel, Apps Script o desarrollo a medida: gana la opción que el equipo pueda sostener.',
        en: 'Excel, Apps Script or custom development: the option the team can sustain wins.',
      },
    },
    {
      title: { es: 'Automatizar y validar', en: 'Automate and validate' },
      text: {
        es: 'Cálculos verificables, trazabilidad de cada movimiento y alertas antes del error.',
        en: 'Verifiable calculations, traceability of every movement and alerts before failure.',
      },
    },
    {
      title: { es: 'Documentar y entregar', en: 'Document and hand over' },
      text: {
        es: 'La solución tiene que funcionar sin mí. Si necesita explicación constante, está incompleta.',
        en: 'The solution has to work without me. If it needs constant explaining, it is incomplete.',
      },
    },
  ],

  /* Stack técnico agrupado por categoría */
  skills: [
    {
      icon: 'code',
      title: { es: 'Lenguajes', en: 'Languages' },
      items: ['Python', 'JavaScript', 'SQL', 'VBA'],
    },
    {
      icon: 'globe',
      title: { es: 'Desarrollo web', en: 'Web development' },
      items: ['HTML', 'CSS', 'Node.js', 'Express'],
    },
    {
      icon: 'cloud',
      title: { es: 'Cloud & datos', en: 'Cloud & data' },
      items: ['AWS S3', 'Athena', 'Redshift', 'Gobierno de Datos'],
    },
    {
      icon: 'chart',
      title: { es: 'Análisis y visualización', en: 'Analytics & BI' },
      items: ['Power BI', 'Excel avanzado', 'Tablas dinámicas'],
    },
    {
      icon: 'bolt',
      title: { es: 'Automatización', en: 'Automation' },
      items: ['Google Apps Script', 'Google Sheets API', 'Scripting de procesos'],
    },
    {
      icon: 'tools',
      title: { es: 'Herramientas', en: 'Tools' },
      items: ['Visual Studio Code', 'Git & GitHub', 'Android Studio'],
    },
  ],

  /*
   * Proyectos, ordenados de mayor a menor demostrabilidad.
   * Para añadir uno nuevo basta con copiar la estructura de un objeto.
   */
  projects: [
    {
      id: 'inventario',
      featured: true,
      year: '2025',
      icon: 'boxes',
      title: {
        es: 'Sistema de Inventario con Formulario Web y Alertas Automáticas',
        en: 'Inventory System with Web Form and Automatic Alerts',
      },
      summary: {
        es: 'Control de inventario accesible desde el celular, sin apps ni cuentas — con automatización en tiempo real y alertas de stock bajo.',
        en: 'Inventory control accessible from any phone, with no apps or accounts — real-time automation and low-stock alerts.',
      },
      description: {
        es: 'Sistema de control de inventario accesible desde el celular sin necesidad de instalar apps ni tener cuenta de Google. Los trabajadores registran entradas y salidas de stock mediante un formulario web (Google Forms); un script de automatización en Google Apps Script procesa cada respuesta, genera un ID de movimiento único, actualiza el historial de registros y colorea visualmente el tipo de movimiento. El stock se recalcula en tiempo real con fórmulas SUMIFS y un semáforo automático (OK / Stock bajo / Sin stock) alerta cuando un producto llega a su umbral mínimo.',
        en: 'Inventory control system accessible from a phone with no app install and no Google account required. Workers log stock in/out through a web form (Google Forms); a Google Apps Script automation processes every response, generates a unique movement ID, updates the record history and colour-codes the movement type. Stock is recalculated in real time with SUMIFS formulas, and an automatic traffic light (OK / Low stock / Out of stock) fires when a product hits its minimum threshold.',
      },
      value: {
        es: 'Adopción sin fricción para personal no técnico (solo necesitan un link), trazabilidad completa de movimientos y alertas de quiebre de stock sin revisión manual.',
        en: 'Frictionless adoption for non-technical staff (a single link is all they need), full traceability of movements and stock-out alerts with no manual review.',
      },
      highlights: {
        es: [
          'Captura por formulario web: cero instalación y cero cuentas para el usuario final.',
          'ID único por movimiento y coloreado automático del tipo de operación.',
          'Recálculo de stock en tiempo real con SUMIFS.',
          'Semáforo de umbral mínimo: OK / Stock bajo / Sin stock.',
        ],
        en: [
          'Web-form capture: zero install and zero accounts for the end user.',
          'Unique ID per movement and automatic colour-coding by operation type.',
          'Real-time stock recalculation with SUMIFS.',
          'Minimum-threshold traffic light: OK / Low stock / Out of stock.',
        ],
      },
      stack: ['Google Forms', 'Google Sheets', 'Google Apps Script', 'JavaScript'],
      tags: ['google apps script', 'javascript', 'google sheets', 'automation', 'inventory management'],
      repo: null,
    },

    {
      id: 'liquidacion',
      featured: false,
      year: '2025',
      icon: 'truck',
      title: {
        es: 'Sistema de Liquidación Automática para Transporte de Carga',
        en: 'Automatic Payroll Settlement System for Freight Transport',
      },
      summary: {
        es: 'Herramienta en Excel que automatiza el cálculo de liquidación de sueldos para operadores de transporte a partir de los datos crudos del viaje.',
        en: 'Excel tool that automates driver payroll settlement from the raw trip data.',
      },
      description: {
        es: 'Herramienta en Excel para una empresa de transporte de carga (México) que automatiza la liquidación de viajes de operadores. A partir de datos de kilometraje, combustible, casetas y gastos extra, el sistema calcula automáticamente el rendimiento real vs. teórico por categoría de peso del camión, la comisión por flete, el ajuste financiero por consumo de combustible (bono o descuento según litros ahorrados o excedidos) y el sueldo final del operador — todo mediante fórmulas encadenadas (VLOOKUP y lógica condicional multi-hoja) sin intervención manual. Incluye además checklist de inventario de la unidad, bitácora de recargas y casetas, generación de boleta oficial de viaje e historial acumulado de viajes liquidados.',
        en: 'Excel tool built for a freight company in Mexico that automates driver trip settlement. From mileage, fuel, toll and extra-expense data, the system automatically computes real vs. theoretical fuel efficiency by truck weight category, freight commission, the financial adjustment for fuel consumption (bonus or deduction based on litres saved or exceeded) and the driver’s final pay — all through chained formulas (VLOOKUP and multi-sheet conditional logic) with no manual intervention. It also includes a unit inventory checklist, a refuelling and toll log, official trip receipt generation and a cumulative history of settled trips.',
      },
      value: {
        es: 'Elimina cálculos manuales propensos a error en la liquidación de sueldos y estandariza el proceso de cierre de viaje, reduciendo tiempos y errores de captura.',
        en: 'Removes error-prone manual calculations from payroll settlement and standardises the trip closing process, cutting both time and data-entry errors.',
      },
      highlights: {
        es: [
          'Rendimiento real vs. teórico según la categoría de peso del camión.',
          'Ajuste financiero automático por litros ahorrados o excedidos.',
          'Generación de boleta oficial de viaje en PDF.',
          'Bitácora de recargas, casetas e historial acumulado de liquidaciones.',
        ],
        en: [
          'Real vs. theoretical fuel efficiency by truck weight category.',
          'Automatic financial adjustment for litres saved or exceeded.',
          'Official trip receipt generated as PDF.',
          'Refuelling and toll log plus a cumulative settlement history.',
        ],
      },
      stack: ['Excel', 'Fórmulas avanzadas', 'VLOOKUP', 'Lógica condicional multi-hoja'],
      tags: ['excel', 'vba', 'automation', 'formulas', 'payroll calculation', 'logistics'],
      repo: 'https://github.com/Morpheus093001/Sistema-de-Automatizaci-n-de-Bit-coras-y-Liquidaci-n-Financiera',
    },

    {
      id: 'familia-segura',
      featured: true,
      year: '2025',
      icon: 'shield',
      title: {
        es: 'Familia Segura — App de Monitoreo GPS para Adultos Mayores',
        en: 'Familia Segura — GPS Monitoring App for Older Adults',
      },
      summary: {
        es: 'Plataforma web conectada a un smartwatch para monitoreo de adultos mayores vía GPS, con botón de alerta de emergencia.',
        en: 'Web platform connected to a smartwatch for GPS monitoring of older adults, with an emergency alert button.',
      },
      description: {
        es: 'Plataforma web conectada a un smartwatch para el monitoreo de adultos mayores mediante geolocalización GPS y botón de alerta de emergencia, con notificación automática a los contactos designados. La aplicación de emergencia SOS del reloj fue desarrollada en Android Studio, y la ubicación en tiempo real y la gestión de contactos se visualizan desde una página web vinculada al dispositivo. Desarrollado como proyecto de título de Ingeniería en Computación e Informática (Universidad Andrés Bello).',
        en: 'Web platform connected to a smartwatch for monitoring older adults through GPS geolocation and an emergency alert button, with automatic notification to designated contacts. The watch’s SOS emergency app was built in Android Studio, while real-time location and contact management are handled from a web page linked to the device. Developed as the capstone project for the Computer Engineering degree at Universidad Andrés Bello.',
      },
      value: {
        es: 'Integración con hardware real (no solo software de oficina): geolocalización en vivo y una cadena de alerta que llega a la familia en segundos.',
        en: 'Integration with real hardware (not just office software): live geolocation and an alert chain that reaches the family within seconds.',
      },
      highlights: {
        es: [
          'App SOS embarcada en smartwatch desarrollada en Android Studio.',
          'Seguimiento de ubicación en tiempo real sobre mapa web.',
          'Notificación automática a contactos de emergencia designados.',
          'Gestión de contactos y del dispositivo desde el panel web.',
        ],
        en: [
          'On-watch SOS app built in Android Studio.',
          'Real-time location tracking on a web map.',
          'Automatic notification to designated emergency contacts.',
          'Contact and device management from the web dashboard.',
        ],
      },
      stack: ['Desarrollo web', 'Android Studio', 'Integración GPS / IoT', 'APIs'],
      tags: ['web development', 'api integration', 'gps/iot integration', 'healthtech'],
      repo: null,
    },
  ],

  /* Línea de tiempo: experiencia laboral y académica */
  timeline: [
    {
      type: 'work',
      period: { es: 'Febrero 2026 – Mayo 2026', en: 'February 2026 – May 2026' },
      role: { es: 'Analista en Gobierno de Datos', en: 'Data Governance Analyst' },
      org: 'BCI — Santiago, Chile',
      bullets: {
        es: [
          'Aseguré el control de calidad e integridad de activos de información alojados en infraestructura Cloud de AWS (S3 Browser, Athena y Redshift).',
          'Lideré el mapeo técnico del linaje de datos de la empresa, desarrollando diagramas de clase estructurados para los modelos analíticos.',
          'Ejecuté el Control de Auditoría R04 para resguardar la privacidad de datos de clientes y desarrollé un script automatizado para cruzar información crucial.',
          'Asumí la coordinación de las mesas técnicas entre las áreas de Gobierno de Datos y Arquitectura.',
        ],
        en: [
          'Ensured quality control and integrity of information assets hosted on AWS cloud infrastructure (S3 Browser, Athena and Redshift).',
          "Led the technical mapping of the company's data lineage, producing structured class diagrams for the analytical models.",
          'Ran the R04 Audit Control to safeguard customer data privacy and built an automated script to cross-check critical information.',
          'Coordinated the technical working sessions between the Data Governance and Architecture teams.',
        ],
      },
    },
    {
      type: 'work',
      period: { es: 'Agosto 2025 – Diciembre 2025', en: 'August 2025 – December 2025' },
      role: { es: 'Proyecto de Título: Familia Segura', en: 'Capstone Project: Familia Segura' },
      org: 'Universidad Andrés Bello — Santiago, Chile',
      bullets: {
        es: [
          'Desarrollé una aplicación web para el monitoreo de adultos mayores en tiempo real.',
          'Integré a un smartwatch con GPS una aplicación de emergencia SOS desarrollada en Android Studio.',
          'Visualicé la ubicación y gestioné los contactos de emergencia desde una página web vinculada al smartwatch.',
        ],
        en: [
          'Built a web application for real-time monitoring of older adults.',
          'Integrated a GPS smartwatch with an SOS emergency app developed in Android Studio.',
          'Displayed live location and managed emergency contacts from a web page linked to the smartwatch.',
        ],
      },
    },
    {
      type: 'education',
      period: { es: 'Marzo 2021 – Diciembre 2026', en: 'March 2021 – December 2026' },
      role: { es: 'Ingeniería en Computación e Informática', en: 'Computer Engineering' },
      org: 'Universidad Andrés Bello — Santiago, Chile',
      bullets: {
        es: ['Formación en desarrollo de software, bases de datos, redes e infraestructura TI.'],
        en: ['Training in software development, databases, networking and IT infrastructure.'],
      },
    },
  ],

  /* Certificaciones */
  certs: [
    {
      name: 'Python for Data Science and AI',
      issuer: 'Coursera',
      topic: { es: 'Análisis de datos con Python', en: 'Data analysis with Python' },
    },
    {
      name: 'IBM Artificial Intelligence Practitioner',
      issuer: 'IBM SkillsBuild',
      topic: { es: 'Fundamentos aplicados de IA', en: 'Applied AI fundamentals' },
    },
    {
      name: 'Machine Learning for Data Science Projects',
      issuer: 'IBM SkillsBuild',
      topic: { es: 'Modelos de ML en proyectos de datos', en: 'ML models in data projects' },
    },
  ],
};
