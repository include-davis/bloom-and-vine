'use strict';

/**
 * film-gallery service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::film-gallery.film-gallery');
