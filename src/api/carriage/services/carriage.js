'use strict';

/**
 * carriage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::carriage.carriage');
