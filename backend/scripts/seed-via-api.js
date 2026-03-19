const axios = require('axios');

const API_URL = 'http://localhost:1337/api';

// Datos a crear
const data = {
  projects: [
    {
      title: 'Allegiant Stadium',
      description: 'Estadio de última generación en Las Vegas con capacidad para 65,000 espectadores. Hogar de los Raiders de Las Vegas.',
      category: 'Estadio',
      location: 'Las Vegas, NV',
      year: 2020,
      featured: true,
      status: 'completed'
    },
    {
      title: 'SoFi Stadium',
      description: 'Complejo deportivo y de entretenimiento de 298 acres. Sede del Super Bowl LVI.',
      category: 'Estadio',
      location: 'Inglewood, CA',
      year: 2020,
      featured: true,
      status: 'completed'
    },
    {
      title: 'Chase Center',
      description: 'Arena multiusos de última generación. Hogar de los Golden State Warriors.',
      category: 'Arena',
      location: 'San Francisco, CA',
      year: 2019,
      featured: true,
      status: 'completed'
    },
    {
      title: 'Levi\'s Stadium',
      description: 'Estadio de fútbol americano de clase mundial. Hogar de los San Francisco 49ers.',
      category: 'Estadio',
      location: 'Santa Clara, CA',
      year: 2014,
      featured: false,
      status: 'completed'
    },
    {
      title: 'Salesforce Tower',
      description: 'El edificio más alto de San Francisco con 326 metros de altura.',
      category: 'Edificio Comercial',
      location: 'San Francisco, CA',
      year: 2018,
      featured: false,
      status: 'completed'
    }
  ],
  servicios: [
    {
      title: 'Construcción General',
      description: 'Gestión integral de proyectos de construcción desde la planificación hasta la entrega.',
      icon: 'building'
    },
    {
      title: 'Gestión de Construcción',
      description: 'Supervisión experta y coordinación de todos los aspectos del proyecto.',
      icon: 'clipboard'
    },
    {
      title: 'Diseño-Construcción',
      description: 'Enfoque integrado que combina diseño y construcción en un solo contrato.',
      icon: 'pencil-ruler'
    },
    {
      title: 'Preconstrucción',
      description: 'Planificación detallada y análisis de costos antes del inicio de la construcción.',
      icon: 'calculator'
    },
    {
      title: 'Construcción Sostenible',
      description: 'Proyectos eco-amigables con certificaciones LEED y prácticas sostenibles.',
      icon: 'leaf'
    }
  ],
  perspectivas: [
    {
      title: 'Innovación en Construcción Sostenible',
      excerpt: 'Exploramos las últimas tendencias en construcción verde y sostenibilidad.',
      content: '<p>La construcción sostenible no es solo una tendencia, es el futuro de nuestra industria. En Terra, estamos comprometidos con prácticas que minimizan el impacto ambiental mientras maximizamos la eficiencia energética.</p><p>Nuestros proyectos incorporan tecnologías verdes, materiales reciclados y sistemas de energía renovable.</p>',
      category: 'Sostenibilidad',
      readingTime: 5
    },
    {
      title: 'Tecnología BIM en Proyectos Grandes',
      excerpt: 'Cómo la tecnología BIM está revolucionando la gestión de proyectos de construcción.',
      content: '<p>Building Information Modeling (BIM) ha transformado la manera en que planificamos y ejecutamos proyectos de construcción a gran escala.</p><p>Esta tecnología nos permite visualizar, simular y optimizar cada aspecto del proyecto antes de que comience la construcción física.</p>',
      category: 'Tecnología',
      readingTime: 7
    },
    {
      title: 'Seguridad en el Sitio de Construcción',
      excerpt: 'Nuestro compromiso con la seguridad de todos los trabajadores en cada proyecto.',
      content: '<p>La seguridad es nuestra prioridad número uno. Implementamos protocolos rigurosos y capacitación continua para garantizar que cada trabajador regrese a casa sano y salvo.</p>',
      category: 'Seguridad',
      readingTime: 4
    },
    {
      title: 'El Futuro de la Construcción Modular',
      excerpt: 'La construcción modular está cambiando la forma en que construimos edificios.',
      content: '<p>La construcción modular ofrece ventajas significativas en términos de tiempo, costo y calidad. Los módulos se fabrican en entornos controlados y se ensamblan en el sitio.</p>',
      category: 'Innovación',
      readingTime: 6
    }
  ],
  configuracionGlobal: {
    siteName: 'Terra Building Companies',
    siteDescription: 'Construcción para Resultados Superiores y Duraderos',
    heroTitle: 'NOS ENCANTA CONSTRUIR. ES QUIENES SOMOS Y LO QUE HACEMOS.',
    heroSubtitle: 'Resultados Superiores. Buenas Experiencias Para Todos',
    heroDescription: 'Juntos, superamos los desafíos más difíciles y maximizamos los resultados para nuestros clientes, fuerza laboral, comunidades y familias.',
    aboutTitle: 'UN SOCIO COLABORATIVO DE CONFIANZA ENFOCADO EN SUS METAS',
    aboutContent: '<p>Desde nuestros enfoques de seguridad y calidad líderes en la industria, hasta nuestra pasión por la entrega progresiva, la innovación y la tecnología, brindamos garantía centrándonos en lo que le importa a usted.</p>',
    projectsTitle: 'HEMOS HECHO UNA COSA DURANTE CASI 160 AÑOS: CONSTRUIR',
    projectsSubtitle: 'Armamos equipos de alto desempeño listos para resolver cualquier desafío y lograr tus metas',
    servicesTitle: 'Solución de Problemas',
    servicesSubtitle: 'Enfrentamos los desafíos más complejos con innovación y experiencia',
    seoMetaTitle: 'Terra - Construcción para Resultados Superiores y Duraderos',
    seoMetaDescription: 'Más de 160 años construyendo el futuro. Especialistas en construcción industrial, infraestructura y proyectos de gran escala.',
    seoKeywords: 'construcción, infraestructura, proyectos industriales, Terra Building Companies'
  }
};

async function seedData() {
  console.log('🌱 Iniciando seed de datos via API REST...\n');

  try {
    // Crear Proyectos
    console.log('🏗️ Creando Proyectos...');
    for (const proyecto of data.proyectos) {
      try {
        const response = await axios.post(`${API_URL}/proyectos`, {
          data: proyecto
        });
        console.log(`✅ Proyecto creado: ${proyecto.title}`);
      } catch (error) {
        console.log(`⚠️ Error creando proyecto ${proyecto.title}:`, error.response?.data?.error?.message || error.message);
      }
    }

    // Crear Servicios
    console.log('\n🔧 Creando Servicios...');
    for (const servicio of data.servicios) {
      try {
        const response = await axios.post(`${API_URL}/servicios`, {
          data: servicio
        });
        console.log(`✅ Servicio creado: ${servicio.title}`);
      } catch (error) {
        console.log(`⚠️ Error creando servicio ${servicio.title}:`, error.response?.data?.error?.message || error.message);
      }
    }

    // Crear Perspectivas
    console.log('\n📰 Creando Perspectivas...');
    for (const perspectiva of data.perspectivas) {
      try {
        const response = await axios.post(`${API_URL}/perspectivas`, {
          data: perspectiva
        });
        console.log(`✅ Perspectiva creada: ${perspectiva.title}`);
      } catch (error) {
        console.log(`⚠️ Error creando perspectiva ${perspectiva.title}:`, error.response?.data?.error?.message || error.message);
      }
    }

    // Crear/Actualizar Configuración Global (Single Type)
    console.log('\n📝 Creando Configuración Global...');
    try {
      const response = await axios.put(`${API_URL}/configuracion-global`, {
        data: data.configuracionGlobal
      });
      console.log('✅ Configuración Global creada');
    } catch (error) {
      console.log('⚠️ Error creando Configuración Global:', error.response?.data?.error?.message || error.message);
    }

    console.log('\n🎉 ¡Seed completado!');
    console.log('\n📊 Resumen:');
    console.log('- 1 Configuración Global');
    console.log(`- ${data.proyectos.length} Proyectos`);
    console.log(`- ${data.servicios.length} Servicios`);
    console.log(`- ${data.perspectivas.length} Perspectivas`);
    console.log('\n⚠️ NOTA: Si algunos elementos no se crearon, es porque los permisos públicos no están configurados.');
    console.log('Configura los permisos en: Settings → Roles → Public');

  } catch (error) {
    console.error('\n❌ Error durante el seed:', error.message);
  }
}

// Ejecutar
seedData()
  .then(() => {
    console.log('\n✨ Proceso completado');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Error fatal:', error);
    process.exit(1);
  });
