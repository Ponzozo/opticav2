import { ServiceItem, FrameProduct, Branch, Testimonial, FAQItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'examen-computarizado',
    title: 'Examen de la Vista Computarizado y Profesional',
    tagline: 'Diagnóstico 100% digital de alta precisión',
    description: 'Evaluación integral de agudeza visual con autorrefractómetro digital de última generación, biomicroscopía y foróptero computarizado. Detectamos miopía, astigmatismo, hipermetropía, presbicia y salud ocular en menos de 20 minutos.',
    iconName: 'Eye',
    benefits: [
      'Sin costo al adquirir tus armazones o micas',
      'Atención por Licenciados en Optometría certificados',
      'Diagnóstico de fatiga visual por pantallas digitales',
      'Prueba de campo visual y agudeza cromática'
    ],
    equipment: 'Autorrefractómetro Topcon KR-800 & Lámpara de Hendidura Digital',
    duration: '20-25 minutos',
    isFree: true,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'stock-lentes',
    title: 'Amplio Stock de Lentes Oftálmicos y de Sol',
    tagline: 'Más de 1,200 modelos de marcas internacionales',
    description: 'Colecciones exclusivas en titanio, acetato italiano, TR90 ultraliviano y acero quirúrgico. Trabajamos con micas antirreflejantes de alta gama (Crizal, Blue Defense, Fotocromáticas Transitions Gen 8 y Progresivas Digitales).',
    iconName: 'Glasses',
    benefits: [
      'Garantía de adaptación y graduación por 12 meses',
      'Filtro de luz azul y protección 100% UV400 certificada',
      'Micas de alto índice (ultra delgadas) para altas graduaciones',
      'Monturas de marcas líderes como Ray-Ban, Oakley, Carrera y más'
    ],
    equipment: 'Laboratorio de biselado computarizado Essilor Delta 200',
    duration: 'Entrega en 24 a 48 horas',
    isFree: false,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lentes-contacto-asesoria',
    title: 'Adaptación de Lentes de Contacto y Asesoría de Imagen',
    tagline: 'Confort diario y el armazón perfecto para tu rostro',
    description: 'Prueba de adaptación personalizada para lentes de contacto esféricos, tóricos (astigmatismo) y multifocales (Acuvue, Air Optix, Biofinity). Además, nuestros asesores visagistas te recomiendan el armazón ideal según la forma de tu rostro.',
    iconName: 'Sparkles',
    benefits: [
      'Kit de prueba inicial con solución limpiadora incluida',
      'Entrenamiento paso a paso para colocar y retirar tus lentes',
      'Análisis visagista (rostro ovalado, redondo, cuadrado, diamante)',
      'Lentes de contacto de hidrogel de silicona de máxima oxigenación'
    ],
    equipment: 'Queratometría y Topografía Corneal',
    duration: '30 minutos',
    isFree: false,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  }
];

export const FEATURED_FRAMES: FrameProduct[] = [
  // 1. CLASICOS
  {
    id: 'frame-01',
    name: 'Milano Executive Titanium',
    brand: 'Aura Premium',
    category: 'clasicos',
    categoryName: 'Clásicos & Ejecutivos',
    price: 89,
    originalPrice: 120,
    badge: 'Más Vendido',
    rating: 4.9,
    reviewCount: 142,
    material: 'Titanio Puro Ultraligero (12g)',
    shape: 'Rectangular estilizado',
    colors: ['#1e293b', '#64748b', '#b45309'],
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=700&q=80',
    description: 'Diseño elegante y atemporal fabricado en titanio aeroespacial. Bisagras flexibles de resorte sin tornillos y plaquetas nasales de silicona médica antideslizante.',
    features: ['Peso pluma: 12 gramos', 'Resistente a la corrosión', 'Incluye estuche rígido y microfibra'],
    lensTypeIncluded: 'Micas antirreflejantes graduadas incluidas'
  },
  {
    id: 'frame-02',
    name: 'Oxford Classic Havana',
    brand: 'Blick Optic Signature',
    category: 'clasicos',
    categoryName: 'Clásicos & Ejecutivos',
    price: 75,
    originalPrice: 95,
    badge: 'Elegancia Atemporal',
    rating: 4.8,
    reviewCount: 98,
    material: 'Acetato de Celulosa Italiano',
    shape: 'Panto / Redondo suave',
    colors: ['#451a03', '#0f172a', '#3f3f46'],
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=700&q=80',
    description: 'Armazón de acetato pulido a mano con acabado carey habana. Un clásico refinado que proyecta confianza tanto en la oficina como en ocasiones formales.',
    features: ['Alma metálica interna reforzada', 'Acabado brillante pulido artesanal', 'Apto para todo tipo de graduaciones'],
    lensTypeIncluded: 'Micas con filtro antireflejo hidrofóbico'
  },

  // 2. DEPORTIVOS
  {
    id: 'frame-03',
    name: 'AeroFlex Pro TR90',
    brand: 'ActiveTech Optics',
    category: 'deportivos',
    categoryName: 'Deportivos & Flexibles',
    price: 85,
    originalPrice: 110,
    badge: 'Ultra Resistente',
    rating: 4.9,
    reviewCount: 164,
    material: 'Polímero TR90 con memoria térmica',
    shape: 'Semi-envolvente ergonómico',
    colors: ['#0284c7', '#1e293b', '#dc2626'],
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=700&q=80',
    description: 'Estructura flexible con memoria que absorbe impactos sin deformarse. Terminales de goma hidrófila que aumentan el agarre al sudar durante el entrenamiento o ciclismo.',
    features: ['Grip antideslizante al sudor', 'Flexibilidad 180° sin romperse', 'Ventilación lateral antifog'],
    lensTypeIncluded: 'Micas de policarbonato alto impacto'
  },
  {
    id: 'frame-04',
    name: 'Vortex Sport Carbon',
    brand: 'ActiveTech Optics',
    category: 'deportivos',
    categoryName: 'Deportivos & Flexibles',
    price: 99,
    originalPrice: 135,
    badge: 'Tecnología Carbono',
    rating: 5.0,
    reviewCount: 76,
    material: 'Fibra de carbono y elastómero',
    shape: 'Cuadrado deportivo dinámico',
    colors: ['#0f172a', '#059669', '#ea580c'],
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=700&q=80',
    description: 'Varillas con inserto de fibra de carbono ultra livianas. Máxima estabilidad para corredores, practicantes de tenis, pádel y deportes de alta movilidad.',
    features: ['Patillas ajustables 3D', 'Peso: 15g', 'Tratamiento anti-empañamiento'],
    lensTypeIncluded: 'Micas polarizadas de policarbonato'
  },

  // 3. LENTES DE SOL
  {
    id: 'frame-05',
    name: 'Riviera Sun Polarized UV400',
    brand: 'Soleil Italia',
    category: 'sol',
    categoryName: 'Lentes de Sol',
    price: 95,
    originalPrice: 130,
    badge: 'Protección Total UV',
    rating: 4.9,
    reviewCount: 210,
    material: 'Acetato Mazzucchelli & Bisagras doradas',
    shape: 'Aviador Moderno Cuadrado',
    colors: ['#0f172a', '#78350f', '#064e3b'],
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80',
    description: 'Lentes solares polarizados con filtro de alta definición. Eliminan el 99.9% de los reflejos en carretera, agua y asfalto, reduciendo la fatiga ocular.',
    features: ['Filtro Polarizado HD Triacetato', 'Protección 100% UVA y UVB', 'Graduable con tu fórmula oftálmica'],
    lensTypeIncluded: 'Micas solares polarizadas Cat. 3'
  },
  {
    id: 'frame-06',
    name: 'Copacabana Retro Chic',
    brand: 'Soleil Italia',
    category: 'sol',
    categoryName: 'Lentes de Sol',
    price: 79,
    originalPrice: 105,
    badge: 'Tendencia 2026',
    rating: 4.8,
    reviewCount: 88,
    material: 'Bio-Acetato ecológico',
    shape: 'Cat-Eye suave / Redondo',
    colors: ['#831843', '#0f172a', '#d97706'],
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=700&q=80',
    description: 'Estilo glamuroso con protección solar premium. Degradado en micas color ámbar y gris que garantizan nitidez en días soleados y nublados.',
    features: ['Gradiente de color óptico', 'Estructura ligera e hipoalergénica', 'Garantía de montura de 1 año'],
    lensTypeIncluded: 'Micas solares degradadas UV400'
  },

  // 4. INFANTILES
  {
    id: 'frame-07',
    name: 'Kids Wonder Irrompible',
    brand: 'Junior Vision',
    category: 'infantiles',
    categoryName: 'Infantiles & Juveniles',
    price: 65,
    originalPrice: 85,
    badge: '100% Irrompible',
    rating: 5.0,
    reviewCount: 189,
    material: 'Siliflex elástico no tóxico (BPA Free)',
    shape: 'Redondo ergonómico para niños',
    colors: ['#2563eb', '#db2777', '#16a34a', '#eab308'],
    image: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=700&q=80',
    description: 'Armazones diseñados especialmente para niños de 3 a 12 años. Flexibles en 360 grados, sin bisagras metálicas que puedan lastimar y con banda elástica ajustable incluida.',
    features: ['Banda elástica de sujeción para juegos', 'Material libre de metales cortantes', 'Colores vivos y divertidos'],
    lensTypeIncluded: 'Micas en Policarbonato antirrayaduras'
  },
  {
    id: 'frame-08',
    name: 'Teen Studio Cool',
    brand: 'Junior Vision',
    category: 'infantiles',
    categoryName: 'Infantiles & Juveniles',
    price: 69,
    originalPrice: 90,
    badge: 'Luz Azul Clases',
    rating: 4.9,
    reviewCount: 115,
    material: 'Acetato juvenil ultraligero',
    shape: 'Geométrico moderno',
    colors: ['#0284c7', '#475569', '#a855f7'],
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=700&q=80',
    description: 'Ideales para estudiantes y adolescentes. Diseñados para proteger sus ojos durante largas sesiones de estudio, computadoras, tablets y videojuegos.',
    features: ['Incluye filtro Blue Protect para pantallas', 'Puente nasal autoajustable', 'Diseño moderno y cómodo'],
    lensTypeIncluded: 'Micas con filtro azul Blue Light Defense'
  }
];

export const BRANCHES: Branch[] = [
  {
    id: 'sucursal-centro',
    name: 'Sucursal Central Médica',
    address: 'Av. Paseo de la Reforma #450, Col. Juárez',
    city: 'Ciudad Central',
    phone: '+52 (55) 5123-4567',
    whatsapp: '+52 55 5123 4567',
    scheduleWeek: 'Lunes a Viernes: 8:00 AM – 7:30 PM',
    scheduleSat: 'Sábados: 9:00 AM – 5:00 PM',
    isMain: true
  },
  {
    id: 'sucursal-plaza',
    name: 'Sucursal Plaza Sol',
    address: 'Centro Comercial Plaza Sol, Local L-104 (Piso 1)',
    city: 'Zona Dorada',
    phone: '+52 (55) 5987-6543',
    whatsapp: '+52 55 5987 6543',
    scheduleWeek: 'Lunes a Viernes: 10:00 AM – 8:00 PM',
    scheduleSat: 'Sábados: 10:00 AM – 7:00 PM',
    isMain: false
  },
  {
    id: 'sucursal-galerias',
    name: 'Sucursal Galerías Norte',
    address: 'Av. Insurgentes Norte #1280, Int. 3B',
    city: 'Zona Norte',
    phone: '+52 (55) 5456-7890',
    whatsapp: '+52 55 5456 7890',
    scheduleWeek: 'Lunes a Viernes: 9:00 AM – 7:00 PM',
    scheduleSat: 'Sábados: 9:00 AM – 4:00 PM',
    isMain: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dra. Mariana Cordero',
    role: 'Médico Pediatra',
    comment: 'Llevo 4 años graduando mis lentes en Blick Optic. El examen computarizado es sumamente minucioso y la calidad de las micas con filtro azul ha reducido notablemente mis dolores de cabeza frente al monitor.',
    rating: 5,
    date: 'Hace 2 semanas',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80',
    verified: true,
    branch: 'Sucursal Central Médica'
  },
  {
    id: 't-2',
    name: 'Carlos Mendoza Ruiz',
    role: 'Arquitecto & Diseñador',
    comment: 'Excelente atención y asesoría visagista. Me ayudaron a elegir un armazón de titanio que va perfecto con mi tipo de rostro. Los lentes estuvieron listos en menos de 24 horas. ¡100% recomendados!',
    rating: 5,
    date: 'Hace 1 mes',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    verified: true,
    branch: 'Sucursal Plaza Sol'
  },
  {
    id: 't-3',
    name: 'Valeria & Mateo Sánchez',
    role: 'Madre de Familia',
    comment: 'Compré los lentes infantiles irrompibles para mi hijo de 6 años. Se le han caído mil veces jugando y siguen impecables. La paciencia del optometrista con los niños fue maravillosa.',
    rating: 5,
    date: 'Hace 3 semanas',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    verified: true,
    branch: 'Sucursal Galerías Norte'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: '¿El examen de la vista tiene algún costo?',
    answer: 'Nuestro examen computarizado profesional es completamente GRATIS al adquirir tus armazones o micas con nosotros. Si únicamente requieres la receta médica impresa para uso externo, tiene un costo simbólico de $15 USD.',
    category: 'Exámenes'
  },
  {
    id: 'faq-2',
    question: '¿Cuánto tiempo tarda la entrega de mis lentes graduados?',
    answer: 'Gracias a nuestro laboratorio digital propio, el 85% de las graduaciones monofocales convencionales se entregan en tan solo 24 horas. Las micas especiales (altos índices, progresivos personalizados o fotocromáticos) toman entre 48 y 72 horas hábiles.',
    category: 'Entrega'
  },
  {
    id: 'faq-3',
    question: '¿Qué garantía tienen los armazones y micas?',
    answer: 'Ofrecemos 12 meses de garantía contra defectos de fábrica en todos los armazones y 30 días de garantía de adaptación en tus micas graduadas (si no te adaptas a la graduación, te la reajustamos sin costo adicional).',
    category: 'Garantías'
  },
  {
    id: 'faq-4',
    question: '¿Puedo llevar mi propio armazón para solo cambiar las micas?',
    answer: '¡Sí! Puedes traer tu armazón favorito a cualquiera de nuestras sucursales. Nuestros especialistas evaluarán el estado del material y montarán tus nuevas micas con la graduación exacta.',
    category: 'Servicios'
  },
  {
    id: 'faq-5',
    question: '¿Cómo sé si necesito filtro de luz azul (Blue Defense)?',
    answer: 'Si pasas más de 3 horas al día frente a computadoras, teléfonos celulares o pantallas de TV, el filtro azul reduce la fatiga ocular, previene la sequedad en los ojos y mejora la calidad del sueño al evitar la alteración de la melatonina.',
    category: 'Salud Visual'
  }
];

export const LENS_TECHNOLOGIES = [
  {
    name: 'Blue Block Digital',
    desc: 'Bloquea el 99% de la luz azul dañina emitida por pantallas y lámparas LED.',
    tag: 'Recomendado para trabajo en oficina y home office'
  },
  {
    name: 'Antirreflejante Hidrofóbico',
    desc: 'Repele agua, polvo y huellas dactilares. Visión nítida nocturna sin destellos al conducir.',
    tag: 'Máxima claridad visual'
  },
  {
    name: 'Transitions Gen 8 Fotocromático',
    desc: 'Micas inteligentes que se oscurecen automáticamente bajo el sol y se vuelven claras en interiores.',
    tag: '2 en 1: Oftálmico y Solar'
  },
  {
    name: 'Progresivos HD Digital',
    desc: 'Visión perfecta a tres distancias (cerca, intermedia y lejos) sin saltos ni líneas visibles.',
    tag: 'Tecnología para presbicia'
  }
];
