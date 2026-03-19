module.exports = ({ env }) => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'https:', 'http:'],
          'img-src': ["'self'", 'data:', 'https:', 'http:'],
          'connect-src': ["'self'", 'https:', 'http:'],
          'media-src': ["'self'", 'https:', 'http:'],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://terra-landing.netlify.app', 'http://localhost:3000', 'http://localhost:1337'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
