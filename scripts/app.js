/*
<script data-main="scripts/app" src="scripts/vendor/require.js"></script>
 */

require.config({
  baseUrl: 'scripts',
  paths: {
    'jquery': 'vendor/jquery-3.3.1.min',
    'bootstrap': 'vendor/bootstrap/bootstrap.bundle.min',
    'd3': '//d3js.org/d3.v5.min',
    'd3-topojson': '//d3js.org/topojson.v1.min',
    'leaflet': 'vendor/leaflet/leaflet',
    'leaflet-esri': 'vendor/leaflet/esri-leaflet',
    'esri-leaflet-cluster': '//unpkg.com/esri-leaflet-cluster@2.0.0/dist/esri-leaflet-cluster',
    'esri-leaflet-renderers': '//unpkg.com/esri-leaflet-renderers@2.1.2/dist/esri-leaflet-renderers',
    'leaflet-ajax': 'vendor/leaflet/leaflet.ajax.min',
    'leaflet-providers': 'vendor/leaflet/leaflet-providers',
  },
  shim: {
    'bootstrap': ['jquery'],
    'leaflet-esri': ['leaflet'],
    'esri-leaflet-cluster': ['leaflet','leaflet-esri'],
    'esri-leaflet-renderers': ['leaflet','leaflet-esri','esri-leaflet-cluster'],
    'd3-topojson': ['d3'],
    'leaflet-ajax': ['leaflet'],
    'leaflet-providers': ['leaflet','leaflet-esri']
  }
});

requirejs(["app/main"]);

/*
    'leaflet-esri': 'vendor/leaflet/esri-leaflet',
    'esri-leaflet-cluster': '//unpkg.com/esri-leaflet-cluster@2.0.0/dist/esri-leaflet-cluster',
    'esri-leaflet-renderers': '//unpkg.com/esri-leaflet-renderers@2.1.2/dist/esri-leaflet-renderers',
    'leaflet-lasso': '//unpkg.com/leaflet-lasso@2.1.3/dist/leaflet-lasso.umd.min',
    'leaflet-ajax': 'vendor/leaflet/leaflet.ajax.min',
    'leaflet-providers': 'vendor/leaflet/leaflet-providers',

    'leaflet-groupedlayercontrol': 'vendor/leaflet/leaflet.groupedlayercontrol',
    'leaflet-search': 'vendor/leaflet/leaflet-search.src',
    'leaflet-wmslegend': 'vendor/leaflet/leaflet.wmslegend',
    'leaflet-layerjson': 'vendor/leaflet/leaflet-layerjson',
    'leaflet-omnivore': '//api.tiles.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.3.1/leaflet-omnivore.min',
    'turf': '//unpkg.com/@turf/turf/turf.min',
    'map-services': 'map-services',
    'ncmns-spatial-data': 'ncmns-spatial-data',
    'chroma': 'vendor/chroma/chroma',
    'leaflet-fullscreen': 'vendor/leaflet/Leaflet.fullscreen.min',
    'leaflet-custom-control': 'vendor/leaflet/Leaflet.Control.Custom',

 */
