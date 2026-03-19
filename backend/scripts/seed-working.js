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
  services: [
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
  perspectives: [
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
  ]
};

async function seedData() {
  console.log('🌱 Creando contenido via API REST...\n');

  try {
    // Crear Proyectos
    console.log('🏗️ Creando Proyectos...');
    for (const project of data.projects) {
      try {
        const response = await axios.post(`${API_URL}/proyectos`, {
          data: project
        });
        console.log(`✅ Proyecto creado: ${project.title}`);
      } catch (error) {
        console.log(`⚠️ Error creando proyecto ${project.title}:`, error.response?.data?.error?.message || error.message);
      }
    }

    // Crear Servicios
    console.log('\n🔧 Creando Servicios...');
    for (const service of data.services) {
      try {
        const response = await axios.post(`${API_URL}/servicios`, {
          data: service
        });
        console.log(`✅ Servicio creado: ${service.title}`);
      } catch (error) {
        console.log(`⚠️ Error creando servicio ${service.title}:`, error.response?.data?.error?.message || error.message);
      }
    }

    // Crear Perspectivas
    console.log('\n📰 Creando Perspectivas...');
    for (const perspective of data.perspectives) {
      try {
        const response = await axios.post(`${API_URL}/perspectivas`, {
          data: perspective
        });
        console.log(`✅ Perspectiva creada: ${perspective.title}`);
      } catch (error) {
        console.log(`⚠️ Error creando perspectiva ${perspective.title}:`, error.response?.data?.error?.message || error.message);
      }
    }

    console.log('\n🎉 ¡Seed completado!');
    console.log('\n📊 Resumen:');
    console.log(`- ${data.projects.length} Proyectos`);
    console.log(`- ${data.services.length} Servicios`);
    console.log(`- ${data.perspectives.length} Perspectivas`);
    console.log('\n✅ Ahora puedes probar el frontend en http://localhost:3000');

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
