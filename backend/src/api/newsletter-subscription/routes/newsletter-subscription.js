module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/suscripciones-newsletter',
      handler: 'newsletter-subscription.find',
    },
    {
      method: 'GET',
      path: '/suscripciones-newsletter/:id',
      handler: 'newsletter-subscription.findOne',
    },
    {
      method: 'POST',
      path: '/suscripciones-newsletter',
      handler: 'newsletter-subscription.create',
    },
    {
      method: 'PUT',
      path: '/suscripciones-newsletter/:id',
      handler: 'newsletter-subscription.update',
    },
    {
      method: 'DELETE',
      path: '/suscripciones-newsletter/:id',
      handler: 'newsletter-subscription.delete',
    },
  ],
};
