export const DEFAULT_PLACE = {
  name: "Turin",
  place_id: "turin",
  adm_area1: "Piedmont",
  adm_area2: "Province of Turin",
  country: "Italy",
  lat: "45.07049N",
  lon: "7.68682E",
  timezone: "Europe/Rome",
  type: "settlement",
};
export const MEASUREMENT_SYSTEMS = {
  AUTO: 'auto',
  METRIC: 'metric',
  UK: 'uk',
  US: 'us',
  CA: 'ca',
};
export const UNITS = {
  metric: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'm/s',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  us: {
    temperature: '°F',
    precipitation: 'in/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  uk: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  ca: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'km/h',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
};