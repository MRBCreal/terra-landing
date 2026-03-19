const http = require('http');

const API_URL = 'http://localhost:1337/api';

async function debugConnection() {
  console.log('🔍 Debug de conexión HTTP...\n');

  // Probar con http nativo en lugar de axios
  const postData = JSON.stringify({
    data: {
      title: 'Test Project',
      description: 'Test Description'
    }
  });

  const options = {
    hostname: 'localhost',
    port: 1337,
    path: '/api/proyectos',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  const req = http.request(options, (res) => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Headers: ${JSON.stringify(res.headers, null, 2)}`);
    
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      console.log(`Response: ${data}`);
    });
  });

  req.on('error', (e) => {
    console.log(`❌ Error en request: ${e.message}`);
  });

  req.write(postData);
  req.end();
}

debugConnection();
