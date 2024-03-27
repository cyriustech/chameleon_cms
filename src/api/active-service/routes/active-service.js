'use strict';

/**
 * active-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::active-service.active-service');
