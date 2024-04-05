'use strict';

/**
 * user-booking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-booking.user-booking');
