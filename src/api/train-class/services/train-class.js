'use strict';

/**
 * train-class service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::train-class.train-class');
