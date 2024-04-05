import type { Schema, Attribute } from '@strapi/strapi';

export interface TripDetailsTripDetails extends Schema.Component {
  collectionName: 'components_trip_details_trip_details';
  info: {
    displayName: 'TripDetails';
  };
  attributes: {
    timeline: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'trip-details.trip-details': TripDetailsTripDetails;
    }
  }
}
