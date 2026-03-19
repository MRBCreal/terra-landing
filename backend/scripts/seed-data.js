const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', '.tmp', 'data.db');
const db = new sqlite3.Database(dbPath);

console.log('🌱 Iniciando seed de datos...');

// Función para ejecutar queries
function runQuery(query, params = []) {
  return new Promise((resolve, reject) => {
    db.run(query, params, function(err) {
      if (err) reject(err);
      else resolve(this);
    });
  });
}

// Función para obtener datos
function getQuery(query, params = []) {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

async function seedData() {
  try {
    console.log('📝 Creando Configuración Global...');
    
    // Insertar Configuración Global
    await runQuery(`
      INSERT OR REPLACE INTO configuracion_globals (
        id,
        site_name,
        site_description,
        hero_title,
        hero_subtitle,
        hero_description,
        about_title,
        about_content,
        projects_title,
        projects_subtitle,
        services_title,
        services_subtitle,
        seo_meta_title,
        seo_meta_description,
        seo_keywords,
        published_at,
        created_at,
        updated_at
      ) VALUES (
        1,
        'Terra Building Companies',
        'Construcción para Resultados Superiores y Duraderos',
        'NOS ENCANTA CONSTRUIR. ES QUIENES SOMOS Y LO QUE HACEMOS.',
        'Resultados Superiores. Buenas Experiencias Para Todos',
        'Juntos, superamos los desafíos más difíciles y maximizamos los resultados para nuestros clientes, fuerza laboral, comunidades y familias.',
        'UN SOCIO COLABORATIVO DE CONFIANZA ENFOCADO EN SUS METAS',
        '<p>Desde nuestros enfoques de seguridad y calidad líderes en la industria, hasta nuestra pasión por la entrega progresiva, la innovación y la tecnología, brindamos garantía centrándonos en lo que le importa a usted.</p>',
        'HEMOS HECHO UNA COSA DURANTE CASI 160 AÑOS: CONSTRUIR',
        'Armamos equipos de alto desempeño listos para resolver cualquier desafío y lograr tus metas',
        'Solución de Problemas',
        'Enfrentamos los desafíos más complejos con innovación y experiencia',
        'Terra - Construcción para Resultados Superiores y Duraderos',
        'Más de 160 años construyendo el futuro. Especialistas en construcción industrial, infraestructura y proyectos de gran escala.',
        'construcción, infraestructura, proyectos industriales, Terra Building Companies',
        datetime('now'),
        datetime('now'),
        datetime('now')
      )
    `);

    console.log('✅ Configuración Global creada');

    console.log('🏗️ Creando Proyectos...');

    // Insertar Proyectos
    const proyectos = [
      {
        title: 'Allegiant Stadium',
        description: 'Estadio de última generación en Las Vegas con capacidad para 65,000 espectadores. Hogar de los Raiders de Las Vegas.',
        category: 'Estadio',
        location: 'Las Vegas, NV',
        year: 2020,
        featured: 1,
        status: 'completed'
      },
      {
        title: 'SoFi Stadium',
        description: 'Complejo deportivo y de entretenimiento de 298 acres. Sede del Super Bowl LVI.',
        category: 'Estadio',
        location: 'Inglewood, CA',
        year: 2020,
        featured: 1,
        status: 'completed'
      },
      {
        title: 'Chase Center',
        description: 'Arena multiusos de última generación. Hogar de los Golden State Warriors.',
        category: 'Arena',
        location: 'San Francisco, CA',
        year: 2019,
        featured: 1,
        status: 'completed'
      }
    ];

    for (const proyecto of proyectos) {
      await runQuery(`
        INSERT INTO proyectos (
          title,
          description,
          category,
          location,
          year,
          featured,
          status,
          published_at,
          created_at,
          updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'), datetime('now'))
      `, [
        proyecto.title,
        proyecto.description,
        proyecto.category,
        proyecto.location,
        proyecto.year,
        proyecto.featured,
        proyecto.status
      ]);
    }

    console.log('✅ Proyectos creados');

    console.log('🔧 Creando Servicios...');

    // Insertar Servicios
    const servicios = [
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
      }
    ];

    for (const servicio of servicios) {
      await runQuery(`
        INSERT INTO servicios (
          title,
          description,
          icon,
          published_at,
          created_at,
          updated_at
        ) VALUES (?, ?, ?, datetime('now'), datetime('now'), datetime('now'))
      `, [
        servicio.title,
        servicio.description,
        servicio.icon
      ]);
    }

    console.log('✅ Servicios creados');

    console.log('📰 Creando Perspectivas...');

    // Insertar Perspectivas
    const perspectivas = [
      {
        title: 'Innovación en Construcción Sostenible',
        excerpt: 'Exploramos las últimas tendencias en construcción verde y sostenibilidad.',
        content: '<p>La construcción sostenible no es solo una tendencia, es el futuro de nuestra industria...</p>',
        category: 'Sostenibilidad',
        reading_time: 5
      },
      {
        title: 'Tecnología BIM en Proyectos Grandes',
        excerpt: 'Cómo la tecnología BIM está revolucionando la gestión de proyectos de construcción.',
        content: '<p>Building Information Modeling (BIM) ha transformado la manera en que planificamos y ejecutamos proyectos...</p>',
        category: 'Tecnología',
        reading_time: 7
      }
    ];

    for (const perspectiva of perspectivas) {
      await runQuery(`
        INSERT INTO perspectivas (
          title,
          excerpt,
          content,
          category,
          reading_time,
          published_at,
          created_at,
          updated_at
        ) VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'), datetime('now'))
      `, [
        perspectiva.title,
        perspectiva.excerpt,
        perspectiva.content,
        perspectiva.category,
        perspectiva.reading_time
      ]);
    }

    console.log('✅ Perspectivas creadas');

    console.log('🎉 ¡Seed completado exitosamente!');

  } catch (error) {
    console.error('❌ Error durante el seed:', error);
    throw error;
  } finally {
    db.close();
  }
}

// Ejecutar seed
seedData()
  .then(() => {
    console.log('✨ Proceso completado');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Error fatal:', error);
    process.exit(1);
  });
