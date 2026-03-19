const Strapi = require('@strapi/strapi');

async function createContent() {
  console.log('🚀 Iniciando Strapi...');
  
  const strapi = await Strapi().load();
  await strapi.server.mount();
  
  try {
    console.log('📝 Creando Configuración Global...');
    
    // Crear Configuración Global
    const globalSettings = await strapi.entityService.create('api::configuracion-global.configuracion-global', {
      data: {
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
        seoKeywords: 'construcción, infraestructura, proyectos industriales, Terra Building Companies',
        publishedAt: new Date()
      }
    });
    
    console.log('✅ Configuración Global creada:', globalSettings.id);

    console.log('🏗️ Creando Proyectos...');

    // Crear Proyectos
    const proyectos = [
      {
        title: 'Allegiant Stadium',
        description: 'Estadio de última generación en Las Vegas con capacidad para 65,000 espectadores. Hogar de los Raiders de Las Vegas.',
        category: 'Estadio',
        location: 'Las Vegas, NV',
        year: 2020,
        featured: true,
        status: 'completed',
        publishedAt: new Date()
      },
      {
        title: 'SoFi Stadium',
        description: 'Complejo deportivo y de entretenimiento de 298 acres. Sede del Super Bowl LVI.',
        category: 'Estadio',
        location: 'Inglewood, CA',
        year: 2020,
        featured: true,
        status: 'completed',
        publishedAt: new Date()
      },
      {
        title: 'Chase Center',
        description: 'Arena multiusos de última generación. Hogar de los Golden State Warriors.',
        category: 'Arena',
        location: 'San Francisco, CA',
        year: 2019,
        featured: true,
        status: 'completed',
        publishedAt: new Date()
      },
      {
        title: 'Levi\'s Stadium',
        description: 'Estadio de fútbol americano de clase mundial. Hogar de los San Francisco 49ers.',
        category: 'Estadio',
        location: 'Santa Clara, CA',
        year: 2014,
        featured: false,
        status: 'completed',
        publishedAt: new Date()
      },
      {
        title: 'Salesforce Tower',
        description: 'El edificio más alto de San Francisco con 326 metros de altura.',
        category: 'Edificio Comercial',
        location: 'San Francisco, CA',
        year: 2018,
        featured: false,
        status: 'completed',
        publishedAt: new Date()
      }
    ];

    for (const proyecto of proyectos) {
      const created = await strapi.entityService.create('api::proyecto.proyecto', {
        data: proyecto
      });
      console.log(`✅ Proyecto creado: ${created.title}`);
    }

    console.log('🔧 Creando Servicios...');

    // Crear Servicios
    const servicios = [
      {
        title: 'Construcción General',
        description: 'Gestión integral de proyectos de construcción desde la planificación hasta la entrega.',
        icon: 'building',
        publishedAt: new Date()
      },
      {
        title: 'Gestión de Construcción',
        description: 'Supervisión experta y coordinación de todos los aspectos del proyecto.',
        icon: 'clipboard',
        publishedAt: new Date()
      },
      {
        title: 'Diseño-Construcción',
        description: 'Enfoque integrado que combina diseño y construcción en un solo contrato.',
        icon: 'pencil-ruler',
        publishedAt: new Date()
      },
      {
        title: 'Preconstrucción',
        description: 'Planificación detallada y análisis de costos antes del inicio de la construcción.',
        icon: 'calculator',
        publishedAt: new Date()
      },
      {
        title: 'Construcción Sostenible',
        description: 'Proyectos eco-amigables con certificaciones LEED y prácticas sostenibles.',
        icon: 'leaf',
        publishedAt: new Date()
      }
    ];

    for (const servicio of servicios) {
      const created = await strapi.entityService.create('api::servicio.servicio', {
        data: servicio
      });
      console.log(`✅ Servicio creado: ${created.title}`);
    }

    console.log('📰 Creando Perspectivas...');

    // Crear Perspectivas
    const perspectivas = [
      {
        title: 'Innovación en Construcción Sostenible',
        excerpt: 'Exploramos las últimas tendencias en construcción verde y sostenibilidad.',
        content: '<p>La construcción sostenible no es solo una tendencia, es el futuro de nuestra industria. En Terra, estamos comprometidos con prácticas que minimizan el impacto ambiental mientras maximizamos la eficiencia energética.</p><p>Nuestros proyectos incorporan tecnologías verdes, materiales reciclados y sistemas de energía renovable.</p>',
        category: 'Sostenibilidad',
        readingTime: 5,
        publishedAt: new Date()
      },
      {
        title: 'Tecnología BIM en Proyectos Grandes',
        excerpt: 'Cómo la tecnología BIM está revolucionando la gestión de proyectos de construcción.',
        content: '<p>Building Information Modeling (BIM) ha transformado la manera en que planificamos y ejecutamos proyectos de construcción a gran escala.</p><p>Esta tecnología nos permite visualizar, simular y optimizar cada aspecto del proyecto antes de que comience la construcción física.</p>',
        category: 'Tecnología',
        readingTime: 7,
        publishedAt: new Date()
      },
      {
        title: 'Seguridad en el Sitio de Construcción',
        excerpt: 'Nuestro compromiso con la seguridad de todos los trabajadores en cada proyecto.',
        content: '<p>La seguridad es nuestra prioridad número uno. Implementamos protocolos rigurosos y capacitación continua para garantizar que cada trabajador regrese a casa sano y salvo.</p>',
        category: 'Seguridad',
        readingTime: 4,
        publishedAt: new Date()
      },
      {
        title: 'El Futuro de la Construcción Modular',
        excerpt: 'La construcción modular está cambiando la forma en que construimos edificios.',
        content: '<p>La construcción modular ofrece ventajas significativas en términos de tiempo, costo y calidad. Los módulos se fabrican en entornos controlados y se ensamblan en el sitio.</p>',
        category: 'Innovación',
        readingTime: 6,
        publishedAt: new Date()
      }
    ];

    for (const perspectiva of perspectivas) {
      const created = await strapi.entityService.create('api::perspectiva.perspectiva', {
        data: perspectiva
      });
      console.log(`✅ Perspectiva creada: ${created.title}`);
    }

    console.log('🎉 ¡Contenido creado exitosamente!');
    console.log('\n📊 Resumen:');
    console.log('- 1 Configuración Global');
    console.log('- 5 Proyectos');
    console.log('- 5 Servicios');
    console.log('- 4 Perspectivas');

  } catch (error) {
    console.error('❌ Error creando contenido:', error);
    throw error;
  } finally {
    await app.destroy();
  }
}

// Ejecutar
createContent()
  .then(() => {
    console.log('✨ Proceso completado');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Error fatal:', error);
    process.exit(1);
  });
