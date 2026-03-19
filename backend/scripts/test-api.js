const axios = require('axios');

const API_URL = 'http://localhost:1337/api';

async function testEndpoints() {
  console.log('🧪 Probando endpoints de la API...\n');

  const endpoints = [
    '/global-setting',
    '/proyectos',
    '/servicios',
    '/perspectivas',
    '/newsletter-subscriptions',
    '/newsletter-subscription'
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await axios.get(`${API_URL}${endpoint}`);
      console.log(`✅ ${endpoint}: OK (${response.status})`);
    } catch (error) {
      console.log(`❌ ${endpoint}: ${error.response?.status || 'Error'} - ${error.response?.data?.error?.message || error.message}`);
    }
  }
}

testEndpoints();
