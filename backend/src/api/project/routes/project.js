module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/proyectos',
      handler: 'project.find',
    },
    {
      method: 'GET',
      path: '/proyectos/:id',
      handler: 'project.findOne',
    },
    {
      method: 'POST',
      path: '/proyectos',
      handler: 'project.create',
    },
    {
      method: 'PUT',
      path: '/proyectos/:id',
      handler: 'project.update',
    },
    {
      method: 'DELETE',
      path: '/proyectos/:id',
      handler: 'project.delete',
    },
  ],
};
