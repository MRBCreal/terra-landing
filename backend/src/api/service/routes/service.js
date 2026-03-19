module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/servicios',
      handler: 'service.find',
    },
    {
      method: 'GET',
      path: '/servicios/:id',
      handler: 'service.findOne',
    },
    {
      method: 'POST',
      path: '/servicios',
      handler: 'service.create',
    },
    {
      method: 'PUT',
      path: '/servicios/:id',
      handler: 'service.update',
    },
    {
      method: 'DELETE',
      path: '/servicios/:id',
      handler: 'service.delete',
    },
  ],
};
