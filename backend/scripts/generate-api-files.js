const fs = require('fs');
const path = require('path');

const apiPath = path.join(__dirname, '..', 'src', 'api');

const contentTypes = [
  {
    folder: 'project',
    singular: 'project',
    plural: 'proyectos',
    apiName: 'project'
  },
  {
    folder: 'service',
    singular: 'service',
    plural: 'servicios',
    apiName: 'service'
  },
  {
    folder: 'perspective',
    singular: 'perspective',
    plural: 'perspectivas',
    apiName: 'perspective'
  },
  {
    folder: 'newsletter-subscription',
    singular: 'newsletter-subscription',
    plural: 'suscripciones-newsletter',
    apiName: 'newsletter-subscription'
  },
  {
    folder: 'global-setting',
    singular: 'global-setting',
    plural: 'configuracion-global',
    apiName: 'global-setting',
    isSingleType: true
  }
];

console.log('📁 Generando archivos de API para Content Types...\n');

contentTypes.forEach(ct => {
  const ctPath = path.join(apiPath, ct.folder);
  
  // Crear directorios
  const dirs = ['routes', 'controllers', 'services'];
  dirs.forEach(dir => {
    const dirPath = path.join(ctPath, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  });

  // Crear archivo de rutas
  const routesContent = ct.isSingleType ? `module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/${ct.plural}',
      handler: '${ct.singular}.find',
    },
    {
      method: 'PUT',
      path: '/${ct.plural}',
      handler: '${ct.singular}.update',
    },
    {
      method: 'DELETE',
      path: '/${ct.plural}',
      handler: '${ct.singular}.delete',
    },
  ],
};
` : `module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/${ct.plural}',
      handler: '${ct.singular}.find',
    },
    {
      method: 'GET',
      path: '/${ct.plural}/:id',
      handler: '${ct.singular}.findOne',
    },
    {
      method: 'POST',
      path: '/${ct.plural}',
      handler: '${ct.singular}.create',
    },
    {
      method: 'PUT',
      path: '/${ct.plural}/:id',
      handler: '${ct.singular}.update',
    },
    {
      method: 'DELETE',
      path: '/${ct.plural}/:id',
      handler: '${ct.singular}.delete',
    },
  ],
};
`;

  fs.writeFileSync(
    path.join(ctPath, 'routes', `${ct.singular}.js`),
    routesContent
  );

  // Crear archivo de controlador
  const controllerContent = `'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::${ct.apiName}.${ct.apiName}');
`;

  fs.writeFileSync(
    path.join(ctPath, 'controllers', `${ct.singular}.js`),
    controllerContent
  );

  // Crear archivo de servicio
  const serviceContent = `'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::${ct.apiName}.${ct.apiName}');
`;

  fs.writeFileSync(
    path.join(ctPath, 'services', `${ct.singular}.js`),
    serviceContent
  );

  console.log(`✅ Archivos generados para: ${ct.folder}`);
});

console.log('\n🎉 ¡Todos los archivos de API generados exitosamente!');
console.log('\n⚠️ IMPORTANTE: Reinicia Strapi para que los cambios surtan efecto.');
