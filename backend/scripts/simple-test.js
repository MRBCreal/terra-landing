const axios = require('axios');

const API_URL = 'http://localhost:1337/api';

async function simpleTest() {
  console.log('🧪 Test simple de POST...\n');

  try {
    // Probar POST a proyectos
    console.log('1. Enviando POST a /proyectos...');
    
    const response = await axios.post(`${API_URL}/proyectos`, {
      data: {
        title: 'Test Project',
        description: 'Test Description'
      }
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('✅ POST exitoso:', response.status);
    console.log('Respuesta:', JSON.stringify(response.data, null, 2));

  } catch (error) {
    console.log('❌ Error en POST:');
    console.log('Status:', error.response?.status);
    console.log('Status Text:', error.response?.statusText);
    console.log('Headers:', JSON.stringify(error.response?.headers, null, 2));
    console.log('Data:', JSON.stringify(error.response?.data, null, 2));
    console.log('Message:', error.message);
  }
}

simpleTest();
