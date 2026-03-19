module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/configuracion-global',
      handler: 'global-setting.find',
    },
    {
      method: 'PUT',
      path: '/configuracion-global',
      handler: 'global-setting.update',
    },
    {
      method: 'DELETE',
      path: '/configuracion-global',
      handler: 'global-setting.delete',
    },
  ],
};
