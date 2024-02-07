import type { Schema, Attribute } from '@strapi/strapi';

export interface FactsFacts extends Schema.Component {
  collectionName: 'components_facts_facts';
  info: {
    displayName: 'facts';
  };
  attributes: {};
}

export interface FactsLocationfact extends Schema.Component {
  collectionName: 'components_facts_locationfacts';
  info: {
    displayName: 'Locationfact';
    description: '';
  };
  attributes: {
    fact1: Attribute.Text;
    fact2: Attribute.Text;
    fact3: Attribute.Text;
    fact4: Attribute.Text;
    fact5: Attribute.Text;
  };
}

export interface ItineraryItinerary extends Schema.Component {
  collectionName: 'components_itinerary_itineraries';
  info: {
    displayName: 'itinerary';
  };
  attributes: {
    day: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface SubLocationsSubLocations extends Schema.Component {
  collectionName: 'components_sub_locations_sub_locations';
  info: {
    displayName: 'subLocations';
  };
  attributes: {
    sublocationName: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface SublocationSublocation extends Schema.Component {
  collectionName: 'components_sublocation_sublocations';
  info: {
    displayName: 'sublocation';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    sublocationdescription: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ThingToDoThingToDo extends Schema.Component {
  collectionName: 'components_thing_to_do_thing_to_dos';
  info: {
    displayName: 'thingToDo';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ThingToDoThingsToDo extends Schema.Component {
  collectionName: 'components_thing_to_do_things_to_dos';
  info: {
    displayName: 'ThingsToDo';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ThingsToDoThingsToDo extends Schema.Component {
  collectionName: 'components_things_to_do_things_to_dos';
  info: {
    displayName: 'thingsToDo';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'facts.facts': FactsFacts;
      'facts.locationfact': FactsLocationfact;
      'itinerary.itinerary': ItineraryItinerary;
      'sub-locations.sub-locations': SubLocationsSubLocations;
      'sublocation.sublocation': SublocationSublocation;
      'thing-to-do.thing-to-do': ThingToDoThingToDo;
      'thing-to-do.things-to-do': ThingToDoThingsToDo;
      'things-to-do.things-to-do': ThingsToDoThingsToDo;
    }
  }
}
