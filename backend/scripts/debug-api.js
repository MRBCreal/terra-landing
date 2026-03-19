const axios = require('axios');

const API_URL = 'http://localhost:1337/api';

async function debugAPI() {
  console.log('🔍 Debug de la API...\n');

  try {
    // Probar GET primero
    console.log('1. Probando GET /projects...');
    try {
      const getResponse = await axios.get(`${API_URL}/projects`);
      console.log('✅ GET /projects:', JSON.stringify(getResponse.data, null, 2));
    } catch (error) {
      console.log('❌ GET /projects Error:', error.response?.status);
      console.log('❌ GET /projects Details:', JSON.stringify(error.response?.data, null, 2));
    }

    // Probar POST simple
    console.log('\n2. Probando POST /projects...');
    try {
      const postResponse = await axios.post(`${API_URL}/projects`, {
        data: {
          title: 'Test Project',
          description: 'Test Description'
        }
      });
      console.log('✅ POST /projects:', JSON.stringify(postResponse.data, null, 2));
    } catch (error) {
      console.log('❌ POST /projects Error:', error.response?.status);
      console.log('❌ POST /projects Details:', JSON.stringify(error.response?.data, null, 2));
    }

  } catch (error) {
    console.error('❌ Error general:', error.message);
  }
}

debugAPI();
