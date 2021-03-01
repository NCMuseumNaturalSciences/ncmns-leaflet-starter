/* Various Map Services for Leaflet Webmap 

'Anthropogenic Density':  sedacAnthropogenicBiomes2006,
'Stamen TonerLite':  Stamen_TonerLite,
'OpenStreet Mapnik':  OpenStreetMap_Mapnik,
'ESRI World Street Map':  Esri_WorldStreetMap,
'Historical Topographic Maps':  topoLayer
'Monthly Temperature Outlook (esri)': monthlyTempOutlook
'Monthly Temperature Outlook (wms)': monthlyTempOutlookWMS
*/

var monthlyTempOutlookWMS = L.tileLayer.wms(
	"http://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_mthly_temp_outlk/MapServer/WmsServer", {
		layers: '0',
		transparent: true
	}
);




var sedacAnthropogenicBiomes2006 = L.tileLayer.wms(
	"https://sedac.ciesin.columbia.edu/geoserver/wms", {
		layers: 'anthromes:anthromes-anthropogenic-biomes-world-v1'
	}
);
var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});
var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});	
var Esri_WorldStreetMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});
var Stamen_TerrainLabels = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-labels/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
});
var topoLayer = L.esri.tiledMapLayer({
	url: 'https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer'
});
var monthlyTempOutlook = L.esri.featureLayer({
	 url: 'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Climate_Outlooks/cpc_mthly_temp_outlk/MapServer/0'
});
monthlyTempOutlook.bindPopup(function (evt) {
  return L.Util.template('<h3>{cat}</h3>', evt.feature.properties);
});

var feowLayer = L.esri.featureLayer({
	url: 'https://maps.wwfus.org/server/rest/services/FEOW/feowhs_011313/MapServer/0',
	style: function (feature) {
		return 
	}
});
feowLayer.bindPopup(function (evt) {
	return L.Util.template('<h3>{ECOREGION}</h3>', evt.feature.properties);
});
