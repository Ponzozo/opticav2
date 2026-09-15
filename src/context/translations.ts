export interface TranslationSchema {
  seo: {
    title: string;
    description: string;
    keywords: string;
    ogImageAlt: string;
  };
  common: {
    bookAppointment: string;
    viewCatalog: string;
    scheduleOnline: string;
    callNow: string;
    verifiedPatient: string;
    freeExamBadge: string;
    oneYearWarranty: string;
    graduation24h: string;
    digitalExam100: string;
    satisfactionScore: string;
    patientsCount: string;
    close: string;
    send: string;
    submitting: string;
    allRightsReserved: string;
    backToTop: string;
    includedLenses: string;
    reviews: string;
    color: string;
    material: string;
    shape: string;
    price: string;
    freeWithFrames: string;
  };
  navbar: {
    topBarSchedule: string;
    topBarLocation: string;
    topBarPromo: string;
    home: string;
    services: string;
    catalog: string;
    technology: string;
    boutique: string;
    reviews: string;
    contact: string;
    bookAppointment: string;
    selectLanguage: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleAccent: string;
    titlePart2: string;
    subtitle: string;
    check1: string;
    check2: string;
    check3: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ratingScore: string;
    patientsTrust: string;
    cardSeason: string;
    cardTitle: string;
    cardSpecs: string;
    cardTag: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    freeTag: string;
    equipmentLabel: string;
    durationLabel: string;
    bookExamBtn: string;
    viewCatalogBtn: string;
    items: Array<{
      id: string;
      title: string;
      tagline: string;
      description: string;
      benefits: string[];
      equipment: string;
      duration: string;
      isFree?: boolean;
    }>;
  };
  catalog: {
    badge: string;
    title: string;
    subtitle: string;
    includesNotice: string;
    categories: {
      todos: string;
      clasicos: string;
      deportivos: string;
      sol: string;
      infantiles: string;
    };
    modal: {
      quickBook: string;
      detailsTitle: string;
      benefitsTitle: string;
      includedTitle: string;
      reserveFrameBtn: string;
      askWhatsApp: string;
      inStock: string;
      deliveryHours: string;
    };
    products: Array<{
      id: string;
      name: string;
      brand: string;
      category: 'todos' | 'clasicos' | 'deportivos' | 'sol' | 'infantiles';
      categoryName: string;
      badge?: string;
      material: string;
      shape: string;
      description: string;
      features: string[];
      lensTypeIncluded: string;
    }>;
  };
  lensTech: {
    badge: string;
    title: string;
    subtitle: string;
    selectLabel: string;
    filters: {
      normal: {
        title: string;
        desc: string;
        badge: string;
        visualStatus: string;
        visualDesc: string;
      };
      blue: {
        title: string;
        desc: string;
        badge: string;
        visualStatus: string;
        visualDesc: string;
      };
      antiglare: {
        title: string;
        desc: string;
        badge: string;
        visualStatus: string;
        visualDesc: string;
      };
      photochromic: {
        title: string;
        desc: string;
        badge: string;
        visualStatus: string;
        visualDesc: string;
      };
    };
    comparisonNotice: string;
    featuresList: Array<{
      name: string;
      desc: string;
      tag: string;
    }>;
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    yearsExperience: string;
    yearsBadgeDesc: string;
    stats: {
      patients: string;
      patientsLabel: string;
      branches: string;
      branchesLabel: string;
      guarantee: string;
      guaranteeLabel: string;
    };
    values: Array<{
      title: string;
      desc: string;
    }>;
    protocolTitle: string;
    protocolSubtitle: string;
    steps: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
  };
  appointment: {
    badge: string;
    title: string;
    subtitle: string;
    benefit1Title: string;
    benefit1Desc: string;
    benefit2Title: string;
    benefit2Desc: string;
    benefit3Title: string;
    benefit3Desc: string;
    branchesHeader: string;
    mainBadge: string;
    formTitle: string;
    formSubtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    branchLabel: string;
    serviceLabel: string;
    servicesOptions: string[];
    dateLabel: string;
    timeSlotLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    securityNote: string;
    successTitle: string;
    successSubtitle: string;
    folioLabel: string;
    confirmWhatsAppBtn: string;
    branchesData: Array<{
      id: string;
      name: string;
      address: string;
      city: string;
      scheduleWeek: string;
      scheduleSat: string;
      isMain?: boolean;
    }>;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      name: string;
      role: string;
      comment: string;
      branch: string;
    }>;
    faqBadge: string;
    faqTitle: string;
    faqs: Array<{
      id: string;
      question: string;
      answer: string;
      category: string;
    }>;
  };
  footer: {
    newsletterTitle: string;
    newsletterSubtitle: string;
    emailPlaceholder: string;
    subscribeBtn: string;
    subscribedMsg: string;
    bioText: string;
    navHeader: string;
    treatmentsHeader: string;
    treatments: string[];
    contactHeader: string;
    mainAddress: string;
    scheduleLabel: string;
    scheduleDays: string;
    scheduleHours: string;
    scheduleSunday: string;
    copyrightText: string;
    scrollTop: string;
  };
  whatsapp: {
    onlineStatus: string;
    onlineStatusLabel: string;
    typingStatus: string;
    optometristRole: string;
    morningGreeting: string;
    afternoonGreeting: string;
    nightGreeting: string;
    morningSubtext: string;
    afternoonSubtext: string;
    nightSubtext: string;
    morningBadge: string;
    afternoonBadge: string;
    nightBadge: string;
    quickHelpTitle: string;
    currentScheduleLabel: string;
    morningQuestions: string[];
    afternoonQuestions: string[];
    nightQuestions: string[];
    quickQuestions: string[];
    customPlaceholder: string;
    sendBtn: string;
    openChatBtn: string;
    tooltipText: string;
  };
}

export const translations: Record<'es' | 'en' | 'pt' | 'fr', TranslationSchema> = {
  // ========================== ESPAÑOL ==========================
  es: {
    seo: {
      title: 'Blick Optic | Laboratorio Óptico Digital en CDMX',
      description: 'Agenda tu examen de la vista por computadora. Armazones de diseño con micas incluidas y entrega en 24h. Visítanos en Paseo de la Reforma, CDMX.',
      keywords: 'optica cdmx, examen de la vista gratis, lentes graduados, micas antirreflejantes, armazones de diseño, blick optic, luz azul',
      ogImageAlt: 'Interior de Boutique Blick Optic en CDMX',
    },
    common: {
      bookAppointment: 'Agendar Cita',
      viewCatalog: 'Ver Catálogo',
      scheduleOnline: 'Agendar Online',
      callNow: 'Llamar Ahora',
      verifiedPatient: 'Paciente Verificado',
      freeExamBadge: 'Examen de Cortesía',
      oneYearWarranty: '1 año de garantía',
      graduation24h: 'Graduación en 24h',
      digitalExam100: 'Examen 100% digital',
      satisfactionScore: '4.9 / 5.0',
      patientsCount: '+18,500 pacientes',
      close: 'Cerrar',
      send: 'Enviar',
      submitting: 'Procesando...',
      allRightsReserved: 'Todos los derechos reservados. Cédula Profesional Optométrica #7894210.',
      backToTop: 'Subir',
      includedLenses: 'Micas graduadas incluidas',
      reviews: 'reseñas',
      color: 'Color',
      material: 'Material',
      shape: 'Forma',
      price: 'Precio',
      freeWithFrames: 'GRATIS al adquirir armazón o micas',
    },
    navbar: {
      topBarSchedule: 'Lunes a Sábado: 9:00 AM – 7:30 PM',
      topBarLocation: 'Boutique Óptica & Laboratorio Digital',
      topBarPromo: 'Examen Visual Computarizado de Cortesía',
      home: 'Inicio',
      services: 'Servicios',
      catalog: 'Catálogo',
      technology: 'Tecnología',
      boutique: 'Boutique',
      reviews: 'Opiniones',
      contact: 'Contacto',
      bookAppointment: 'Agendar Cita',
      selectLanguage: 'Idioma',
    },
    hero: {
      badge: 'Boutique Óptica & Laboratorio Digital • Más de 15 años de excelencia',
      titlePart1: 'Salud visual de alta precisión con el',
      titleAccent: 'diseño y elegancia',
      titlePart2: 'que mereces',
      subtitle: 'Exámenes de la vista computarizados con precisión micrométrica, atención personalizada por optometristas certificados y una exclusiva selección de más de 1,200 armazones de autor y marcas internacionales.',
      check1: 'Examen 100% digital',
      check2: 'Garantía de 1 año',
      check3: 'Graduación en 24h',
      ctaPrimary: 'Agendar Examen de Cortesía',
      ctaSecondary: 'Ver Catálogo de Armazones',
      ratingScore: '4.9 / 5.0',
      patientsTrust: 'Más de 18,500 pacientes con visión 20/20',
      cardSeason: 'Colección Nueva Temporada',
      cardTitle: 'Micas Blue Block Pro HD',
      cardSpecs: '100% Antirreflejo + Filtro UV400',
      cardTag: 'Certificación ISO 9001',
    },
    services: {
      badge: 'Nuestros Servicios Especializados',
      title: 'Soluciones ópticas integrales para tu salud visual',
      subtitle: 'Combinamos tecnología de diagnóstico digital avanzada, laboratorios de biselado propio y asesoría de imagen personalizada.',
      freeTag: '¡Examen de cortesía con tus armazones!',
      equipmentLabel: 'Equipamiento',
      durationLabel: 'Duración estimada',
      bookExamBtn: 'Agendar Examen Ahora',
      viewCatalogBtn: 'Ver Catálogo de Armazones',
      items: [
        {
          id: 'examen-computarizado',
          title: 'Examen de la Vista Computarizado y Profesional',
          tagline: 'Diagnóstico 100% digital de alta precisión',
          description: 'Evaluación integral de agudeza visual con autorrefractómetro digital de última generación, biomicroscopía y foróptero computarizado. Detectamos miopía, astigmatismo, hipermetropía, presbicia y salud ocular en menos de 20 minutos.',
          benefits: [
            'Sin costo al adquirir tus armazones o micas',
            'Atención por Licenciados en Optometría certificados',
            'Diagnóstico de fatiga visual por pantallas digitales',
            'Prueba de campo visual y agudeza cromática',
          ],
          equipment: 'Autorrefractómetro Topcon KR-800 & Lámpara de Hendidura Digital',
          duration: '20-25 minutos',
          isFree: true,
        },
        {
          id: 'stock-lentes',
          title: 'Amplio Stock de Lentes Oftálmicos y de Sol',
          tagline: 'Más de 1,200 modelos de marcas internacionales',
          description: 'Colecciones exclusivas en titanio, acetato italiano, TR90 ultraliviano y acero quirúrgico. Trabajamos con micas antirreflejantes de alta gama (Crizal, Blue Defense, Fotocromáticas Transitions Gen 8 y Progresivas Digitales).',
          benefits: [
            'Garantía de adaptación y graduación por 12 meses',
            'Filtro de luz azul y protección 100% UV400 certificada',
            'Micas de alto índice (ultra delgadas) para altas graduaciones',
            'Monturas de marcas líderes como Ray-Ban, Oakley, Carrera y más',
          ],
          equipment: 'Laboratorio de biselado computarizado Essilor Delta 200',
          duration: 'Entrega en 24 a 48 horas',
          isFree: false,
        },
        {
          id: 'lentes-contacto-asesoria',
          title: 'Adaptación de Lentes de Contacto y Asesoría de Imagen',
          tagline: 'Confort diario y el armazón perfecto para tu rostro',
          description: 'Prueba de adaptación personalizada para lentes de contacto esféricos, tóricos (astigmatismo) y multifocales (Acuvue, Air Optix, Biofinity). Además, nuestros asesores visagistas te recomiendan el armazón ideal según la forma de tu rostro.',
          benefits: [
            'Kit de prueba inicial con solución limpiadora incluida',
            'Entrenamiento paso a paso para colocar y retirar tus lentes',
            'Análisis visagista (rostro ovalado, redondo, cuadrado, diamante)',
            'Lentes de contacto de hidrogel de silicona de máxima oxigenación',
          ],
          equipment: 'Queratometría y Topografía Corneal',
          duration: '30 minutos',
          isFree: false,
        },
      ],
    },
    catalog: {
      badge: 'Colección Boutique 2026',
      title: 'Armazones de autor con diseño y durabilidad premium',
      subtitle: 'Explora nuestras líneas seleccionadas: desde titanio ultra liviano y acetato italiano hasta armazones deportivos de memoria e infantiles irrompibles.',
      includesNotice: 'Incluyen estuche rígido + microfibra de seda',
      categories: {
        todos: 'Todos los Modelos',
        clasicos: 'Clásicos & Ejecutivos',
        deportivos: 'Deportivos & Flexibles',
        sol: 'Lentes de Sol UV400',
        infantiles: 'Infantiles & Juveniles',
      },
      modal: {
        quickBook: 'Reserva este armazón en tu examen',
        detailsTitle: 'Características Técnicas',
        benefitsTitle: 'Ventajas del Producto',
        includedTitle: 'Incluido en tu paquete',
        reserveFrameBtn: 'Agendar Cita y Probarme este Modelo',
        askWhatsApp: 'Preguntar por WhatsApp sobre este modelo',
        inStock: 'Disponible en sucursal para prueba inmediata',
        deliveryHours: 'Entrega de graduación en 24 a 48 hrs',
      },
      products: [
        {
          id: 'frame-01',
          name: 'Milano Executive Titanium',
          brand: 'Aura Premium',
          category: 'clasicos',
          categoryName: 'Clásicos & Ejecutivos',
          badge: 'Más Vendido',
          material: 'Titanio Puro Ultraligero (12g)',
          shape: 'Rectangular estilizado',
          description: 'Diseño elegante y atemporal fabricado en titanio aeroespacial. Bisagras flexibles de resorte sin tornillos y plaquetas nasales de silicona médica antideslizante.',
          features: ['Peso pluma: 12 gramos', 'Resistente a la corrosión', 'Incluye estuche rígido y microfibra'],
          lensTypeIncluded: 'Micas antirreflejantes graduadas incluidas',
        },
        {
          id: 'frame-02',
          name: 'Oxford Classic Havana',
          brand: 'Blick Optic Signature',
          category: 'clasicos',
          categoryName: 'Clásicos & Ejecutivos',
          badge: 'Elegancia Atemporal',
          material: 'Acetato de Celulosa Italiano',
          shape: 'Panto / Redondo suave',
          description: 'Armazón de acetato pulido a mano con acabado carey habana. Un clásico refinado que proyecta confianza tanto en la oficina como en ocasiones formales.',
          features: ['Alma metálica interna reforzada', 'Acabado brillante pulido artesanal', 'Apto para todo tipo de graduaciones'],
          lensTypeIncluded: 'Micas con filtro antireflejo hidrofóbico',
        },
        {
          id: 'frame-03',
          name: 'AeroFlex Pro TR90',
          brand: 'ActiveTech Optics',
          category: 'deportivos',
          categoryName: 'Deportivos & Flexibles',
          badge: 'Ultra Resistente',
          material: 'Polímero TR90 con memoria térmica',
          shape: 'Semi-envolvente ergonómico',
          description: 'Estructura flexible con memoria que absorbe impactos sin deformarse. Terminales de goma hidrófila que aumentan el agarre al sudar durante el entrenamiento o ciclismo.',
          features: ['Grip antideslizante al sudor', 'Flexibilidad 180° sin romperse', 'Ventilación lateral antifog'],
          lensTypeIncluded: 'Micas de policarbonato alto impacto',
        },
        {
          id: 'frame-04',
          name: 'Vortex Sport Carbon',
          brand: 'ActiveTech Optics',
          category: 'deportivos',
          categoryName: 'Deportivos & Flexibles',
          badge: 'Tecnología Carbono',
          material: 'Fibra de carbono y elastómero',
          shape: 'Cuadrado deportivo dinámico',
          description: 'Varillas con inserto de fibra de carbono ultra livianas. Máxima estabilidad para corredores, practicantes de tenis, pádel y deportes de alta movilidad.',
          features: ['Patillas ajustables 3D', 'Peso: 15g', 'Tratamiento anti-empañamiento'],
          lensTypeIncluded: 'Micas polarizadas de policarbonato',
        },
        {
          id: 'frame-05',
          name: 'Riviera Sun Polarized UV400',
          brand: 'Soleil Italia',
          category: 'sol',
          categoryName: 'Lentes de Sol',
          badge: 'Protección Total UV',
          material: 'Acetato Mazzucchelli & Bisagras doradas',
          shape: 'Aviador Moderno Cuadrado',
          description: 'Lentes solares polarizados con filtro de alta definición. Eliminan el 99.9% de los reflejos en carretera, agua y asfalto, reduciendo la fatiga ocular.',
          features: ['Filtro Polarizado HD Triacetato', 'Protección 100% UVA y UVB', 'Graduable con tu fórmula oftálmica'],
          lensTypeIncluded: 'Micas solares polarizadas Cat. 3',
        },
        {
          id: 'frame-06',
          name: 'Copacabana Retro Chic',
          brand: 'Soleil Italia',
          category: 'sol',
          categoryName: 'Lentes de Sol',
          badge: 'Tendencia 2026',
          material: 'Bio-Acetato ecológico',
          shape: 'Cat-Eye suave / Redondo',
          description: 'Estilo glamuroso con protección solar premium. Degradado en micas color ámbar y gris que garantizan nitidez en días soleados y nublados.',
          features: ['Gradiente de color óptico', 'Estructura ligera e hipoalergénica', 'Garantía de montura de 1 año'],
          lensTypeIncluded: 'Micas solares degradadas UV400',
        },
        {
          id: 'frame-07',
          name: 'Kids Wonder Irrompible',
          brand: 'Junior Vision',
          category: 'infantiles',
          categoryName: 'Infantiles & Juveniles',
          badge: '100% Irrompible',
          material: 'Siliflex elástico no tóxico (BPA Free)',
          shape: 'Redondo ergonómico para niños',
          description: 'Armazones diseñados especialmente para niños de 3 a 12 años. Flexibles en 360 grados, sin bisagras metálicas que puedan lastimar y con banda elástica ajustable incluida.',
          features: ['Banda elástica de sujeción para juegos', 'Material libre de metales cortantes', 'Colores vivos y divertidos'],
          lensTypeIncluded: 'Micas en Policarbonato antirrayaduras',
        },
        {
          id: 'frame-08',
          name: 'Teen Studio Cool',
          brand: 'Junior Vision',
          category: 'infantiles',
          categoryName: 'Infantiles & Juveniles',
          badge: 'Luz Azul Clases',
          material: 'Acetato juvenil ultraligero',
          shape: 'Geométrico moderno',
          description: 'Ideales para estudiantes y adolescentes. Diseñados para proteger sus ojos durante largas sesiones de estudio, computadoras, tablets y videojuegos.',
          features: ['Incluye filtro Blue Protect para pantallas', 'Puente nasal autoajustable', 'Diseño moderno y cómodo'],
          lensTypeIncluded: 'Micas con filtro azul Blue Light Defense',
        },
      ],
    },
    lensTech: {
      badge: 'Simulador de Micas & Tecnología Óptica',
      title: '¿Cómo mejora tu visión con nuestros tratamientos de micas?',
      subtitle: 'Compara en tiempo real la diferencia entre una mica convencional y nuestros filtros ópticos de alta definición.',
      selectLabel: 'Selecciona un tratamiento para simular:',
      filters: {
        normal: {
          title: 'Mica Estándar Sin Filtro',
          desc: 'Expuesta a reflejos molestos, destellos y fatiga por luz azul.',
          badge: 'Estándar',
          visualStatus: 'Sin protección óptica activa',
          visualDesc: 'Reflejos intensos y fatiga ocular acumulativa en pantallas.',
        },
        blue: {
          title: 'Blue Block Pro HD',
          desc: 'Filtra la luz nociva de monitores y celulares. Previene ojos rojos y fatiga digital.',
          badge: 'Recomendado',
          visualStatus: 'Filtro Azul Activo: 99% bloqueo UV & Blue Light',
          visualDesc: 'Contraste mejorado, descanso visual inmediato y mejor ciclo de sueño.',
        },
        antiglare: {
          title: 'Antirreflejante Hidrofóbico HD',
          desc: 'Elimina destellos de autos al manejar de noche y repele agua y huellas dactilares.',
          badge: 'Máxima Nitidez',
          visualStatus: 'Tratamiento Antirreflejo Multicapa Activo',
          visualDesc: 'Cero destellos de faros nocturnos y visión transparente 99.7% translúcida.',
        },
        photochromic: {
          title: 'Transitions Gen 8 Fotocromático',
          desc: 'Micas inteligentes que se adaptan a la intensidad solar en segundos.',
          badge: '2 en 1 Oftálmico + Solar',
          visualStatus: 'Activación Solar Inteligente (Interior Claro / Exterior Oscuro)',
          visualDesc: 'Protección UV total en exteriores con comodidad visual en interiores.',
        },
      },
      comparisonNotice: 'Prueba óptica interactiva basada en tecnología oftálmica certificada',
      featuresList: [
        {
          name: 'Blue Block Digital',
          desc: 'Bloquea el 99% de la luz azul dañina emitida por pantallas y lámparas LED.',
          tag: 'Recomendado para trabajo en oficina y home office',
        },
        {
          name: 'Antirreflejante Hidrofóbico',
          desc: 'Repele agua, polvo y huellas dactilares. Visión nítida nocturna sin destellos al conducir.',
          tag: 'Máxima claridad visual',
        },
        {
          name: 'Transitions Gen 8 Fotocromático',
          desc: 'Micas inteligentes que se oscurecen automáticamente bajo el sol y se vuelven claras en interiores.',
          tag: '2 en 1: Oftálmico y Solar',
        },
        {
          name: 'Progresivos HD Digital',
          desc: 'Visión perfecta a tres distancias (cerca, intermedia y lejos) sin saltos ni líneas visibles.',
          tag: 'Tecnología para presbicia',
        },
      ],
    },
    about: {
      badge: 'Acerca de Blick Optic',
      title: 'Pasión por la salud de tus ojos, compromiso con tu bienestar',
      p1: 'Nacimos con una misión clara: democratizar el acceso a la salud visual de alta tecnología sin sacrificar diseño ni atención humana. En Blick Optic entendemos que tus lentes no son solo un accesorio médico, sino parte fundamental de tu identidad y rendimiento diario.',
      p2: 'Cada paciente recibe una evaluación optométrica exhaustiva respaldada por tecnología digital y micas con filtros certificados internacionalmente, garantizando una visión nítida, descanso ocular y máxima durabilidad.',
      yearsExperience: '15+',
      yearsBadgeDesc: 'Años de Trayectoria cuidando la salud visual.',
      stats: {
        patients: '+18,000',
        patientsLabel: 'Pacientes atendidos',
        branches: '3',
        branchesLabel: 'Sucursales boutique',
        guarantee: '100%',
        guaranteeLabel: 'Garantía de adaptación',
      },
      values: [
        {
          title: 'Optometristas Certificados',
          desc: 'Todo nuestro equipo cuenta con cédula profesional y certificación continua en salud ocular y contactología avanzada.',
        },
        {
          title: 'Tecnología de Vanguardia',
          desc: 'Equipos computarizados de diagnóstico digital de alta precisión para graduaciones exactas sin margen de error.',
        },
        {
          title: 'Garantía Total de Adaptación',
          desc: 'Si en los primeros 30 días sientes alguna molestia con tu graduación, reajustamos tus micas sin costo.',
        },
        {
          title: 'Atención Personalizada',
          desc: 'Te asesoramos con calma y empatía para encontrar la solución que mejor se adapte a tu fisonomía y estilo de vida.',
        },
      ],
      protocolTitle: 'Nuestro Protocolo Clínico en 4 Pasos',
      protocolSubtitle: 'Un proceso médico transparente y sin prisas',
      steps: [
        { num: '01', title: 'Entrevista Clínica', desc: 'Conocemos tus hábitos diarios, tiempo en pantallas y antecedentes visuales.' },
        { num: '02', title: 'Diagnóstico Digital', desc: 'Medición computarizada con autorrefractómetro y biomicroscopía ocular.' },
        { num: '03', title: 'Graduación Fina', desc: 'Prueba de agudeza con foróptero y lentes de prueba para nitidez 20/20.' },
        { num: '04', title: 'Selección & Entrega', desc: 'Asesoría visagista para tu armazón y biselado express en 24 horas.' },
      ],
    },
    appointment: {
      badge: 'Agendamiento Online Inmediato',
      title: 'Agenda tu examen de la vista sin filas ni esperas',
      subtitle: 'Reserva tu horario preferido en cualquiera de nuestras 3 sucursales boutique. Te confirmaremos tu cita en minutos por WhatsApp o correo.',
      benefit1Title: 'Atención prioritaria y puntual',
      benefit1Desc: 'Sin tiempos muertos; el consultorio estará listo para ti.',
      benefit2Title: 'Examen gratis con tu armazón',
      benefit2Desc: 'Evaluación computarizada completa sin costo de consulta.',
      benefit3Title: 'Privacidad y confidencialidad',
      benefit3Desc: 'Tu historial clínico óptico protegido bajo normas médicas.',
      branchesHeader: 'Nuestras 3 Sucursales:',
      mainBadge: 'Principal',
      formTitle: 'Formulario de Agendamiento',
      formSubtitle: 'Completa tus datos para confirmar la disponibilidad de tu especialista.',
      fullNameLabel: 'Nombre Completo *',
      fullNamePlaceholder: 'Ej. Ana Lucía Fernández',
      phoneLabel: 'Teléfono / WhatsApp *',
      phonePlaceholder: '+52 55 1234 5678',
      emailLabel: 'Correo Electrónico *',
      emailPlaceholder: 'tu.correo@ejemplo.com',
      branchLabel: 'Sucursal de Preferencia *',
      serviceLabel: 'Servicio Requerido *',
      servicesOptions: [
        'Examen de la Vista Computarizado (Gratis con armazón)',
        'Graduación y Selección de Armazones',
        'Adaptación de Lentes de Contacto',
        'Lentes de Sol Graduados / Polarizados',
        'Consulta Infantil / Pediátrica',
        'Ajuste y Mantenimiento de Armazón',
      ],
      dateLabel: 'Fecha Estimada *',
      timeSlotLabel: 'Horario Sugerido *',
      notesLabel: 'Síntomas o Comentarios (Opcional)',
      notesPlaceholder: 'Ej. Uso computadora 8 hrs al día, siento dolor de cabeza al final de la tarde...',
      submitBtn: 'Confirmar y Agendar Mi Cita',
      submittingBtn: 'Verificando disponibilidad...',
      securityNote: '🔒 Tus datos están 100% seguros y no enviamos spam publicitario.',
      successTitle: '¡Cita Confirmada con Éxito!',
      successSubtitle: 'Te esperamos en la sucursal seleccionada. Hemos reservado tu espacio clínico.',
      folioLabel: 'Folio de reserva:',
      confirmWhatsAppBtn: 'Confirmar por WhatsApp ahora',
      branchesData: [
        {
          id: 'sucursal-centro',
          name: 'Sucursal Central Médica',
          address: 'Av. Paseo de la Reforma #450, Col. Juárez',
          city: 'Ciudad Central',
          scheduleWeek: 'Lunes a Viernes: 8:00 AM – 7:30 PM',
          scheduleSat: 'Sábados: 9:00 AM – 5:00 PM',
          isMain: true,
        },
        {
          id: 'sucursal-plaza',
          name: 'Sucursal Plaza Sol',
          address: 'Centro Comercial Plaza Sol, Local L-104 (Piso 1)',
          city: 'Zona Dorada',
          scheduleWeek: 'Lunes a Viernes: 10:00 AM – 8:00 PM',
          scheduleSat: 'Sábados: 10:00 AM – 7:00 PM',
          isMain: false,
        },
        {
          id: 'sucursal-galerias',
          name: 'Sucursal Galerías Norte',
          address: 'Av. Insurgentes Norte #1280, Int. 3B',
          city: 'Zona Norte',
          scheduleWeek: 'Lunes a Viernes: 9:00 AM – 7:00 PM',
          scheduleSat: 'Sábados: 9:00 AM – 4:00 PM',
          isMain: false,
        },
      ],
    },
    testimonials: {
      badge: 'Experiencias Reales de Pacientes',
      title: 'Lo que dicen quienes ya ven con claridad',
      subtitle: 'Más del 98% de nuestros pacientes nos recomiendan por nuestra puntualidad, tecnología y garantía.',
      items: [
        {
          id: 't-1',
          name: 'Dra. Mariana Cordero',
          role: 'Médico Pediatra',
          comment: 'Llevo 4 años graduando mis lentes en Blick Optic. El examen computarizado es sumamente minucioso y la calidad de las micas con filtro azul ha reducido notablemente mis dolores de cabeza frente al monitor.',
          branch: 'Sucursal Central Médica',
        },
        {
          id: 't-2',
          name: 'Carlos Mendoza Ruiz',
          role: 'Arquitecto & Diseñador',
          comment: 'Excelente atención y asesoría visagista. Me ayudaron a elegir un armazón de titanio que va perfecto con mi tipo de rostro. Los lentes estuvieron listos en menos de 24 horas. ¡100% recomendados!',
          branch: 'Sucursal Plaza Sol',
        },
        {
          id: 't-3',
          name: 'Valeria & Mateo Sánchez',
          role: 'Madre de Familia',
          comment: 'Compré los lentes infantiles irrompibles para mi hijo de 6 años. Se le han caído mil veces jugando y siguen impecables. La paciencia del optometrista con los niños fue maravillosa.',
          branch: 'Sucursal Galerías Norte',
        },
      ],
      faqBadge: 'Preguntas Frecuentes',
      faqTitle: 'Resolvemos tus dudas sobre salud visual',
      faqs: [
        {
          id: 'faq-1',
          question: '¿El examen de la vista tiene algún costo?',
          answer: 'Nuestro examen computarizado profesional es completamente GRATIS al adquirir tus armazones o micas con nosotros. Si únicamente requieres la receta médica impresa para uso externo, tiene un costo simbólico de $15 USD.',
          category: 'Exámenes',
        },
        {
          id: 'faq-2',
          question: '¿Cuánto tiempo tarda la entrega de mis lentes graduados?',
          answer: 'Gracias a nuestro laboratorio digital propio, el 85% de las graduaciones monofocales convencionales se entregan en tan solo 24 horas. Las micas especiales (altos índices, progresivos personalizados o fotocromáticos) toman entre 48 y 72 horas hábiles.',
          category: 'Entrega',
        },
        {
          id: 'faq-3',
          question: '¿Qué garantía tienen los armazones y micas?',
          answer: 'Ofrecemos 12 meses de garantía contra defectos de fábrica en todos los armazones y 30 días de garantía de adaptación en tus micas graduadas (si no te adaptas a la graduación, te la reajustamos sin costo adicional).',
          category: 'Garantías',
        },
        {
          id: 'faq-4',
          question: '¿Puedo llevar mi propio armazón para solo cambiar las micas?',
          answer: '¡Sí! Puedes traer tu armazón favorito a cualquiera de nuestras sucursales. Nuestros especialistas evaluarán el estado del material y montarán tus nuevas micas con la graduación exacta.',
          category: 'Servicios',
        },
        {
          id: 'faq-5',
          question: '¿Cómo sé si necesito filtro de luz azul (Blue Defense)?',
          answer: 'Si pasas más de 3 horas al día frente a computadoras, teléfonos celulares o pantallas de TV, el filtro azul reduce la fatiga ocular, previene la sequedad en los ojos y mejora la calidad del sueño al evitar la alteración de la melatonina.',
          category: 'Salud Visual',
        },
      ],
    },
    footer: {
      newsletterTitle: 'Recibe 15% de descuento en tu primer armazón boutique',
      newsletterSubtitle: 'Suscríbete a nuestro boletín de salud visual y colecciones exclusivas de temporada.',
      emailPlaceholder: 'Ingresa tu correo electrónico',
      subscribeBtn: 'Suscribirme',
      subscribedMsg: '¡Suscrito con éxito!',
      bioText: 'Especialistas en salud visual, optometría computarizada de alta gama y armazones de diseño boutique. Cuidamos tu mirada con precisión clínica y distinción estética.',
      navHeader: 'Navegación',
      treatmentsHeader: 'Tratamientos Ópticos',
      treatments: [
        'Examen Computarizado 100% Digital',
        'Filtro Blue Block para Pantallas',
        'Micas Antirreflejantes Crizal HD',
        'Lentes Progresivos de Precisión',
        'Adaptación de Lentes de Contacto',
      ],
      contactHeader: 'Contacto & Horarios',
      mainAddress: 'Av. Paseo de la Reforma #450, Col. Juárez, Ciudad Central (Sucursal Principal)',
      scheduleLabel: 'Lunes a Sábado:',
      scheduleDays: 'Lunes a Sábado:',
      scheduleHours: '8:00 AM – 7:30 PM (Sáb: hasta 5:00 PM)',
      scheduleSunday: 'Domingos: Esterilización clínica & descanso',
      copyrightText: '© 2026 Blick Optic. Todos los derechos reservados. Cédula Profesional Optométrica #7894210.',
      scrollTop: 'Subir',
    },
    whatsapp: {
      onlineStatus: 'En línea • Especialistas disponibles',
      onlineStatusLabel: 'En línea',
      typingStatus: 'Escribiendo...',
      optometristRole: 'Atención al Paciente',
      morningGreeting: '¡Buenos días! ☀️',
      afternoonGreeting: '¡Buenas tardes! 🌤️',
      nightGreeting: '¡Buenas noches! 🌙',
      morningSubtext: 'Equipo óptico listo para atenderte',
      afternoonSubtext: 'Optometristas en consulta y asesoría activa',
      nightSubtext: 'Te responderemos a primera hora o agenda online',
      morningBadge: 'Turno Matutino',
      afternoonBadge: 'Turno Vespertino',
      nightBadge: 'Atención 24/7',
      quickHelpTitle: 'Consultas rápidas del momento:',
      currentScheduleLabel: 'Horario actual',
      morningQuestions: [
        'Buenos días, ¿tienen espacio para hoy?',
        'Buenos días, ¿a qué hora abren hoy sus sucursales?',
        'Buenos días, quiero cotizar un armazón con filtro de luz azul',
        'Buenos días, ¿cuánto tardan en entregar mis lentes?',
      ],
      afternoonQuestions: [
        'Buenas tardes, ¿tienen disponibilidad para consulta hoy?',
        'Buenas tardes, ¿puedo pasar hoy a ajustar o probarme armazones?',
        'Buenas tardes, ¿cuánto cuesta un armazón con micas antirreflejantes?',
        'Buenas tardes, ¿tienen promociones vigentes en lentes progresivos?',
      ],
      nightQuestions: [
        'Buenas noches, ¿puedo agendar mi examen de la vista para mañana?',
        'Buenas noches, me gustaría cotizar micas Transitions inteligentes',
        'Buenas noches, ¿cuál es su horario para este fin de semana?',
        'Buenas noches, ¿cómo puedo enviarles mi receta oftálmica?',
      ],
      quickQuestions: [
        '🗓️ Deseo agendar un examen de la vista',
        '👓 Preguntar por disponibilidad de armazones',
        '💻 Información sobre micas Blue Block para pantallas',
        '📍 Consultar horarios y ubicación de sucursales',
      ],
      customPlaceholder: 'Escribe tu consulta...',
      sendBtn: 'Enviar mensaje',
      openChatBtn: 'Iniciar conversación en WhatsApp',
      tooltipText: '¿Dudas? Chatea con un optometrista 👓',
    },
  },

  // ========================== ENGLISH ==========================
  en: {
    seo: {
      title: 'Blick Optic | Digital Optical Lab in Mexico City',
      description: 'Book your computerized eye exam today. Designer frames with lenses included and 24h delivery. Visit our flagship boutique in Paseo de la Reforma, CDMX.',
      keywords: 'optometrist cdmx, free eye exam, prescription glasses, anti-reflective lenses, designer frames, blick optic, blue light',
      ogImageAlt: 'Interior of Blick Optic Boutique in Mexico City',
    },
    common: {
      bookAppointment: 'Book Appointment',
      viewCatalog: 'View Catalog',
      scheduleOnline: 'Book Online',
      callNow: 'Call Now',
      verifiedPatient: 'Verified Patient',
      freeExamBadge: 'Complimentary Exam',
      oneYearWarranty: '1-Year Warranty',
      graduation24h: 'Prescription in 24h',
      digitalExam100: '100% Digital Exam',
      satisfactionScore: '4.9 / 5.0',
      patientsCount: '+18,500 patients',
      close: 'Close',
      send: 'Send',
      submitting: 'Processing...',
      allRightsReserved: 'All rights reserved. Certified Optometric License #7894210.',
      backToTop: 'Top',
      includedLenses: 'Prescription lenses included',
      reviews: 'reviews',
      color: 'Color',
      material: 'Material',
      shape: 'Shape',
      price: 'Price',
      freeWithFrames: 'FREE with frame or lens purchase',
    },
    navbar: {
      topBarSchedule: 'Monday to Saturday: 9:00 AM – 7:30 PM',
      topBarLocation: 'Optical Boutique & Digital Lab',
      topBarPromo: 'Complimentary Computerized Vision Exam',
      home: 'Home',
      services: 'Services',
      catalog: 'Catalog',
      technology: 'Technology',
      boutique: 'Boutique',
      reviews: 'Reviews',
      contact: 'Contact',
      bookAppointment: 'Book Appointment',
      selectLanguage: 'Language',
    },
    hero: {
      badge: 'Optical Boutique & Digital Lab • Over 15 Years of Excellence',
      titlePart1: 'High-precision visual health with the',
      titleAccent: 'design and elegance',
      titlePart2: 'you deserve',
      subtitle: 'Computerized vision exams with micrometer accuracy, personalized care by certified optometrists, and an exclusive selection of over 1,200 designer frames and international brands.',
      check1: '100% Digital Exam',
      check2: '1-Year Warranty',
      check3: '24h Prescription',
      ctaPrimary: 'Book Complimentary Exam',
      ctaSecondary: 'Browse Eyewear Catalog',
      ratingScore: '4.9 / 5.0',
      patientsTrust: 'Over 18,500 patients with 20/20 vision',
      cardSeason: 'New Season Collection',
      cardTitle: 'Blue Block Pro HD Lenses',
      cardSpecs: '100% Anti-reflective + UV400 Filter',
      cardTag: 'ISO 9001 Certified',
    },
    services: {
      badge: 'Our Specialized Services',
      title: 'Comprehensive optical solutions for your visual wellness',
      subtitle: 'We combine cutting-edge digital diagnostics, in-house lens cutting labs, and tailored image styling advice.',
      freeTag: 'Complimentary eye exam with frame purchase!',
      equipmentLabel: 'Equipment',
      durationLabel: 'Estimated Duration',
      bookExamBtn: 'Book Eye Exam Now',
      viewCatalogBtn: 'Browse Frames Catalog',
      items: [
        {
          id: 'examen-computarizado',
          title: 'Professional Computerized Vision Exam',
          tagline: '100% digital high-precision clinical diagnosis',
          description: 'Comprehensive visual acuity assessment using state-of-the-art digital autorefractometers, biomicroscopy, and computerized phoropters. We detect myopia, astigmatism, hyperopia, presbyopia, and ocular health within 20 minutes.',
          benefits: [
            'No charge when purchasing frames or prescription lenses',
            'Care provided by licensed certified optometrists',
            'Diagnosis of digital eye strain from screen exposure',
            'Visual field test and color perception analysis',
          ],
          equipment: 'Topcon KR-800 Autorefractometer & Digital Slit Lamp',
          duration: '20-25 minutes',
          isFree: true,
        },
        {
          id: 'stock-lentes',
          title: 'Extensive Optical & Sunglasses Collection',
          tagline: 'Over 1,200 models from premier global brands',
          description: 'Exclusive collections crafted in pure titanium, Italian acetate, ultralight TR90, and surgical steel. We pair frames with premium anti-reflective lenses (Crizal, Blue Defense, Transitions Gen 8 photochromics, and digital progressives).',
          benefits: [
            '12-month adaptation and prescription warranty',
            'Blue light blocking and certified 100% UV400 protection',
            'High-index ultra-thin lenses for high prescriptions',
            'Leading global brands including Ray-Ban, Oakley, Carrera, and more',
          ],
          equipment: 'Essilor Delta 200 Computerized Edging Lab',
          duration: 'Ready in 24 to 48 hours',
          isFree: false,
        },
        {
          id: 'lentes-contacto-asesoria',
          title: 'Contact Lens Fitting & Visagism Styling',
          tagline: 'All-day comfort and the ideal frame geometry for your face',
          description: 'Personalized trial fitting for spherical, toric (astigmatism), and multifocal contact lenses (Acuvue, Air Optix, Biofinity). Furthermore, our certified stylists recommend the perfect frame tailored to your facial geometry.',
          benefits: [
            'Starter trial kit including cleaning disinfectant solution',
            'Step-by-step guidance on lens insertion and removal hygiene',
            'Facial visagism analysis (oval, round, square, diamond profiles)',
            'Maximum oxygen transmissibility silicone hydrogel lenses',
          ],
          equipment: 'Keratometry & Corneal Topography',
          duration: '30 minutes',
          isFree: false,
        },
      ],
    },
    catalog: {
      badge: 'Boutique Collection 2026',
      title: 'Signature frames crafted for design and lasting luxury',
      subtitle: 'Discover our handpicked selections: from featherlight aerospace titanium and Italian acetate to flexible memory sport frames and shatterproof kids styles.',
      includesNotice: 'Includes hard protective case + silk microfiber cloth',
      categories: {
        todos: 'All Eyewear',
        clasicos: 'Classic & Executive',
        deportivos: 'Sport & Flexible',
        sol: 'UV400 Sunglasses',
        infantiles: 'Kids & Teens',
      },
      modal: {
        quickBook: 'Reserve this frame during your eye exam',
        detailsTitle: 'Technical Specifications',
        benefitsTitle: 'Product Highlights',
        includedTitle: 'Included in your package',
        reserveFrameBtn: 'Book Appointment & Try On This Model',
        askWhatsApp: 'Inquire about this model on WhatsApp',
        inStock: 'Available in boutique for immediate fitting',
        deliveryHours: 'Prescription ready in 24 to 48 business hours',
      },
      products: [
        {
          id: 'frame-01',
          name: 'Milano Executive Titanium',
          brand: 'Aura Premium',
          category: 'clasicos',
          categoryName: 'Classic & Executive',
          badge: 'Best Seller',
          material: 'Pure Ultralight Titanium (12g)',
          shape: 'Sleek rectangular',
          description: 'Timeless luxury design crafted from aerospace titanium. Screwless flexible spring hinges and hypoallergenic medical-grade silicone nose pads.',
          features: ['Featherweight: only 12 grams', 'Corrosion and sweat resistant', 'Includes hard case and microfibre'],
          lensTypeIncluded: 'Anti-reflective prescription lenses included',
        },
        {
          id: 'frame-02',
          name: 'Oxford Classic Havana',
          brand: 'Blick Optic Signature',
          category: 'clasicos',
          categoryName: 'Classic & Executive',
          badge: 'Timeless Elegance',
          material: 'Hand-polished Italian Cellulose Acetate',
          shape: 'Panto / Soft rounded',
          description: 'Hand-polished acetate frame with a warm havana tortoiseshell finish. A distinguished classic projecting elegance at work and formal occasions.',
          features: ['Reinforced internal wire core', 'Artisanal high-gloss polish', 'Compatible with all prescription powers'],
          lensTypeIncluded: 'Hydrophobic anti-glare coated lenses',
        },
        {
          id: 'frame-03',
          name: 'AeroFlex Pro TR90',
          brand: 'ActiveTech Optics',
          category: 'deportivos',
          categoryName: 'Sport & Flexible',
          badge: 'Ultra Durable',
          material: 'Thermal memory TR90 polymer',
          shape: 'Ergonomic semi-wrap',
          description: 'Flexible shape-memory frame absorbing high impacts without deformation. Hydrophilic rubber temple tips ensuring maximum grip when perspiring during running or cycling.',
          features: ['Anti-slip sweat grip technology', '180° extreme flexibility without breaking', 'Lateral anti-fog airflow channels'],
          lensTypeIncluded: 'High-impact shatterproof polycarbonate lenses',
        },
        {
          id: 'frame-04',
          name: 'Vortex Sport Carbon',
          brand: 'ActiveTech Optics',
          category: 'deportivos',
          categoryName: 'Sport & Flexible',
          badge: 'Carbon Tech',
          material: 'Carbon fiber composite & elastomer',
          shape: 'Dynamic athletic square',
          description: 'Ultra-light carbon fiber insert temples providing supreme stability for runners, tennis, padel, and high-motion athletic training.',
          features: ['3D micro-adjustable temples', 'Featherweight: 15g', 'Anti-fog lens coating'],
          lensTypeIncluded: 'Polarized optical-grade polycarbonate lenses',
        },
        {
          id: 'frame-05',
          name: 'Riviera Sun Polarized UV400',
          brand: 'Soleil Italia',
          category: 'sol',
          categoryName: 'UV400 Sunglasses',
          badge: 'Full UV Protection',
          material: 'Mazzucchelli Acetate & Gold-toned hinges',
          shape: 'Modern Square Aviator',
          description: 'Polarized sunglasses with high-definition optical filtration. Eliminates 99.9% of blinding road, water, and pavement glare to soothe eye fatigue.',
          features: ['HD Triacetate polarized filter', '100% UVA and UVB blocking', 'Fully customizable with your ophthalmic prescription'],
          lensTypeIncluded: 'Category 3 Polarized Sun Lenses',
        },
        {
          id: 'frame-06',
          name: 'Copacabana Retro Chic',
          brand: 'Soleil Italia',
          category: 'sol',
          categoryName: 'UV400 Sunglasses',
          badge: '2026 Trend',
          material: 'Eco-friendly Bio-Acetate',
          shape: 'Soft Cat-Eye / Round',
          description: 'Glamorous silhouette with premium sun defense. Amber and grey gradient tint ensuring crystalline clarity in both sunny and overcast environments.',
          features: ['Optical-grade gradient shading', 'Lightweight hypoallergenic structure', '1-year comprehensive frame warranty'],
          lensTypeIncluded: 'Gradient UV400 Sun Lenses',
        },
        {
          id: 'frame-07',
          name: 'Kids Wonder Shatterproof',
          brand: 'Junior Vision',
          category: 'infantiles',
          categoryName: 'Kids & Teens',
          badge: '100% Unbreakable',
          material: 'Elastic non-toxic Siliflex (BPA Free)',
          shape: 'Ergonomic round for children',
          description: 'Engineered specifically for kids aged 3 to 12. 360-degree flexibility, metal-free hinge construction for safety, and an adjustable strap included.',
          features: ['Adjustable security strap for active play', 'Zero sharp metal parts', 'Vibrant hypoallergenic colors'],
          lensTypeIncluded: 'Scratch-resistant safety polycarbonate lenses',
        },
        {
          id: 'frame-08',
          name: 'Teen Studio Cool',
          brand: 'Junior Vision',
          category: 'infantiles',
          categoryName: 'Kids & Teens',
          badge: 'Screen Blue Light',
          material: 'Featherlight youth acetate',
          shape: 'Modern geometric',
          description: 'Tailored for students and teenagers. Protects young eyes during intensive study, computer screens, tablets, and gaming sessions.',
          features: ['Includes Blue Protect filter for digital displays', 'Self-adapting nose bridge', 'Modern aesthetic and all-day comfort'],
          lensTypeIncluded: 'Blue Light Defense screen lenses',
        },
      ],
    },
    lensTech: {
      badge: 'Lens Simulator & Optical Technology',
      title: 'How our advanced lens treatments transform your vision',
      subtitle: 'Compare in real-time the visual difference between standard lenses and our certified high-definition optical filters.',
      selectLabel: 'Select a lens treatment to simulate:',
      filters: {
        normal: {
          title: 'Standard Uncoated Lens',
          desc: 'Vulnerable to disturbing glares, flashes, and digital blue light fatigue.',
          badge: 'Standard',
          visualStatus: 'No active optical coating',
          visualDesc: 'Intense reflections and cumulative eye fatigue in digital screen environments.',
        },
        blue: {
          title: 'Blue Block Pro HD',
          desc: 'Blocks harmful high-energy light from screens. Prevents dry eyes and digital strain.',
          badge: 'Recommended',
          visualStatus: 'Active Blue Filter: 99% UV & Blue Light Filtration',
          visualDesc: 'Enhanced visual contrast, immediate eye comfort, and healthier sleep cycles.',
        },
        antiglare: {
          title: 'Hydrophobic Anti-Glare HD',
          desc: 'Eliminates headlight glare during night driving and repels water and fingerprints.',
          badge: 'Maximum Clarity',
          visualStatus: 'Multi-layer Anti-reflective Coating Active',
          visualDesc: 'Zero oncoming headlight halo glare and 99.7% crystal-clear light transmission.',
        },
        photochromic: {
          title: 'Transitions Gen 8 Smart Lenses',
          desc: 'Smart lenses that darken seamlessly under sunlight and turn crystal clear indoors.',
          badge: '2-in-1 Optical + Sun',
          visualStatus: 'Adaptive Solar Activation (Clear Indoors / Dark Outdoors)',
          visualDesc: 'Total outdoor UV protection paired with indoor optical relaxation.',
        },
      },
      comparisonNotice: 'Interactive optical demonstration based on certified ophthalmic standards',
      featuresList: [
        {
          name: 'Blue Block Digital',
          desc: 'Blocks 99% of harmful artificial blue light emitted by screens and LED fixtures.',
          tag: 'Recommended for office and remote work',
        },
        {
          name: 'Hydrophobic Anti-Glare',
          desc: 'Repels moisture, dust, and fingerprints. Crystal-clear night vision with zero halos.',
          tag: 'Maximum visual clarity',
        },
        {
          name: 'Transitions Gen 8 Photochromic',
          desc: 'Adaptive lenses darkening outdoors in seconds and clearing up rapidly inside.',
          tag: '2-in-1: Prescription & Sun',
        },
        {
          name: 'Digital HD Progressives',
          desc: 'Seamless vision at near, intermediate, and far focal lengths without visible lines.',
          tag: 'Advanced presbyopia technology',
        },
      ],
    },
    about: {
      badge: 'About Blick Optic',
      title: 'Passion for your eye health, devotion to your well-being',
      p1: 'We were founded with a clear purpose: to democratize access to advanced optical healthcare without compromising design or human warmth. At Blick Optic, we recognize that your glasses are far more than a medical device—they are an essential pillar of your identity and everyday performance.',
      p2: 'Every patient undergoes a thorough clinical evaluation powered by computerized diagnostic equipment and internationally certified lens coatings, ensuring razor-sharp clarity, eye relaxation, and lasting durability.',
      yearsExperience: '15+',
      yearsBadgeDesc: 'Years of Excellence dedicated to family eye care.',
      stats: {
        patients: '+18,000',
        patientsLabel: 'Satisfied Patients',
        branches: '3',
        branchesLabel: 'Boutique Locations',
        guarantee: '100%',
        guaranteeLabel: 'Adaptation Guarantee',
      },
      values: [
        {
          title: 'Certified Optometrists',
          desc: 'Our clinical team holds official medical licenses and ongoing certification in ocular health and advanced contactology.',
        },
        {
          title: 'Cutting-Edge Technology',
          desc: 'Digital computerized diagnostics ensuring accurate prescriptions with zero margin for error.',
        },
        {
          title: 'Full Adaptation Guarantee',
          desc: 'If you experience any discomfort with your new prescription within 30 days, we readjust your lenses at no extra cost.',
        },
        {
          title: 'Personalized Consultation',
          desc: 'We advise you with empathy and care to discover the optical solution best matched to your face shape and lifestyle.',
        },
      ],
      protocolTitle: 'Our 4-Step Clinical Protocol',
      protocolSubtitle: 'A transparent, stress-free healthcare process',
      steps: [
        { num: '01', title: 'Clinical Interview', desc: 'Understanding your daily routine, screen hours, and visual health history.' },
        { num: '02', title: 'Digital Diagnostics', desc: 'High-precision computerized autorefraction and ocular biomicroscopy.' },
        { num: '03', title: 'Fine Refraction', desc: 'Visual acuity testing with phoropter and trial lenses for 20/20 clarity.' },
        { num: '04', title: 'Selection & Delivery', desc: 'Visagism styling guidance for your frame and 24-hour express edging.' },
      ],
    },
    appointment: {
      badge: 'Instant Online Scheduling',
      title: 'Book your eye exam with zero queues and zero waiting',
      subtitle: 'Select your preferred time slot at any of our 3 boutique clinics. We will confirm your appointment within minutes via WhatsApp or email.',
      benefit1Title: 'Priority on-time service',
      benefit1Desc: 'Zero wasted time; the examination room is ready upon your arrival.',
      benefit2Title: 'Free exam with your frame',
      benefit2Desc: 'Complete computerized diagnostic evaluation without consultation fees.',
      benefit3Title: 'Privacy and medical confidentiality',
      benefit3Desc: 'Your optical clinical records are secured under strict health data regulations.',
      branchesHeader: 'Our 3 Boutique Branches:',
      mainBadge: 'Main',
      formTitle: 'Appointment Booking Form',
      formSubtitle: 'Fill in your details to confirm your specialist’s availability.',
      fullNameLabel: 'Full Name *',
      fullNamePlaceholder: 'e.g. Sarah Jenkins',
      phoneLabel: 'Phone / WhatsApp *',
      phonePlaceholder: '+1 (555) 123-4567',
      emailLabel: 'Email Address *',
      emailPlaceholder: 'your.email@example.com',
      branchLabel: 'Preferred Branch *',
      serviceLabel: 'Required Service *',
      servicesOptions: [
        'Computerized Vision Exam (Free with frame purchase)',
        'Frame Selection & Prescription Fitting',
        'Contact Lens Fitting & Trial',
        'Prescription / Polarized Sunglasses',
        'Pediatric / Children Eye Consultation',
        'Frame Adjustment & Ultrasonic Maintenance',
      ],
      dateLabel: 'Preferred Date *',
      timeSlotLabel: 'Suggested Time Slot *',
      notesLabel: 'Symptoms or Notes (Optional)',
      notesPlaceholder: 'e.g. I work on screens 8 hours a day, feeling headaches in the afternoon...',
      submitBtn: 'Confirm & Book My Appointment',
      submittingBtn: 'Checking real-time availability...',
      securityNote: '🔒 Your personal information is 100% secure. We never send spam.',
      successTitle: 'Appointment Confirmed Successfully!',
      successSubtitle: 'We look forward to welcoming you at the selected boutique branch.',
      folioLabel: 'Reservation Code:',
      confirmWhatsAppBtn: 'Confirm on WhatsApp now',
      branchesData: [
        {
          id: 'sucursal-centro',
          name: 'Central Medical Branch',
          address: 'Av. Paseo de la Reforma #450, Col. Juárez',
          city: 'Central City',
          scheduleWeek: 'Monday to Friday: 8:00 AM – 7:30 PM',
          scheduleSat: 'Saturdays: 9:00 AM – 5:00 PM',
          isMain: true,
        },
        {
          id: 'sucursal-plaza',
          name: 'Plaza Sol Boutique',
          address: 'Plaza Sol Mall, Suite L-104 (Level 1)',
          city: 'Gold District',
          scheduleWeek: 'Monday to Friday: 10:00 AM – 8:00 PM',
          scheduleSat: 'Saturdays: 10:00 AM – 7:00 PM',
          isMain: false,
        },
        {
          id: 'sucursal-galerias',
          name: 'Galerías North Branch',
          address: 'Av. Insurgentes Norte #1280, Suite 3B',
          city: 'North District',
          scheduleWeek: 'Monday to Friday: 9:00 AM – 7:00 PM',
          scheduleSat: 'Saturdays: 9:00 AM – 4:00 PM',
          isMain: false,
        },
      ],
    },
    testimonials: {
      badge: 'Real Patient Testimonials',
      title: 'Words from those who now see clearly',
      subtitle: 'Over 98% of our patients enthusiastically recommend us for our punctuality, technology, and warranty.',
      items: [
        {
          id: 't-1',
          name: 'Dr. Mariana Cordero',
          role: 'Pediatric Physician',
          comment: 'I have been getting my eyewear at Blick Optic for 4 years. The computerized exam is remarkably thorough, and their Blue Block lenses significantly eliminated my daily screen headaches.',
          branch: 'Central Medical Branch',
        },
        {
          id: 't-2',
          name: 'Carlos Mendoza Ruiz',
          role: 'Architect & Designer',
          comment: 'Exceptional attention and visagism advice. They guided me toward a titanium frame that fits my facial structure perfectly. The prescription glasses were ready in under 24 hours!',
          branch: 'Plaza Sol Boutique',
        },
        {
          id: 't-3',
          name: 'Valeria & Mateo Sánchez',
          role: 'Mother of 2',
          comment: 'I purchased the unbreakable children’s frames for my 6-year-old son. He has dropped them countless times playing and they remain flawless. The optometrist’s patience was wonderful.',
          branch: 'Galerías North Branch',
        },
      ],
      faqBadge: 'Frequently Asked Questions',
      faqTitle: 'Answers to your visual health questions',
      faqs: [
        {
          id: 'faq-1',
          question: 'Is the eye examination completely free?',
          answer: 'Our professional computerized examination is 100% FREE when you purchase frames or prescription lenses with us. If you solely require a standalone printed medical prescription for external use, a nominal fee of $15 USD applies.',
          category: 'Exams',
        },
        {
          id: 'faq-2',
          question: 'How fast can I receive my prescription glasses?',
          answer: 'Thanks to our in-house computerized laboratory, 85% of standard single-vision prescriptions are prepared in just 24 hours. Custom specialty lenses (ultra-high index, digital progressives, or Transitions photochromics) take 48 to 72 business hours.',
          category: 'Delivery',
        },
        {
          id: 'faq-3',
          question: 'What warranty comes with my frames and lenses?',
          answer: 'We provide a 12-month manufacturer defect warranty on all frames, plus a 30-day adaptation guarantee on your prescription lenses (if your eyes need adjustment, we re-evaluate and replace them free of charge).',
          category: 'Warranty',
        },
        {
          id: 'faq-4',
          question: 'Can I bring my own existing frame for lens replacement?',
          answer: 'Yes! You are welcome to bring your favorite frame to any of our branches. Our specialists will inspect its structural condition and mount your custom precision lenses.',
          category: 'Services',
        },
        {
          id: 'faq-5',
          question: 'How do I know if I need Blue Light Defense lenses?',
          answer: 'If you spend more than 3 hours daily in front of computer screens, smartphones, or tablets, blue filter lenses reduce digital eye strain, prevent dry eyes, and preserve natural melatonin for better sleep.',
          category: 'Eye Health',
        },
      ],
    },
    footer: {
      newsletterTitle: 'Receive 15% off your first boutique frame',
      newsletterSubtitle: 'Subscribe to our visual wellness newsletter and exclusive seasonal releases.',
      emailPlaceholder: 'Enter your email address',
      subscribeBtn: 'Subscribe',
      subscribedMsg: 'Subscribed successfully!',
      bioText: 'Specialists in optical wellness, high-end computerized optometry, and boutique designer frames. We nurture your vision with clinical precision and aesthetic distinction.',
      navHeader: 'Navigation',
      treatmentsHeader: 'Optical Treatments',
      treatments: [
        '100% Digital Computerized Eye Exam',
        'Blue Block Screen Defense Filters',
        'Crizal HD Anti-Reflective Lenses',
        'High-Precision Progressive Lenses',
        'Custom Contact Lens Adaptation',
      ],
      contactHeader: 'Contact & Hours',
      mainAddress: 'Av. Paseo de la Reforma #450, Col. Juárez, Central City (Main Boutique)',
      scheduleLabel: 'Monday to Saturday:',
      scheduleDays: 'Monday to Saturday:',
      scheduleHours: '8:00 AM – 7:30 PM (Sat: until 5:00 PM)',
      scheduleSunday: 'Sundays: Clinical sterilization & rest',
      copyrightText: '© 2026 Blick Optic. All rights reserved. Professional Optometric License #7894210.',
      scrollTop: 'Top',
    },
    whatsapp: {
      onlineStatus: 'Online • Specialists available',
      onlineStatusLabel: 'Online',
      typingStatus: 'Typing...',
      optometristRole: 'Patient Care Specialist',
      morningGreeting: 'Good morning! ☀️',
      afternoonGreeting: 'Good afternoon! 🌤️',
      nightGreeting: 'Good evening! 🌙',
      morningSubtext: 'Optical team ready to assist you',
      afternoonSubtext: 'Optometrists in consultation and live support',
      nightSubtext: 'We will reply first thing in the morning or book online',
      morningBadge: 'Morning Shift',
      afternoonBadge: 'Afternoon Shift',
      nightBadge: '24/7 Concierge',
      quickHelpTitle: 'Current quick questions:',
      currentScheduleLabel: 'Live hours',
      morningQuestions: [
        'Good morning, do you have openings for today?',
        'Good morning, what time do your boutiques open today?',
        'Good morning, I would like a quote for frames with blue light filter',
        'Good morning, how long does it take to deliver my glasses?',
      ],
      afternoonQuestions: [
        'Good afternoon, do you have availability for an exam today?',
        'Good afternoon, can I stop by today to try on frames?',
        'Good afternoon, how much does a frame with anti-glare HD lenses cost?',
        'Good afternoon, do you have active promotions on progressive lenses?',
      ],
      nightQuestions: [
        'Good evening, can I schedule my eye exam for tomorrow?',
        'Good evening, I would like a quote for Transitions smart lenses',
        'Good evening, what are your opening hours for this weekend?',
        'Good evening, how can I send you my optical prescription?',
      ],
      quickQuestions: [
        '🗓️ I would like to schedule a vision exam',
        '👓 Inquire about available frame collections',
        '💻 Information on Blue Block screen lenses',
        '📍 Check boutique branch hours and locations',
      ],
      customPlaceholder: 'Type your message...',
      sendBtn: 'Send message',
      openChatBtn: 'Start WhatsApp Chat',
      tooltipText: 'Questions? Chat with an optometrist 👓',
    },
  },

  // ========================== PORTUGUÊS ==========================
  pt: {
    seo: {
      title: 'Blick Optic | Laboratório Ótico Digital na Cidade do México',
      description: 'Agende seu exame de vista computadorizado. Armações de grife com lentes incluídas e entrega em 24h. Visite-nos na Paseo de la Reforma, CDMX.',
      keywords: 'otica cdmx, exame de vista gratis, oculos de grau, lentes antirreflexo, armacoes de design, blick optic, luz azul',
      ogImageAlt: 'Interior da Boutique Blick Optic na Cidade do México',
    },
    common: {
      bookAppointment: 'Agendar Consulta',
      viewCatalog: 'Ver Catálogo',
      scheduleOnline: 'Agendar Online',
      callNow: 'Ligue Agora',
      verifiedPatient: 'Paciente Verificado',
      freeExamBadge: 'Exame Cortesia',
      oneYearWarranty: '1 ano de garantia',
      graduation24h: 'Graduação em 24h',
      digitalExam100: 'Exame 100% digital',
      satisfactionScore: '4.9 / 5.0',
      patientsCount: '+18.500 pacientes',
      close: 'Fechar',
      send: 'Enviar',
      submitting: 'Processando...',
      allRightsReserved: 'Todos os direitos reservados. Registro Profissional Optométrico #7894210.',
      backToTop: 'Subir',
      includedLenses: 'Lentes graduadas incluídas',
      reviews: 'avaliações',
      color: 'Cor',
      material: 'Material',
      shape: 'Formato',
      price: 'Preço',
      freeWithFrames: 'GRÁTIS ao adquirir armação ou lentes',
    },
    navbar: {
      topBarSchedule: 'Segunda a Sábado: 9:00 às 19:30',
      topBarLocation: 'Boutique Óptica & Laboratório Digital',
      topBarPromo: 'Exame de Vista Computadorizado Cortesia',
      home: 'Início',
      services: 'Serviços',
      catalog: 'Catálogo',
      technology: 'Tecnologia',
      boutique: 'Boutique',
      reviews: 'Avaliações',
      contact: 'Contato',
      bookAppointment: 'Agendar Consulta',
      selectLanguage: 'Idioma',
    },
    hero: {
      badge: 'Boutique Óptica & Laboratório Digital • Mais de 15 anos de excelência',
      titlePart1: 'Saúde visual de alta precisão com o',
      titleAccent: 'design e elegância',
      titlePart2: 'que você merece',
      subtitle: 'Exames de vista computadorizados com precisão micrométrica, atendimento personalizado por optometristas certificados e uma seleção exclusiva de mais de 1.200 armações de design e marcas internacionais.',
      check1: 'Exame 100% digital',
      check2: 'Garantia de 1 ano',
      check3: 'Graduação em 24h',
      ctaPrimary: 'Agendar Exame Cortesia',
      ctaSecondary: 'Ver Catálogo de Armações',
      ratingScore: '4.9 / 5.0',
      patientsTrust: 'Mais de 18.500 pacientes com visão 20/20',
      cardSeason: 'Coleção Nova Temporada',
      cardTitle: 'Lentes Blue Block Pro HD',
      cardSpecs: '100% Antirreflexo + Filtro UV400',
      cardTag: 'Certificação ISO 9001',
    },
    services: {
      badge: 'Nossos Serviços Especializados',
      title: 'Soluções ópticas completas para sua saúde visual',
      subtitle: 'Combinamos tecnologia de diagnóstico digital avançado, laboratórios de montagem próprios e consultoria visagista personalizada.',
      freeTag: 'Exame cortesia na compra da sua armação!',
      equipmentLabel: 'Equipamento',
      durationLabel: 'Duração estimada',
      bookExamBtn: 'Agendar Exame Agora',
      viewCatalogBtn: 'Ver Catálogo de Armações',
      items: [
        {
          id: 'examen-computarizado',
          title: 'Exame de Vista Computadorizado e Profissional',
          tagline: 'Diagnóstico 100% digital de altíssima precisão',
          description: 'Avaliação completa da acuidade visual com autorrefrator digital de última geração, biomicroscopia e foróptero computadorizado. Detectamos miopia, astigmatismo, hipermetropia e presbiopia em menos de 20 minutos.',
          benefits: [
            'Sem custo ao adquirir suas armações ou lentes graduadas',
            'Atendimento por Optometristas e Optologistas certificados',
            'Diagnóstico de fadiga ocular por telas e iluminação LED',
            'Teste de campo visual e acuidade cromática',
          ],
          equipment: 'Autorrefrator Topcon KR-800 & Lâmpada de Fenda Digital',
          duration: '20-25 minutos',
          isFree: true,
        },
        {
          id: 'stock-lentes',
          title: 'Amplo Estoque de Armações Ópticas e Solares',
          tagline: 'Mais de 1.200 modelos de marcas internacionais',
          description: 'Coleções exclusivas em titânio aeroespacial, acetato italiano, TR90 ultraleve e aço cirúrgico. Trabalhamos com lentes antirreflexo premium (Crizal, Blue Defense, Fotocromáticas Transitions Gen 8 e Multifocais Digitais).',
          benefits: [
            'Garantia de adaptação e graduação por 12 meses',
            'Filtro de luz azul e proteção 100% UV400 certificada',
            'Lentes de alto índice ultrafinas para graus elevados',
            'Armações de marcas consagradas como Ray-Ban, Oakley, Carrera e mais',
          ],
          equipment: 'Laboratório de corte e montagem digital Essilor Delta 200',
          duration: 'Pronto em 24 a 48 horas',
          isFree: false,
        },
        {
          id: 'lentes-contacto-asesoria',
          title: 'Adaptação de Lentes de Contato & Visagismo',
          tagline: 'Conforto o dia todo e a armação perfeita para o seu rosto',
          description: 'Teste de adaptação personalizado para lentes de contato esféricas, tóricas (astigmatismo) e multifocais (Acuvue, Air Optix, Biofinity). Nossos consultores visagistas indicam a armação ideal para o formato do seu rosto.',
          benefits: [
            'Kit de teste inicial com solução de limpeza incluída',
            'Treinamento prático de colocação, remoção e higiene',
            'Análise de visagismo facial (rostos ovais, redondos, quadrados)',
            'Lentes de contato de silicone hidrogel de máxima oxigenação',
          ],
          equipment: 'Ceratometria e Topografia Corneana Digital',
          duration: '30 minutos',
          isFree: false,
        },
      ],
    },
    catalog: {
      badge: 'Coleção Boutique 2026',
      title: 'Armações de autor com design e durabilidade premium',
      subtitle: 'Conheça nossas linhas selecionadas: desde titânio ultraleve e acetato italiano até modelos esportivos flexíveis e infantis inquebráveis.',
      includesNotice: 'Inclui estojo rígido premium + flanela de microfibra de seda',
      categories: {
        todos: 'Todos os Modelos',
        clasicos: 'Clássicos & Executivos',
        deportivos: 'Esportivos & Flexíveis',
        sol: 'Óculos de Sol UV400',
        infantiles: 'Infantis & Juvenis',
      },
      modal: {
        quickBook: 'Reserve esta armação para experimentar no seu exame',
        detailsTitle: 'Especificações Técnicas',
        benefitsTitle: 'Vantagens do Modelo',
        includedTitle: 'Incluso no seu pacote',
        reserveFrameBtn: 'Agendar Consulta e Experimentar Modelo',
        askWhatsApp: 'Perguntar no WhatsApp sobre este modelo',
        inStock: 'Disponível na boutique para prova imediata',
        deliveryHours: 'Lentes graduadas prontas em 24 a 48 horas',
      },
      products: [
        {
          id: 'frame-01',
          name: 'Milano Executive Titanium',
          brand: 'Aura Premium',
          category: 'clasicos',
          categoryName: 'Clássicos & Executivos',
          badge: 'Mais Vendido',
          material: 'Titânio Puro Ultraleve (12g)',
          shape: 'Retangular elegante',
          description: 'Design sofisticado e atemporal em titânio aeroespacial. Dobradiças flexíveis com mola sem parafusos e plaquetas nasais de silicone médico antialérgico.',
          features: ['Ultraleve: apenas 12 gramas', 'Resistente à corrosão e suor', 'Acompanha estojo rígido e flanela'],
          lensTypeIncluded: 'Lentes graduadas antirreflexo incluídas',
        },
        {
          id: 'frame-02',
          name: 'Oxford Classic Havana',
          brand: 'Blick Optic Signature',
          category: 'clasicos',
          categoryName: 'Clássicos & Executivos',
          badge: 'Elegância Atemporal',
          material: 'Acetato de Celulose Italiano',
          shape: 'Panto / Redondo suave',
          description: 'Armação de acetato polido manualmente com acabamento tartaruga havana. Um clássico refinado que transmite autoridade no trabalho e eventos.',
          features: ['Alma metálica interna reforçada', 'Polimento artesanal de alto brilho', 'Compatível com todos os graus'],
          lensTypeIncluded: 'Lentes com tratamento antirreflexo hidrofóbico',
        },
        {
          id: 'frame-03',
          name: 'AeroFlex Pro TR90',
          brand: 'ActiveTech Optics',
          category: 'deportivos',
          categoryName: 'Esportivos & Flexíveis',
          badge: 'Ultra Resistente',
          material: 'Polímero TR90 com memória térmica',
          shape: 'Semienvolvente ergonômico',
          description: 'Estrutura flexível com memória de forma que absorve impactos sem deformar. Pontas de borracha hidrofílica que aumentam a aderência durante o treino.',
          features: ['Grip antiderrapante resistente ao suor', 'Flexibilidade de 180° sem quebrar', 'Canais laterais antiembaçamento'],
          lensTypeIncluded: 'Lentes de policarbonato de alto impacto',
        },
        {
          id: 'frame-04',
          name: 'Vortex Sport Carbon',
          brand: 'ActiveTech Optics',
          category: 'deportivos',
          categoryName: 'Esportivos & Flexíveis',
          badge: 'Tecnologia Carbono',
          material: 'Fibra de carbono e elastômero',
          shape: 'Quadrado esportivo dinâmico',
          description: 'Hastes com inserção de fibra de carbono ultraleve. Máxima estabilidade para corredores, tenistas e atletas de alto rendimento.',
          features: ['Hastes microajustáveis 3D', 'Peso: 15g', 'Tratamento antiembaçante'],
          lensTypeIncluded: 'Lentes polarizadas de policarbonato',
        },
        {
          id: 'frame-05',
          name: 'Riviera Sun Polarized UV400',
          brand: 'Soleil Italia',
          category: 'sol',
          categoryName: 'Óculos de Sol UV400',
          badge: 'Proteção Total UV',
          material: 'Acetato Mazzucchelli & Detalhes dourados',
          shape: 'Aviador Moderno Quadrado',
          description: 'Lentes solares polarizadas com filtro de alta definição. Eliminam 99,9% dos reflexos na estrada, água e asfalto, reduzindo o cansaço visual.',
          features: ['Filtro Polarizado HD Triacetato', 'Proteção 100% UVA e UVB', 'Graduável com seu grau oftálmico'],
          lensTypeIncluded: 'Lentes solares polarizadas Cat. 3',
        },
        {
          id: 'frame-06',
          name: 'Copacabana Retro Chic',
          brand: 'Soleil Italia',
          category: 'sol',
          categoryName: 'Óculos de Sol UV400',
          badge: 'Tendência 2026',
          material: 'Bioacetato ecológico',
          shape: 'Gatinho suave / Redondo',
          description: 'Estilo glamouroso com proteção solar premium. Degradê em tons de âmbar e cinza que garantem nitidez tanto em dias ensolarados quanto nublados.',
          features: ['Gradiente de cor óptico HD', 'Estrutura leve e hipoalergênica', 'Garantia de armação de 1 ano'],
          lensTypeIncluded: 'Lentes solares degradê UV400',
        },
        {
          id: 'frame-07',
          name: 'Kids Wonder Inquebrável',
          brand: 'Junior Vision',
          category: 'infantiles',
          categoryName: 'Infantis & Juvenis',
          badge: '100% Inquebrável',
          material: 'Siliflex elástico atóxico (BPA Free)',
          shape: 'Redondo ergonômico para crianças',
          description: 'Projetados especialmente para crianças de 3 a 12 anos. Flexíveis em 360 graus, sem dobradiças metálicas cortantes e com elástico ajustável incluso.',
          features: ['Faixa elástica de segurança para brincadeiras', 'Sem peças metálicas perigosas', 'Cores vivas e divertidas'],
          lensTypeIncluded: 'Lentes em Policarbonato antirrisco',
        },
        {
          id: 'frame-08',
          name: 'Teen Studio Cool',
          brand: 'Junior Vision',
          category: 'infantiles',
          categoryName: 'Infantis & Juvenis',
          badge: 'Luz Azul Telas',
          material: 'Acetato juvenil ultraleve',
          shape: 'Geométrico moderno',
          description: 'Ideais para estudantes e adolescentes. Desenvolvidos para proteger a visão durante longas horas de estudo, computadores, tablets e games.',
          features: ['Filtro Blue Protect para monitores e celulares', 'Ponteira nasal autoajustável', 'Design contemporâneo e confortável'],
          lensTypeIncluded: 'Lentes com filtro azul Blue Light Defense',
        },
      ],
    },
    lensTech: {
      badge: 'Simulador de Lentes & Tecnologia Óptica',
      title: 'Como nossos tratamentos de lentes transformam sua visão?',
      subtitle: 'Compare em tempo real a diferença entre uma lente comum e nossos filtros ópticos de alta definição.',
      selectLabel: 'Selecione um tratamento para simular:',
      filters: {
        normal: {
          title: 'Lente Comum Sem Filtro',
          desc: 'Exposta a reflexos incômodos, ofuscamento e fadiga por luz azul.',
          badge: 'Padrão',
          visualStatus: 'Sem proteção óptica ativa',
          visualDesc: 'Reflexos intensos e cansaço visual acumulado diante de telas.',
        },
        blue: {
          title: 'Blue Block Pro HD',
          desc: 'Bloqueia a luz nociva de telas e celulares. Previne olhos secos e cansaço digital.',
          badge: 'Recomendado',
          visualStatus: 'Filtro Azul Ativo: 99% bloqueio UV & Luz Azul',
          visualDesc: 'Maior contraste, alívio visual imediato e melhora na qualidade do sono.',
        },
        antiglare: {
          title: 'Antirreflexo Hidrofóbico HD',
          desc: 'Elimina faróis ofuscantes ao dirigir à noite e repele água, poeira e impressões digitais.',
          badge: 'Máxima Nitidez',
          visualStatus: 'Tratamento Antirreflexo Multicamadas Ativo',
          visualDesc: 'Zero reflexos ao dirigir à noite e transparência cristalina de 99,7%.',
        },
        photochromic: {
          title: 'Transitions Gen 8 Fotocromático',
          desc: 'Lentes inteligentes que escurecem ao sol e ficam transparentes em ambientes internos.',
          badge: '2 em 1 Grau + Solar',
          visualStatus: 'Ativação Solar Inteligente (Claro em Interiores / Escuro ao Sol)',
          visualDesc: 'Proteção UV total ao ar livre com máximo conforto em ambientes internos.',
        },
      },
      comparisonNotice: 'Demonstração óptica interativa baseada em padrões oftálmicos certificados',
      featuresList: [
        {
          name: 'Blue Block Digital',
          desc: 'Bloqueia 99% da luz azul prejudicial emitida por telas de computador e LEDs.',
          tag: 'Recomendado para home office e trabalho em escritório',
        },
        {
          name: 'Antirreflexo Hidrofóbico',
          desc: 'Repele água, poeira e marcas de dedo. Visão noturna cristalina sem ofuscamentos.',
          tag: 'Máxima nitidez visual',
        },
        {
          name: 'Transitions Gen 8 Fotocromático',
          desc: 'Lentes inteligentes que escurecem em segundos sob o sol e clareiam rapidamente dentro de casa.',
          tag: '2 em 1: Grau e Solar',
        },
        {
          name: 'Multifocais HD Digitais',
          desc: 'Visão nítida para perto, intermediário e longe sem saltos ou linhas visíveis.',
          tag: 'Tecnologia avançada para presbiopia',
        },
      ],
    },
    about: {
      badge: 'Sobre a Blick Optic',
      title: 'Paixão pela saúde dos seus olhos, compromisso com o seu bem-estar',
      p1: 'Nascemos com um propósito claro: democratizar o acesso à saúde visual de alta tecnologia sem abrir mão do design e do atendimento humanizado. Na Blick Optic entendemos que seus óculos são muito mais do que um dispositivo médico—são parte da sua identidade e rendimento diário.',
      p2: 'Cada paciente recebe uma avaliação optométrica aprofundada com equipamentos digitais e lentes com filtros certificados internacionalmente, garantindo visão nítida, descanso ocular e alta durabilidade.',
      yearsExperience: '15+',
      yearsBadgeDesc: 'Anos de Excelência cuidando da saúde visual.',
      stats: {
        patients: '+18.000',
        patientsLabel: 'Pacientes atendidos',
        branches: '3',
        branchesLabel: 'Unidades boutique',
        guarantee: '100%',
        guaranteeLabel: 'Garantia de adaptação',
      },
      values: [
        {
          title: 'Optometristas Certificados',
          desc: 'Equipe com registro profissional e atualização médica contínua em saúde ocular e contatologia.',
        },
        {
          title: 'Tecnologia de Ponta',
          desc: 'Equipamentos computadorizados de diagnóstico digital de alta precisão para graus exatos sem margem de erro.',
        },
        {
          title: 'Garantia Total de Adaptação',
          desc: 'Se nos primeiros 30 dias sentir qualquer desconforto com seu grau, reajustamos suas lentes sem custo.',
        },
        {
          title: 'Atendimento Personalizado',
          desc: 'Consultoria atenciosa e empática para encontrar a solução perfeita para o seu estilo de vida e formato de rosto.',
        },
      ],
      protocolTitle: 'Nosso Protocolo Clínico em 4 Etapas',
      protocolSubtitle: 'Um processo médico transparente e tranquilo',
      steps: [
        { num: '01', title: 'Entrevista Clínica', desc: 'Compreendemos seus hábitos diários, horas em telas e histórico visual.' },
        { num: '02', title: 'Diagnóstico Digital', desc: 'Medição computadorizada com autorrefrator e biomicroscopia ocular.' },
        { num: '03', title: 'Refração Fina', desc: 'Teste de acuidade com foróptero e lentes de prova para visão 20/20 nítida.' },
        { num: '04', title: 'Escolha & Entrega', desc: 'Consultoria visagista para sua armação e montagem expressa em 24 horas.' },
      ],
    },
    appointment: {
      badge: 'Agendamento Online Imediato',
      title: 'Agende seu exame de vista sem filas nem esperas',
      subtitle: 'Escolha seu horário preferido em qualquer uma das nossas 3 unidades boutique. Confirmamos seu agendamento em minutos pelo WhatsApp ou e-mail.',
      benefit1Title: 'Atendimento pontual e prioritário',
      benefit1Desc: 'Sem tempo perdido; o consultório estará preparado para receber você.',
      benefit2Title: 'Exame cortesia com sua armação',
      benefit2Desc: 'Avaliação computadorizada completa sem cobrança de consulta.',
      benefit3Title: 'Privacidade e sigilo médico',
      benefit3Desc: 'Seu prontuário visual protegido sob rigorosas normas médicas.',
      branchesHeader: 'Nossas 3 Unidades Boutique:',
      mainBadge: 'Principal',
      formTitle: 'Formulário de Agendamento',
      formSubtitle: 'Preencha seus dados para confirmarmos a disponibilidade do especialista.',
      fullNameLabel: 'Nome Completo *',
      fullNamePlaceholder: 'Ex. Juliana Oliveira Santos',
      phoneLabel: 'Telefone / WhatsApp *',
      phonePlaceholder: '+55 (11) 98765-4321',
      emailLabel: 'E-mail *',
      emailPlaceholder: 'seu.email@exemplo.com',
      branchLabel: 'Unidade de Preferência *',
      serviceLabel: 'Serviço Necessário *',
      servicesOptions: [
        'Exame de Vista Computadorizado (Grátis com armação)',
        'Graduação e Escolha de Armações',
        'Adaptação de Lentes de Contato',
        'Óculos de Sol com Grau / Polarizados',
        'Consulta Pediátrica / Infantil',
        'Ajuste e Manutenção de Armação',
      ],
      dateLabel: 'Data Desejada *',
      timeSlotLabel: 'Horário Sugerido *',
      notesLabel: 'Sintomas ou Observações (Opcional)',
      notesPlaceholder: 'Ex. Trabalho 8 horas no computador, sinto dor de cabeça no fim do dia...',
      submitBtn: 'Confirmar e Agendar Minha Consulta',
      submittingBtn: 'Verificando disponibilidade...',
      securityNote: '🔒 Seus dados estão 100% seguros e não enviamos spam promocional.',
      successTitle: 'Consulta Confirmada com Sucesso!',
      successSubtitle: 'Aguardamos você na unidade escolhida. Seu horário clínico já está reservado.',
      folioLabel: 'Código da reserva:',
      confirmWhatsAppBtn: 'Confirmar pelo WhatsApp agora',
      branchesData: [
        {
          id: 'sucursal-centro',
          name: 'Unidade Central Médica',
          address: 'Av. Paulista #450, Jardins',
          city: 'Centro',
          scheduleWeek: 'Segunda a Sexta: 8:00 às 19:30',
          scheduleSat: 'Sábados: 9:00 às 17:00',
          isMain: true,
        },
        {
          id: 'sucursal-plaza',
          name: 'Unidade Shopping Plaza',
          address: 'Shopping Plaza Sol, Loja L-104 (Piso 1)',
          city: 'Zona Sul',
          scheduleWeek: 'Segunda a Sexta: 10:00 às 20:00',
          scheduleSat: 'Sábados: 10:00 às 19:00',
          isMain: false,
        },
        {
          id: 'sucursal-galerias',
          name: 'Unidade Galerias Norte',
          address: 'Av. Norte #1280, Sala 3B',
          city: 'Zona Norte',
          scheduleWeek: 'Segunda a Sexta: 9:00 às 19:00',
          scheduleSat: 'Sábados: 9:00 às 16:00',
          isMain: false,
        },
      ],
    },
    testimonials: {
      badge: 'Experiências Reais de Pacientes',
      title: 'O que dizem os pacientes que voltaram a ver com clareza',
      subtitle: 'Mais de 98% dos nossos pacientes nos recomendam pela pontualidade, tecnologia e garantia.',
      items: [
        {
          id: 't-1',
          name: 'Dra. Mariana Cordero',
          role: 'Médica Pediatra',
          comment: 'Faço meus óculos na Blick Optic há 4 anos. O exame computadorizado é extremamente minucioso e as lentes Blue Block acabaram com minhas dores de cabeça diante do computador.',
          branch: 'Unidade Central Médica',
        },
        {
          id: 't-2',
          name: 'Carlos Mendoza Ruiz',
          role: 'Arquiteto & Designer',
          comment: 'Atendimento excepcional e consultoria visagista impecável. Me ajudaram a escolher uma armação de titânio perfeita para o meu formato de rosto. Ficaram prontos em menos de 24 horas!',
          branch: 'Unidade Shopping Plaza',
        },
        {
          id: 't-3',
          name: 'Valéria & Mateo Sánchez',
          role: 'Mãe de Família',
          comment: 'Comprei as armações inquebráveis para meu filho de 6 anos. Ele já derrubou várias vezes brincando e continuam perfeitas. A paciência da equipe com as crianças foi maravilhosa.',
          branch: 'Unidade Galerias Norte',
        },
      ],
      faqBadge: 'Perguntas Frequentes',
      faqTitle: 'Tiramos suas dúvidas sobre saúde visual',
      faqs: [
        {
          id: 'faq-1',
          question: 'O exame de vista tem algum custo?',
          answer: 'Nosso exame computadorizado profissional é 100% GRATUITO na compra de suas armações ou lentes conosco. Caso precise apenas da receita médica impressa para uso externo, cobramos uma taxa simbólica de $15 USD.',
          category: 'Exames',
        },
        {
          id: 'faq-2',
          question: 'Quanto tempo leva para os óculos ficarem prontos?',
          answer: 'Graças ao nosso laboratório digital próprio, 85% das graduações monofocais convencionais ficam prontas em apenas 24 horas. Lentes especiais (alto índice, multifocais ou Transitions) levam de 48 a 72 horas úteis.',
          category: 'Prazos',
        },
        {
          id: 'faq-3',
          question: 'Qual é a garantia das armações e lentes?',
          answer: 'Oferecemos 12 meses de garantia contra defeitos de fabricação em todas as armações e 30 dias de garantia total de adaptação nas suas lentes graduadas.',
          category: 'Garantias',
        },
        {
          id: 'faq-4',
          question: 'Posso levar minha própria armação para trocar apenas as lentes?',
          answer: 'Sim! Você pode trazer sua armação favorita em qualquer uma das nossas unidades. Nossos especialistas avaliarão a estrutura e farão o corte e montagem das novas lentes.',
          category: 'Serviços',
        },
        {
          id: 'faq-5',
          question: 'Como saber se preciso de filtro de luz azul (Blue Block)?',
          answer: 'Se você passa mais de 3 horas por dia diante de computadores, smartphones ou televisores, o filtro de luz azul alivia a fadiga ocular, previne olhos secos e melhora a qualidade do sono.',
          category: 'Saúde Ocular',
        },
      ],
    },
    footer: {
      newsletterTitle: 'Receba 15% de desconto na sua primeira armação boutique',
      newsletterSubtitle: 'Cadastre-se no nosso boletim de saúde visual e lançamentos exclusivos.',
      emailPlaceholder: 'Digite seu e-mail',
      subscribeBtn: 'Inscrever-se',
      subscribedMsg: 'Inscrição realizada com sucesso!',
      bioText: 'Especialistas em saúde visual, optometria computadorizada de alta tecnologia e armações de design boutique. Cuidamos do seu olhar com precisão clínica e elegância.',
      navHeader: 'Navegação',
      treatmentsHeader: 'Tratamentos Ópticos',
      treatments: [
        'Exame Computadorizado 100% Digital',
        'Filtro Blue Block para Telas e Monitores',
        'Lentes Antirreflexo Crizal HD',
        'Lentes Multifocais de Alta Precisão',
        'Adaptação de Lentes de Contato',
      ],
      contactHeader: 'Contato & Horários',
      mainAddress: 'Av. Paulista #450, Jardins, São Paulo (Unidade Principal)',
      scheduleLabel: 'Segunda a Sábado:',
      scheduleDays: 'Segunda a Sábado:',
      scheduleHours: '8:00 às 19:30 (Sáb: até 17:00)',
      scheduleSunday: 'Domingos: Esterilização clínica e descanso',
      copyrightText: '© 2026 Blick Optic. Todos os direitos reservados. Registro Profissional #7894210.',
      scrollTop: 'Subir',
    },
    whatsapp: {
      onlineStatus: 'Online • Especialistas disponíveis',
      onlineStatusLabel: 'Online',
      typingStatus: 'A digitar...',
      optometristRole: 'Atendimento ao Paciente',
      morningGreeting: 'Bom dia! ☀️',
      afternoonGreeting: 'Boa tarde! 🌤️',
      nightGreeting: 'Boa noite! 🌙',
      morningSubtext: 'Equipe óptica pronta para atendê-lo',
      afternoonSubtext: 'Optometristas em consulta e suporte ativo',
      nightSubtext: 'Responderemos no primeiro horário ou agende online',
      morningBadge: 'Turno da Manhã',
      afternoonBadge: 'Turno da Tarde',
      nightBadge: 'Atendimento 24/7',
      quickHelpTitle: 'Perguntas rápidas do momento:',
      currentScheduleLabel: 'Horário atual',
      morningQuestions: [
        'Bom dia, vocês têm horário disponível para hoje?',
        'Bom dia, a que horas abrem as unidades hoje?',
        'Bom dia, quero fazer um orçamento de armação com filtro azul',
        'Bom dia, quanto tempo leva para entregar meus óculos?',
      ],
      afternoonQuestions: [
        'Boa tarde, há disponibilidade para exame de vista hoje?',
        'Boa tarde, posso passar hoje para experimentar armações?',
        'Boa tarde, quanto custa uma armação com lentes antirreflexo HD?',
        'Boa tarde, há promoções ativas em lentes multifocais?',
      ],
      nightQuestions: [
        'Boa noite, posso agendar meu exame de vista para amanhã?',
        'Boa noite, gostaria de cotar lentes Transitions inteligentes',
        'Boa noite, qual é o horário de atendimento neste fim de semana?',
        'Boa noite, como posso enviar minha receita oftalmológica?',
      ],
      quickQuestions: [
        '🗓️ Desejo agendar um exame de vista',
        '👓 Perguntar sobre modelos de armações disponíveis',
        '💻 Informações sobre lentes Blue Block para telas',
        '📍 Consultar endereços e horários das unidades',
      ],
      customPlaceholder: 'Digite sua mensagem...',
      sendBtn: 'Enviar mensagem',
      openChatBtn: 'Iniciar conversa no WhatsApp',
      tooltipText: 'Dúvidas? Fale com um optometrista 👓',
    },
  },

  // ========================== FRANÇAIS ==========================
  fr: {
    seo: {
      title: 'Blick Optic | Laboratoire Optique Numérique à Mexico',
      description: 'Réservez votre examen de la vue informatisé. Montures de créateurs avec verres inclus et livraison en 24h. Visitez-nous à Paseo de la Reforma, CDMX.',
      keywords: 'opticien cdmx, examen de la vue gratuit, lunettes de vue, verres antireflets, montures de créateurs, blick optic, lumière bleue',
      ogImageAlt: 'Intérieur de la Boutique Blick Optic à Mexico',
    },
    common: {
      bookAppointment: 'Prendre Rendez-vous',
      viewCatalog: 'Voir le Catalogue',
      scheduleOnline: 'Réserver en Ligne',
      callNow: 'Appelez-nous',
      verifiedPatient: 'Patient Vérifié',
      freeExamBadge: 'Examen Offert',
      oneYearWarranty: 'Garantie 1 an',
      graduation24h: 'Montage en 24h',
      digitalExam100: 'Examen 100% digital',
      satisfactionScore: '4.9 / 5.0',
      patientsCount: '+18 500 patients',
      close: 'Fermer',
      send: 'Envoyer',
      submitting: 'Traitement...',
      allRightsReserved: 'Tous droits réservés. Licence Optométrique Professionnelle #7894210.',
      backToTop: 'Haut',
      includedLenses: 'Verres correcteurs inclus',
      reviews: 'avis',
      color: 'Couleur',
      material: 'Matériau',
      shape: 'Forme',
      price: 'Prix',
      freeWithFrames: 'OFFERT pour tout achat de monture ou verres',
    },
    navbar: {
      topBarSchedule: 'Du Lundi au Samedi : 9h00 – 19h30',
      topBarLocation: 'Boutique Optique & Laboratoire Digital',
      topBarPromo: 'Examen de Vue Informatisé Offert',
      home: 'Accueil',
      services: 'Services',
      catalog: 'Catalogue',
      technology: 'Technologie',
      boutique: 'Boutique',
      reviews: 'Avis',
      contact: 'Contact',
      bookAppointment: 'Prendre RDV',
      selectLanguage: 'Langue',
    },
    hero: {
      badge: 'Boutique Optique & Laboratoire Numérique • Plus de 15 ans d’excellence',
      titlePart1: 'Une santé visuelle de haute précision avec le',
      titleAccent: 'design et l’élégance',
      titlePart2: 'que vous méritez',
      subtitle: 'Examens de vue informatisés avec une précision micrométrique, prise en charge sur-mesure par des optométristes certifiés et une sélection exclusive de plus de 1 200 montures de créateurs et marques internationales.',
      check1: 'Examen 100% digital',
      check2: 'Garantie 1 an',
      check3: 'Montage en 24h',
      ctaPrimary: 'Prendre RDV (Examen Offert)',
      ctaSecondary: 'Explorer le Catalogue',
      ratingScore: '4.9 / 5.0',
      patientsTrust: 'Plus de 18 500 patients avec une vision 20/20',
      cardSeason: 'Collection Nouvelle Saison',
      cardTitle: 'Verres Blue Block Pro HD',
      cardSpecs: '100% Anti-reflet + Filtre UV400',
      cardTag: 'Certifié ISO 9001',
    },
    services: {
      badge: 'Nos Services Spécialisés',
      title: 'Des solutions optiques complètes pour votre bien-être visuel',
      subtitle: 'Nous allions technologies de diagnostic numérique de pointe, ateliers de surfaçage intégrés et conseil morphologique personnalisé.',
      freeTag: 'Examen de vue offert avec vos montures !',
      equipmentLabel: 'Équipement',
      durationLabel: 'Durée estimée',
      bookExamBtn: 'Prendre Rendez-vous',
      viewCatalogBtn: 'Voir le Catalogue de Montures',
      items: [
        {
          id: 'examen-computarizado',
          title: 'Examen de Vue Informatisé & Médical',
          tagline: 'Diagnostic 100% numérique de haute précision',
          description: 'Évaluation clinique complète de l’acuité visuelle avec réfractomètre digital de dernière génération, biomicroscopie et phoroptère informatisé. Détection de la myopie, astigmatisme, hypermétropie et presbytie en moins de 20 minutes.',
          benefits: [
            'Sans frais à l’achat de vos montures ou verres correcteurs',
            'Prise en charge par des Optométristes diplômés d’État',
            'Diagnostic de fatigue oculaire causée par les écrans',
            'Test de champ visuel et perception des contrastes',
          ],
          equipment: 'Réfractomètre Topcon KR-800 & Lampe à Fente Numérique',
          duration: '20-25 minutes',
          isFree: true,
        },
        {
          id: 'stock-lentes',
          title: 'Vaste Collection de Montures Optiques & Solaires',
          tagline: 'Plus de 1 200 modèles de marques internationales de prestige',
          description: 'Collections exclusives en titane pur, acétate de cellulose italien, TR90 ultra-souple et acier chirurgical. Équipées de verres anti-reflets haute performance (Crizal, Blue Defense, Transitions Gen 8 et Progressifs Numériques).',
          benefits: [
            'Garantie d’adaptation et de prescription pendant 12 mois',
            'Filtration de la lumière bleue et protection 100% UV400 certifiée',
            'Verres amincis haute indice pour fortes corrections',
            'Grandes maisons : Ray-Ban, Oakley, Carrera, et créateurs indépendants',
          ],
          equipment: 'Atelier de meulage numérique Essilor Delta 200',
          duration: 'Livraison en 24 à 48 heures',
          isFree: false,
        },
        {
          id: 'lentes-contacto-asesoria',
          title: 'Adaptation de Lentilles de Contact & Conseil Visagisme',
          tagline: 'Confort optimal et monture en parfaite harmonie avec votre visage',
          description: 'Essai d’adaptation sur-mesure pour lentilles souples sphériques, toriques (astigmatisme) et multifocales (Acuvue, Air Optix, Biofinity). Nos experts visagistes vous guident vers la forme idéale selon vos traits.',
          benefits: [
            'Kit d’essai découverte avec solution d’entretien incluse',
            'Apprentissage pas à pas de la pose et de l’hygiène de retrait',
            'Analyse visagiste morphologique (visages ovales, ronds, angulaires)',
            'Lentilles en silicone hydrogel haute perméabilité à l’oxygène',
          ],
          equipment: 'Kératométrie & Topographie Cornéenne Numérique',
          duration: '30 minutes',
          isFree: false,
        },
      ],
    },
    catalog: {
      badge: 'Collection Boutique 2026',
      title: 'Montures de créateurs alliant raffinement et robustesse',
      subtitle: 'Découvrez nos collections sélectionnées : du titane ultra-léger et de l’acétate italien jusqu’aux montures de sport à mémoire de forme et modèles enfant incassables.',
      includesNotice: 'Comprend étui rigide de luxe + chamoisine en microfibre',
      categories: {
        todos: 'Toutes les Montures',
        clasicos: 'Classiques & Executives',
        deportivos: 'Sport & Flexibles',
        sol: 'Solaires UV400',
        infantiles: 'Enfants & Ados',
      },
      modal: {
        quickBook: 'Réservez cette monture pour votre examen en boutique',
        detailsTitle: 'Caractéristiques Techniques',
        benefitsTitle: 'Avantages du Produit',
        includedTitle: 'Inclus dans votre coffret',
        reserveFrameBtn: 'Prendre RDV pour Essayer ce Modèle',
        askWhatsApp: 'Demander des renseignements sur WhatsApp',
        inStock: 'Disponible en boutique pour essai immédiat',
        deliveryHours: 'Montage de vos verres en 24 à 48 heures',
      },
      products: [
        {
          id: 'frame-01',
          name: 'Milano Executive Titanium',
          brand: 'Aura Premium',
          category: 'clasicos',
          categoryName: 'Classiques & Executives',
          badge: 'Meilleure Vente',
          material: 'Titane Pur Ultra-Léger (12g)',
          shape: 'Rectangulaire épuré',
          description: 'Design intemporel et luxueux en titane aérospatial. Charnières flexibles à ressort sans vis et plaquettes nasales en silicone médical hypoallergénique.',
          features: ['Poids plume : seulement 12 grammes', 'Résistance absolue à la corrosion', 'Étui rigide et microfibre inclus'],
          lensTypeIncluded: 'Verres correcteurs anti-reflets inclus',
        },
        {
          id: 'frame-02',
          name: 'Oxford Classic Havana',
          brand: 'Blick Optic Signature',
          category: 'clasicos',
          categoryName: 'Classiques & Executives',
          badge: 'Élégance Intemporelle',
          material: 'Acétate de Cellulose Italien Poli Main',
          shape: 'Panto / Rond adouci',
          description: 'Monture en acétate fait main avec finition écaille havane. Un grand classique raffiné apportant distinction et assurance au bureau comme en soirée.',
          features: ['Armature métallique interne renforcée', 'Finition lustrée artisanale haute brillance', 'Compatible avec toutes corrections'],
          lensTypeIncluded: 'Verres avec traitement anti-reflet hydrophobe',
        },
        {
          id: 'frame-03',
          name: 'AeroFlex Pro TR90',
          brand: 'ActiveTech Optics',
          category: 'deportivos',
          categoryName: 'Sport & Flexibles',
          badge: 'Ultra Résistant',
          material: 'Polymère TR90 à mémoire thermique',
          shape: 'Semi-enveloppant ergonomique',
          description: 'Structure ultra-flexible absorbant les chocs sans se déformer. Manchons en caoutchouc hydrophile assurant une tenue parfaite lors d’efforts intenses.',
          features: ['Adhérence anti-glisse résistante à la transpiration', 'Flexibilité à 180° sans rupture', 'Canaux de ventilation anti-buée'],
          lensTypeIncluded: 'Verres en polycarbonate haute résistance aux impacts',
        },
        {
          id: 'frame-04',
          name: 'Vortex Sport Carbon',
          brand: 'ActiveTech Optics',
          category: 'deportivos',
          categoryName: 'Sport & Flexibles',
          badge: 'Technologie Carbone',
          material: 'Fibre de carbone et élastomère',
          shape: 'Carré athlétique dynamique',
          description: 'Branches avec insert en fibre de carbone ultra-légère. Stabilité maximale pour coureurs, joueurs de tennis, padel et activités dynamiques.',
          features: ['Branches micro-ajustables 3D', 'Poids : 15g', 'Traitement antibuée'],
          lensTypeIncluded: 'Verres polarisés en polycarbonate',
        },
        {
          id: 'frame-05',
          name: 'Riviera Sun Polarized UV400',
          brand: 'Soleil Italia',
          category: 'sol',
          categoryName: 'Solaires UV400',
          badge: 'Protection Totale UV',
          material: 'Acétate Mazzucchelli & Charnières dorées',
          shape: 'Aviateur Moderne Carré',
          description: 'Verres solaires polarisés haute définition. Suppriment 99,9% des reflets gênants sur route, eau et asphalte pour un confort visuel reposant.',
          features: ['Filtre Polarisé HD Triacétate', 'Protection 100% UVA et UVB', 'Adaptable à votre vue'],
          lensTypeIncluded: 'Verres solaires polarisés Cat. 3',
        },
        {
          id: 'frame-06',
          name: 'Copacabana Retro Chic',
          brand: 'Soleil Italia',
          category: 'sol',
          categoryName: 'Solaires UV400',
          badge: 'Tendance 2026',
          material: 'Bio-Acétate écologique',
          shape: 'Papillon doux / Ovale',
          description: 'Allure glamour associée à une protection solaire d’exception. Dégradé ambré et gris garantissant une vision claire par temps ensoleillé ou voilé.',
          features: ['Dégradé de teinte optique HD', 'Structure légère et hypoallergénique', 'Garantie de monture de 1 an'],
          lensTypeIncluded: 'Verres solaires dégradés UV400',
        },
        {
          id: 'frame-07',
          name: 'Kids Wonder Incassable',
          brand: 'Junior Vision',
          category: 'infantiles',
          categoryName: 'Enfants & Ados',
          badge: '100% Incassable',
          material: 'Siliflex élastique non toxique (Sans BPA)',
          shape: 'Rond ergonomique enfant',
          description: 'Conçues spécialement pour les enfants de 3 à 12 ans. Flexibles à 360°, sans pièces métalliques tranchantes et avec cordon de maintien réglable fourni.',
          features: ['Cordon élastique sécurisé pour le jeu', 'Zéro composant métallique blessant', 'Coloris gais et lumineux'],
          lensTypeIncluded: 'Verres en polycarbonate anti-rayures',
        },
        {
          id: 'frame-08',
          name: 'Teen Studio Cool',
          brand: 'Junior Vision',
          category: 'infantiles',
          categoryName: 'Enfants & Ados',
          badge: 'Lumière Bleue Écrans',
          material: 'Acétate jeune ultra-léger',
          shape: 'Géométrique contemporain',
          description: 'Idéal pour collégiens, lycéens et étudiants. Protège les yeux durant les longues heures d’étude, d’ordinateur, de tablette et de jeux vidéo.',
          features: ['Filtre Blue Protect pour écrans', 'Pont nasal auto-ajustable', 'Design tendance et ergonomique'],
          lensTypeIncluded: 'Verres avec filtre Blue Light Defense',
        },
      ],
    },
    lensTech: {
      badge: 'Simulateur de Verres & Technologie Optique',
      title: 'Comment nos traitements de verres subliment votre vue ?',
      subtitle: 'Comparez en direct la différence entre un verre standard et nos filtres optiques haute définition certifiés.',
      selectLabel: 'Sélectionnez un traitement pour simuler l’effet :',
      filters: {
        normal: {
          title: 'Verre Standard Non Traité',
          desc: 'Exposé aux reflets parasites, éblouissements et à la fatigue de la lumière bleue.',
          badge: 'Standard',
          visualStatus: 'Aucun traitement actif',
          visualDesc: 'Reflets intenses et fatigue oculaire accrue devant les écrans.',
        },
        blue: {
          title: 'Blue Block Pro HD',
          desc: 'Filtre la lumière nocive des ordinateurs et smartphones. Prévient les yeux rouges et la fatigue.',
          badge: 'Recommandé',
          visualStatus: 'Filtre Bleu Actif : 99% de blocage UV & Lumière Bleue',
          visualDesc: 'Contraste renforcé, soulagement visuel immédiat et meilleur sommeil.',
        },
        antiglare: {
          title: 'Anti-Reflet Hydrophobe HD',
          desc: 'Élimine l’éblouissement des phares en conduite nocturne et repousse l’eau et les traces.',
          badge: 'Clarté Maximale',
          visualStatus: 'Traitement Anti-reflet Multicouches Actif',
          visualDesc: 'Zéro halo d’éblouissement la nuit et translucidité cristalline de 99,7%.',
        },
        photochromic: {
          title: 'Transitions Gen 8 Intelligent',
          desc: 'Verres adaptatifs qui s’assombrissent instantanément au soleil et redeviennent clairs en intérieur.',
          badge: '2 en 1 Vue + Solaire',
          visualStatus: 'Activation Solaire Intelligente (Clair en Intérieur / Foncé Dehors)',
          visualDesc: 'Protection UV totale en extérieur et repos visuel complet en intérieur.',
        },
      },
      comparisonNotice: 'Démonstration interactive basée sur des normes ophtalmiques certifiées',
      featuresList: [
        {
          name: 'Blue Block Digital',
          desc: 'Bloque 99% de la lumière bleue artificielle émise par les écrans et lampes LED.',
          tag: 'Idéal pour le travail sur écran et le télétravail',
        },
        {
          name: 'Anti-Reflet Hydrophobe',
          desc: 'Repousse l’eau, la poussière et les traces. Vision nocturne nette et sans reflets.',
          tag: 'Clarté visuelle optimale',
        },
        {
          name: 'Transitions Gen 8 Photochromique',
          desc: 'Verres intelligents s’assombrissant en quelques secondes au soleil et s’éclaircissant en intérieur.',
          tag: '2 en 1 : Vue & Solaire',
        },
        {
          name: 'Progressifs HD Numériques',
          desc: 'Vision nette à toutes les distances (près, intermédiaire et loin) sans démarcation visible.',
          tag: 'Technologie haute précision pour la presbytie',
        },
      ],
    },
    about: {
      badge: 'À Propos de Blick Optic',
      title: 'Passion pour la santé de vos yeux, engagement pour votre confort',
      p1: 'Notre mission : démocratiser l’accès aux soins visuels de haute technologie sans jamais sacrifier le design ni la bienveillance humaine. Chez Blick Optic, nous considérons que vos lunettes sont bien plus qu’un dispositif médical—elles font partie intégrante de votre personnalité et de votre bien-être quotidien.',
      p2: 'Chaque patient bénéficie d’un bilan visuel approfondi réalisé avec des équipements informatisés de précision et des verres certifiés internationalement, assurant une vision parfaite et un repos oculaire durable.',
      yearsExperience: '15+',
      yearsBadgeDesc: 'Années d’Expérience au service de la vue.',
      stats: {
        patients: '+18 000',
        patientsLabel: 'Patients accompagnés',
        branches: '3',
        branchesLabel: 'Boutiques exclusives',
        guarantee: '100%',
        guaranteeLabel: 'Garantie d’adaptation',
      },
      values: [
        {
          title: 'Optométristes Diplômés',
          desc: 'Notre équipe est certifiée et formée en continu aux innovations en santé oculaire et contactologie.',
        },
        {
          title: 'Technologies de Pointe',
          desc: 'Équipements informatisés de diagnostic digital pour des corrections sur-mesure d’une précision absolue.',
        },
        {
          title: 'Garantie Totale d’Adaptation',
          desc: 'Si vous ressentez une gêne quelconque dans les 30 premiers jours, nous réajustons vos verres sans frais.',
        },
        {
          title: 'Conseil Sur-Mesure',
          desc: 'Un accompagnement chaleureux et attentif pour trouver la monture qui s’harmonise à vos traits et à votre mode de vie.',
        },
      ],
      protocolTitle: 'Notre Protocole Clinique en 4 Étapes',
      protocolSubtitle: 'Une démarche médicale sereine, transparente et rigoureuse',
      steps: [
        { num: '01', title: 'Entretien Clinique', desc: 'Compréhension de vos habitudes de travail, temps d’écran et antécédents.' },
        { num: '02', title: 'Bilan Digital', desc: 'Mesure informatisée par autoréfractomètre et biomicroscopie oculaire.' },
        { num: '03', title: 'Réfraction de Précision', desc: 'Test d’acuité avec phoroptère et verres d’essai pour une netteté 20/20.' },
        { num: '04', title: 'Choix & Livraison', desc: 'Conseil visagiste personnalisé et meulage express de vos verres en 24h.' },
      ],
    },
    appointment: {
      badge: 'Prise de Rendez-vous Immédiate',
      title: 'Réservez votre examen de vue sans file d’attente',
      subtitle: 'Sélectionnez votre créneau dans l’une de nos 3 boutiques. Nous confirmerons votre rendez-vous en quelques minutes par WhatsApp ou e-mail.',
      benefit1Title: 'Accueil ponctuel et prioritaire',
      benefit1Desc: 'Zéro attente ; votre espace de consultation est prêt dès votre arrivée.',
      benefit2Title: 'Examen offert avec votre monture',
      benefit2Desc: 'Bilan de vue informatisé complet sans frais de consultation.',
      benefit3Title: 'Confidentialité médicale garantie',
      benefit3Desc: 'Vos données de santé visuelle sont protégées selon les normes médicales.',
      branchesHeader: 'Nos 3 Boutiques :',
      mainBadge: 'Principale',
      formTitle: 'Formulaire de Rendez-vous',
      formSubtitle: 'Renseignez vos coordonnées pour valider la disponibilité de votre praticien.',
      fullNameLabel: 'Nom & Prénom *',
      fullNamePlaceholder: 'Ex. Claire Dupont',
      phoneLabel: 'Téléphone / WhatsApp *',
      phonePlaceholder: '+33 6 12 34 56 78',
      emailLabel: 'Adresse E-mail *',
      emailPlaceholder: 'votre.email@exemple.com',
      branchLabel: 'Boutique Souhaitée *',
      serviceLabel: 'Prestation Demandée *',
      servicesOptions: [
        'Examen de Vue Informatisé (Offert avec monture)',
        'Contrôle de la Vue & Choix de Montures',
        'Adaptation & Essai de Lentilles de Contact',
        'Lunettes de Soleil à la Vue / Polarisées',
        'Consultation Enfants & Pédopsychologie visuelle',
        'Ajustage & Nettoyage aux Ultrasons',
      ],
      dateLabel: 'Date Souhaitée *',
      timeSlotLabel: 'Créneau Horaire *',
      notesLabel: 'Symptômes ou Remarques (Facultatif)',
      notesPlaceholder: 'Ex. Je travaille 8h/jour sur ordinateur, maux de tête en fin de journée...',
      submitBtn: 'Confirmer Mon Rendez-vous',
      submittingBtn: 'Vérification des disponibilités...',
      securityNote: '🔒 Vos informations sont 100% sécurisées. Nous n’envoyons aucun spam.',
      successTitle: 'Rendez-vous Confirmé avec Succès !',
      successSubtitle: 'Nous nous réjouissons de vous accueillir dans la boutique sélectionnée.',
      folioLabel: 'Numéro de réservation :',
      confirmWhatsAppBtn: 'Confirmer sur WhatsApp maintenant',
      branchesData: [
        {
          id: 'sucursal-centro',
          name: 'Boutique Centrale Médicale',
          address: '450 Avenue des Champs-Élysées',
          city: 'Centre',
          scheduleWeek: 'Du Lundi au Vendredi : 8h00 – 19h30',
          scheduleSat: 'Samedi : 9h00 – 17h00',
          isMain: true,
        },
        {
          id: 'sucursal-plaza',
          name: 'Boutique Plaza Opéra',
          address: 'Centre Commercial Plaza, Local L-104 (1er étage)',
          city: 'Quartier Opéra',
          scheduleWeek: 'Du Lundi au Vendredi : 10h00 – 20h00',
          scheduleSat: 'Samedi : 10h00 – 19h00',
          isMain: false,
        },
        {
          id: 'sucursal-galerias',
          name: 'Boutique Galeries Nord',
          address: '1280 Boulevard Nord, Bâtiment 3B',
          city: 'Quartier Nord',
          scheduleWeek: 'Du Lundi au Vendredi : 9h00 – 19h00',
          scheduleSat: 'Samedi : 9h00 – 16h00',
          isMain: false,
        },
      ],
    },
    testimonials: {
      badge: 'Témoignages de Patients',
      title: 'Ce qu’expriment ceux qui ont retrouvé une vision parfaite',
      subtitle: 'Plus de 98% de nos patients nous recommandent pour notre ponctualité, notre technologie et notre garantie.',
      items: [
        {
          id: 't-1',
          name: 'Dr. Mariana Cordero',
          role: 'Médecin Pédiatre',
          comment: 'Je confie ma vue à Blick Optic depuis 4 ans. L’examen informatisé est d’une rigueur remarquable, et les verres Blue Block ont fait disparaître mes maux de tête après de longues journées devant l’écran.',
          branch: 'Boutique Centrale Médicale',
        },
        {
          id: 't-2',
          name: 'Carlos Mendoza Ruiz',
          role: 'Architecte & Designer',
          comment: 'Un accueil irréprochable et des conseils visagistes exceptionnels. Ils m’ont orienté vers une monture en titane parfaitement adaptée à mon visage. Lunettes prêtes en moins de 24 heures !',
          branch: 'Boutique Plaza Opéra',
        },
        {
          id: 't-3',
          name: 'Valeria & Mateo Sánchez',
          role: 'Mère de Famille',
          comment: 'J’ai choisi les montures incassables pour mon fils de 6 ans. Elles sont tombées des dizaines de fois en jouant et restent comme neuves. La patience de l’optométriste a été formidable.',
          branch: 'Boutique Galeries Nord',
        },
      ],
      faqBadge: 'Questions Fréquentes',
      faqTitle: 'Toutes les réponses à vos questions de santé visuelle',
      faqs: [
        {
          id: 'faq-1',
          question: 'L’examen de la vue est-il payant ?',
          answer: 'Notre examen de vue informatisé complet est 100% OFFERT lors de l’achat de votre monture ou de vos verres correcteurs. Si vous souhaitez uniquement une ordonnance imprimée sans achat d’équipement, une participation forfaitaire de 15 € s’applique.',
          category: 'Examens',
        },
        {
          id: 'faq-2',
          question: 'Quel est le délai de livraison de mes lunettes ?',
          answer: 'Grâce à notre laboratoire de surfaçage numérique intégré, 85% des corrections unifocales standards sont montées et livrées en 24 heures seulement. Les verres spéciaux (forts indices, progressifs personnalisés ou photochromiques) demandent 48 à 72 heures ouvrées.',
          category: 'Délais',
        },
        {
          id: 'faq-3',
          question: 'Quelles sont les garanties sur les montures et verres ?',
          answer: 'Nous offrons une garantie constructeur de 12 mois sur toutes nos montures, ainsi qu’une garantie totale d’adaptation de 30 jours sur vos verres correcteurs.',
          category: 'Garanties',
        },
        {
          id: 'faq-4',
          question: 'Puis-je apporter ma propre monture pour changer uniquement les verres ?',
          answer: 'Absolument ! Vous pouvez apporter votre monture préférée dans n’importe laquelle de nos boutiques. Nos spécialistes vérifieront son état et y monteront vos nouveaux verres.',
          category: 'Services',
        },
        {
          id: 'faq-5',
          question: 'Comment savoir si j’ai besoin d’un filtre anti-lumière bleue ?',
          answer: 'Si vous passez plus de 3 heures par jour devant un écran d’ordinateur, un smartphone ou une télévision, le filtre Blue Block réduit la fatigue visuelle, prévient la sécheresse oculaire et favorise un meilleur endormissement.',
          category: 'Santé Visuelle',
        },
      ],
    },
    footer: {
      newsletterTitle: 'Bénéficiez de 15% de réduction sur votre première monture',
      newsletterSubtitle: 'Abonnez-vous à nos conseils de santé visuelle et découvrez nos collections privées.',
      emailPlaceholder: 'Saisissez votre adresse e-mail',
      subscribeBtn: 'S’inscrire',
      subscribedMsg: 'Inscription confirmée avec succès !',
      bioText: 'Spécialistes en santé visuelle, optométrie numérique de pointe et montures d’exception. Nous prenons soin de votre regard avec rigueur clinique et raffinement.',
      navHeader: 'Navigation',
      treatmentsHeader: 'Traitements Optiques',
      treatments: [
        'Examen de Vue Informatisé 100% Numérique',
        'Filtre Blue Block Écrans & Ordinateurs',
        'Verres Anti-Reflets Crizal Haute Définition',
        'Verres Progressifs de Haute Précision',
        'Adaptation de Lentilles de Contact',
      ],
      contactHeader: 'Contact & Horaires',
      mainAddress: '450 Avenue des Champs-Élysées, 75008 Paris (Boutique Principale)',
      scheduleLabel: 'Du Lundi au Samedi :',
      scheduleDays: 'Du Lundi au Samedi :',
      scheduleHours: '8h00 – 19h30 (Sam : jusqu’à 17h00)',
      scheduleSunday: 'Dimanche : Stérilisation clinique & repos',
      copyrightText: '© 2026 Blick Optic. Tous droits réservés. Licence Professionnelle #7894210.',
      scrollTop: 'Haut',
    },
    whatsapp: {
      onlineStatus: 'En ligne • Conseillers disponibles',
      onlineStatusLabel: 'En ligne',
      typingStatus: 'En train d’écrire...',
      optometristRole: 'Service Patientèle & Conseil',
      morningGreeting: 'Bonjour ! ☀️',
      afternoonGreeting: 'Bonjour ! 🌤️',
      nightGreeting: 'Bonsoir ! 🌙',
      morningSubtext: 'Équipe optique prête à vous accueillir',
      afternoonSubtext: 'Optométristes en consultation et conseil actif',
      nightSubtext: 'Réponse dès l’ouverture demain matin ou réservez en ligne',
      morningBadge: 'Service Matin',
      afternoonBadge: 'Service Après-midi',
      nightBadge: 'Service 24/7',
      quickHelpTitle: 'Questions rapides du moment :',
      currentScheduleLabel: 'Horaires actuels',
      morningQuestions: [
        'Bonjour, avez-vous des disponibilités pour aujourd’hui ?',
        'Bonjour, à quelle heure ouvrent vos boutiques aujourd’hui ?',
        'Bonjour, je souhaite un devis pour une monture avec filtre anti-lumière bleue',
        'Bonjour, quel est le délai de livraison pour mes lunettes ?',
      ],
      afternoonQuestions: [
        'Bonjour, avez-vous de la disponibilité pour un examen de vue cet après-midi ?',
        'Bonjour, puis-je passer aujourd’hui pour essayer des montures ?',
        'Bonjour, combien coûte une monture avec verres anti-reflets HD ?',
        'Bonjour, avez-vous des offres en cours sur les verres progressifs ?',
      ],
      nightQuestions: [
        'Bonsoir, puis-je réserver mon examen de la vue pour demain ?',
        'Bonsoir, je souhaite un devis pour des verres Transitions photochromiques',
        'Bonsoir, quels sont vos horaires pour ce week-end ?',
        'Bonsoir, comment puis-je vous transmettre mon ordonnance médicale ?',
      ],
      quickQuestions: [
        '🗓️ Je souhaite réserver un examen de vue',
        '👓 Renseignements sur les montures disponibles',
        '💻 Informations sur les verres anti-lumière bleue',
        '📍 Horaires et adresses de nos boutiques',
      ],
      customPlaceholder: 'Rédigez votre message...',
      sendBtn: 'Envoyer le message',
      openChatBtn: 'Ouvrir la conversation sur WhatsApp',
      tooltipText: 'Une question ? Échangez avec un optométriste 👓',
    },
  },
};
