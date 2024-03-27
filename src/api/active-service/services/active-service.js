'use strict';

/**
 * active-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::active-service.active-service');
