module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/perspectivas',
      handler: 'perspective.find',
    },
    {
      method: 'GET',
      path: '/perspectivas/:id',
      handler: 'perspective.findOne',
    },
    {
      method: 'POST',
      path: '/perspectivas',
      handler: 'perspective.create',
    },
    {
      method: 'PUT',
      path: '/perspectivas/:id',
      handler: 'perspective.update',
    },
    {
      method: 'DELETE',
      path: '/perspectivas/:id',
      handler: 'perspective.delete',
    },
  ],
};
