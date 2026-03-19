const axios = require('axios');

const API_URL = 'http://localhost:1337/api';

async function createGlobalConfig() {
  console.log('🌍 Creando Configuración Global...\n');

  try {
    const response = await axios.put(`${API_URL}/global-setting`, {
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
        seoKeywords: 'construcción, infraestructura, proyectos industriales, Terra Building Companies'
      }
    });

    console.log('✅ Configuración Global creada exitosamente');
    console.log('📊 ID:', response.data.data.id);
    console.log('🌐 Sitio:', response.data.data.attributes.siteName);

  } catch (error) {
    console.log('❌ Error:', error.response?.data?.error?.message || error.message);
  }
}

createGlobalConfig();
