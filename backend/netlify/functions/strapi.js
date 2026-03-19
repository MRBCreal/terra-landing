const { createStrapiHandler } = require('@netlify/strapi-adapter');
const strapi = require('../../strapi-server');

module.exports.handler = createStrapiHandler(strapi);
