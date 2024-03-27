'use strict';

/**
 * gradient service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gradient.gradient');
