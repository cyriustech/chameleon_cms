import type { Schema, Attribute } from '@strapi/strapi';

export interface BrandBranding extends Schema.Component {
  collectionName: 'components_brand_brandings';
  info: {
    displayName: 'Branding';
    icon: 'brush';
    description: '';
  };
  attributes: {
    primary_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    secondary_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    accent_color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface OperationsDisruptionNotice extends Schema.Component {
  collectionName: 'components_operations_disruption_notices';
  info: {
    displayName: 'Disruption Notice';
    icon: 'connector';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    disruption_start: Attribute.DateTime;
    disruption_expected_end: Attribute.DateTime;
    attached_images: Attribute.Media;
    Active: Attribute.Boolean;
    affected_services: Attribute.Relation<
      'operations.disruption-notice',
      'oneToOne',
      'admin::user'
    >;
    content: Attribute.RichText;
  };
}

export interface PublicRelationsBlogPost extends Schema.Component {
  collectionName: 'components_public_relations_blog_posts';
  info: {
    displayName: 'Blog Post';
    icon: 'sun';
    description: '';
  };
  attributes: {};
}

export interface RouteRoute extends Schema.Component {
  collectionName: 'components_route_routes';
  info: {
    displayName: 'Route';
    icon: 'filter';
  };
  attributes: {
    origin_station: Attribute.Relation<
      'route.route',
      'oneToOne',
      'api::station.station'
    >;
  };
}

export interface ServiceActiveServices extends Schema.Component {
  collectionName: 'components_service_active_services';
  info: {
    displayName: 'Active Services';
    icon: 'train';
  };
  attributes: {};
}

export interface ServicesService extends Schema.Component {
  collectionName: 'components_services_services';
  info: {
    displayName: 'Service';
    icon: 'filter';
  };
  attributes: {
    origin_station: Attribute.Relation<
      'services.service',
      'oneToOne',
      'api::station.station'
    >;
    stop: Attribute.Component<'stops.stops', true>;
    headcode: Attribute.Relation<
      'services.service',
      'oneToOne',
      'api::business.business'
    >;
  };
}

export interface StopsStops extends Schema.Component {
  collectionName: 'components_stops_stops';
  info: {
    displayName: 'Stops';
  };
  attributes: {
    station: Attribute.Relation<
      'stops.stops',
      'oneToOne',
      'api::station.station'
    >;
    scheduled_arrival_time: Attribute.DateTime;
  };
}

export interface TrainConfigLandingPage extends Schema.Component {
  collectionName: 'components_train_config_landing_pages';
  info: {
    displayName: 'Onboard Hub Landing Page';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    onboarding_enabled: Attribute.Boolean;
  };
}

export interface TrainConfigOnboardHubConfiguration extends Schema.Component {
  collectionName: 'components_train_config_onboard_hub_configurations';
  info: {
    displayName: 'Onboard Hub Configuration';
    icon: 'train';
    description: '';
  };
  attributes: {
    landing_page: Attribute.Component<'train-config.landing-page'>;
    main_menu: Attribute.Component<'train-config.onboard-hub-general-page'>;
  };
}

export interface TrainConfigOnboardHubGeneralPage extends Schema.Component {
  collectionName: 'components_train_config_onboard_hub_general_pages';
  info: {
    displayName: 'Onboard Hub General Page';
    icon: 'chartBubble';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media;
    enabled: Attribute.Boolean;
    metadata: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'brand.branding': BrandBranding;
      'operations.disruption-notice': OperationsDisruptionNotice;
      'public-relations.blog-post': PublicRelationsBlogPost;
      'route.route': RouteRoute;
      'service.active-services': ServiceActiveServices;
      'services.service': ServicesService;
      'stops.stops': StopsStops;
      'train-config.landing-page': TrainConfigLandingPage;
      'train-config.onboard-hub-configuration': TrainConfigOnboardHubConfiguration;
      'train-config.onboard-hub-general-page': TrainConfigOnboardHubGeneralPage;
    }
  }
}
