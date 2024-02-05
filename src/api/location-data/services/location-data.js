'use strict';

/**
 * location-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::location-data.location-data');
