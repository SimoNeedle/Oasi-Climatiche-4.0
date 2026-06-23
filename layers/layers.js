ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32632").setExtent([509787.601160, 4826876.854017, 837570.069860, 5039864.304735]);
var wms_layers = [];

var lyr_CartoLight = new ol.layer.Tile({
            'title': 'Basemap',
            'baseLayer':'true',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
        

var lyr_Indicedivulnerabilitclimatica = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> Indicedivulnerabilitclimatica',
    source: new ol.source.Vector(), 
    sourceType: 'json',
     opacity: 0.7,
    permalink: "Indicedivulnerabilitclimatica",
    popuplayertitle: 'Indice di vulnerabilità climatica',
    creationdate: '2026-06-22 20:36:30',
    interactive: false,
});
function load_Indicedivulnerabilitclimatica_data() {
    var format_Indicedivulnerabilitclimatica = new ol.format.GeoJSON();
    var features_Indicedivulnerabilitclimatica = format_Indicedivulnerabilitclimatica.readFeatures(json_Indicedivulnerabilitclimatica, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
    var jsonSource_Indicedivulnerabilitclimatica = new ol.source.Vector({
    attributions:
    '<a class="legend"><b>Indice di vulnerabilità climatica</b><br />\
        <img src="styles/legend/Indicedivulnerabilitclimatica_0.png"/>1<br />\
        <img src="styles/legend/Indicedivulnerabilitclimatica_1.png"/>2<br />\
        <img src="styles/legend/Indicedivulnerabilitclimatica_2.png"/>3<br />\
        <img src="styles/legend/Indicedivulnerabilitclimatica_3.png"/>4<br />\
        <img src="styles/legend/Indicedivulnerabilitclimatica_4.png"/>5<br />\
        <img src="styles/legend/Indicedivulnerabilitclimatica_5.png"/>6<br />\
        <img src="styles/legend/Indicedivulnerabilitclimatica_6.png"/>7<br />\
        <img src="styles/legend/Indicedivulnerabilitclimatica_7.png"/>8<br />\
        <img src="styles/legend/Indicedivulnerabilitclimatica_8.png"/>9<br />\
        <img src="styles/legend/Indicedivulnerabilitclimatica_9.png"/>10<br />\
        <img src="styles/legend/Indicedivulnerabilitclimatica_10.png"/>11<br /></a>'
        });
    lyr_Indicedivulnerabilitclimatica.setSource(jsonSource_Indicedivulnerabilitclimatica);
    lyr_Indicedivulnerabilitclimatica.set(
    "title", '<div id="layertitle">Indice di vulnerabilità climatica<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="2.67541053e-07" max-value="0.878199892738328" checked><img src="styles/legend/Indicedivulnerabilitclimatica_0.png"/>1<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="0.878200892738328" max-value="2.455953341104161" checked><img src="styles/legend/Indicedivulnerabilitclimatica_1.png"/>2<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="2.455954341104161" max-value="3.895074301911883" checked><img src="styles/legend/Indicedivulnerabilitclimatica_2.png"/>3<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="3.8950753019118833" max-value="5.275392361830623" checked><img src="styles/legend/Indicedivulnerabilitclimatica_3.png"/>4<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="5.2753933618306235" max-value="6.508425134853915" checked><img src="styles/legend/Indicedivulnerabilitclimatica_4.png"/>5<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="6.508426134853915" max-value="7.645755848725091" checked><img src="styles/legend/Indicedivulnerabilitclimatica_5.png"/>6<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="7.6457568487250915" max-value="9.204318318280084" checked><img src="styles/legend/Indicedivulnerabilitclimatica_6.png"/>7<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="9.204319318280083" max-value="11.591432038230135" checked><img src="styles/legend/Indicedivulnerabilitclimatica_7.png"/>8<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="11.591433038230134" max-value="15.286240262182588" checked><img src="styles/legend/Indicedivulnerabilitclimatica_8.png"/>9<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="15.286241262182587" max-value="23.155618757021216" checked><img src="styles/legend/Indicedivulnerabilitclimatica_9.png"/>10<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="23.155619757021217" max-value="31.49064410373368" checked><img src="styles/legend/Indicedivulnerabilitclimatica_10.png"/>11<br /></a>'
        );
    var featureCounter_Indicedivulnerabilitclimatica = 1;
    jsonSource_Indicedivulnerabilitclimatica.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Indicedivulnerabilitclimatica++);
        feature.set("layerObject", lyr_Indicedivulnerabilitclimatica);
    });        
    jsonSource_Indicedivulnerabilitclimatica.addFeatures(features_Indicedivulnerabilitclimatica);
}
applySLDstyle(lyr_Indicedivulnerabilitclimatica, style_Indicedivulnerabilitclimatica, 'Indice di vulnerabilità climatica');

var lyr_TemperaturaSuperficiale = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/TemperaturaSuperficiale.png",
        projection: 'EPSG:32632',
        alwaysInRange: true,
        imageExtent: [515025.000000, 4847025.000000, 801975.000000, 4998975.000000]}),
    opacity: 0.7,
    permalink: "TemperaturaSuperficiale",
    title: '<div id="layertitle">Temperatura Superficiale<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/TemperaturaSuperficiale_0.png"/><= 30,0<br />\
         <img src="styles/legend/TemperaturaSuperficiale_10.png"/>32,5<br />\
        <img src="styles/legend/TemperaturaSuperficiale_20.png"/>35,0<br />\
         <img src="styles/legend/TemperaturaSuperficiale_30.png"/>37,5<br />\
          <img src="styles/legend/TemperaturaSuperficiale_40.png"/>40,0<br />\
         <img src="styles/legend/TemperaturaSuperficiale_50.png"/>42,5<br />\
       <img src="styles/legend/TemperaturaSuperficiale_60.png"/>45,0<br />\
        <img src="styles/legend/TemperaturaSuperficiale_70.png"/>47,5<br />\
        <img src="styles/legend/TemperaturaSuperficiale_80.png"/>50,0<br />\
       <img src="styles/legend/TemperaturaSuperficiale_90.png"/>52,5<br />\
          <img src="styles/legend/TemperaturaSuperficiale_99.png"/>> 55<br /></a>'
        });
    

var lyr_Personesole = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> Personesole',
    source: new ol.source.Vector(), 
    sourceType: 'json',    
    opacity: 0.1667,
    permalink: "Personesole",
    popuplayertitle: 'Persone sole',
    creationdate: '2026-06-22 20:36:30',
    interactive: false,
});
function load_Personesole_data() {
    var format_Personesole = new ol.format.GeoJSON();
    var features_Personesole = format_Personesole.readFeatures(json_Personesole, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
    var jsonSource_Personesole = new ol.source.Vector({
    attributions:
    '<a class="legend"><b>Persone sole</b><br />\
        <img src="styles/legend/Personesole_0.png"/>1<br />\
        <img src="styles/legend/Personesole_1.png"/>2<br />\
        <img src="styles/legend/Personesole_2.png"/>3<br />\
        <img src="styles/legend/Personesole_3.png"/>4<br />\
        <img src="styles/legend/Personesole_4.png"/>5<br />\
        <img src="styles/legend/Personesole_5.png"/>6<br />\
        <img src="styles/legend/Personesole_6.png"/>7<br />\
        <img src="styles/legend/Personesole_7.png"/>8<br />\
        <img src="styles/legend/Personesole_8.png"/>9<br />\
        <img src="styles/legend/Personesole_9.png"/>10<br /></a>'
        });
    lyr_Personesole.setSource(jsonSource_Personesole);
    lyr_Personesole.set(
    "title", '<div id="layertitle">Persone sole<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="1.0" max-value="1.9" checked><img src="styles/legend/Personesole_0.png"/>1<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="1.9000009999999998" max-value="2.8" checked><img src="styles/legend/Personesole_1.png"/>2<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="2.800001" max-value="3.7" checked><img src="styles/legend/Personesole_2.png"/>3<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="3.7000010000000003" max-value="4.6" checked><img src="styles/legend/Personesole_3.png"/>4<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="4.600001" max-value="5.5" checked><img src="styles/legend/Personesole_4.png"/>5<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="5.500001" max-value="6.4" checked><img src="styles/legend/Personesole_5.png"/>6<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="6.4000010000000005" max-value="7.300000000000001" checked><img src="styles/legend/Personesole_6.png"/>7<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="7.300001000000001" max-value="8.200000000000001" checked><img src="styles/legend/Personesole_7.png"/>8<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="8.200001" max-value="9.100000000000001" checked><img src="styles/legend/Personesole_8.png"/>9<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="9.100001" max-value="10.0" checked><img src="styles/legend/Personesole_9.png"/>10<br /></a>'
        );
    var featureCounter_Personesole = 1;
    jsonSource_Personesole.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Personesole++);
        feature.set("layerObject", lyr_Personesole);
    });        
    jsonSource_Personesole.addFeatures(features_Personesole);
}
applySLDstyle(lyr_Personesole, style_Personesole, 'Persone sole');


var lyr_Personestraniere = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> Personestraniere',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    opacity: 0.1667,
    permalink: "Personestraniere",
    popuplayertitle: 'Persone straniere',
    creationdate: '2026-06-22 20:36:30',
    interactive: false,
});
function load_Personestraniere_data() {
    var format_Personestraniere = new ol.format.GeoJSON();
    var features_Personestraniere = format_Personestraniere.readFeatures(json_Personestraniere, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
    var jsonSource_Personestraniere = new ol.source.Vector({
    attributions:
    '<a class="legend"><b>Persone straniere</b><br />\
        <img src="styles/legend/Personestraniere_0.png"/>1<br />\
        <img src="styles/legend/Personestraniere_1.png"/>2<br />\
        <img src="styles/legend/Personestraniere_2.png"/>3<br />\
        <img src="styles/legend/Personestraniere_3.png"/>4<br />\
        <img src="styles/legend/Personestraniere_4.png"/>5<br />\
        <img src="styles/legend/Personestraniere_5.png"/>6<br />\
        <img src="styles/legend/Personestraniere_6.png"/>7<br />\
        <img src="styles/legend/Personestraniere_7.png"/>8<br />\
        <img src="styles/legend/Personestraniere_8.png"/>9<br />\
        <img src="styles/legend/Personestraniere_9.png"/>10<br /></a>'
        });
    lyr_Personestraniere.setSource(jsonSource_Personestraniere);
    lyr_Personestraniere.set(
    "title", '<div id="layertitle">Persone straniere<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="1.0" max-value="1.9" checked><img src="styles/legend/Personestraniere_0.png"/>1<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="1.9000009999999998" max-value="2.8" checked><img src="styles/legend/Personestraniere_1.png"/>2<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="2.800001" max-value="3.7" checked><img src="styles/legend/Personestraniere_2.png"/>3<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="3.7000010000000003" max-value="4.6" checked><img src="styles/legend/Personestraniere_3.png"/>4<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="4.600001" max-value="5.5" checked><img src="styles/legend/Personestraniere_4.png"/>5<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="5.500001" max-value="6.4" checked><img src="styles/legend/Personestraniere_5.png"/>6<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="6.4000010000000005" max-value="7.300000000000001" checked><img src="styles/legend/Personestraniere_6.png"/>7<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="7.300001000000001" max-value="8.200000000000001" checked><img src="styles/legend/Personestraniere_7.png"/>8<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="8.200001" max-value="9.100000000000001" checked><img src="styles/legend/Personestraniere_8.png"/>9<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="9.100001" max-value="10.0" checked><img src="styles/legend/Personestraniere_9.png"/>10<br /></a>'
        );
    var featureCounter_Personestraniere = 1;
    jsonSource_Personestraniere.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Personestraniere++);
        feature.set("layerObject", lyr_Personestraniere);
    });        
    jsonSource_Personestraniere.addFeatures(features_Personestraniere);
}
applySLDstyle(lyr_Personestraniere, style_Personestraniere, 'Persone straniere');


var lyr_Personeanziane = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> Personeanziane',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    opacity: 0.1667,
    permalink: "Personeanziane",
    popuplayertitle: 'Persone anziane',
    creationdate: '2026-06-22 20:36:30',
    interactive: false,
});
function load_Personeanziane_data() {
    var format_Personeanziane = new ol.format.GeoJSON();
    var features_Personeanziane = format_Personeanziane.readFeatures(json_Personeanziane, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
    var jsonSource_Personeanziane = new ol.source.Vector({
    attributions:
    '<a class="legend"><b>Persone anziane</b><br />\
        <img src="styles/legend/Personeanziane_0.png"/>1<br />\
        <img src="styles/legend/Personeanziane_1.png"/>2<br />\
        <img src="styles/legend/Personeanziane_2.png"/>3<br />\
        <img src="styles/legend/Personeanziane_3.png"/>4<br />\
        <img src="styles/legend/Personeanziane_4.png"/>5<br />\
        <img src="styles/legend/Personeanziane_5.png"/>6<br />\
        <img src="styles/legend/Personeanziane_6.png"/>7<br />\
        <img src="styles/legend/Personeanziane_7.png"/>8<br />\
        <img src="styles/legend/Personeanziane_8.png"/>9<br />\
        <img src="styles/legend/Personeanziane_9.png"/>10<br /></a>'
        });
    lyr_Personeanziane.setSource(jsonSource_Personeanziane);
    lyr_Personeanziane.set(
    "title", '<div id="layertitle">Persone anziane<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="1.0" max-value="1.9" checked><img src="styles/legend/Personeanziane_0.png"/>1<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="1.9000009999999998" max-value="2.8" checked><img src="styles/legend/Personeanziane_1.png"/>2<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="2.800001" max-value="3.7" checked><img src="styles/legend/Personeanziane_2.png"/>3<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="3.7000010000000003" max-value="4.6" checked><img src="styles/legend/Personeanziane_3.png"/>4<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="4.600001" max-value="5.5" checked><img src="styles/legend/Personeanziane_4.png"/>5<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="5.500001" max-value="6.4" checked><img src="styles/legend/Personeanziane_5.png"/>6<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="6.4000010000000005" max-value="7.300000000000001" checked><img src="styles/legend/Personeanziane_6.png"/>7<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="7.300001000000001" max-value="8.200000000000001" checked><img src="styles/legend/Personeanziane_7.png"/>8<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="8.200001" max-value="9.100000000000001" checked><img src="styles/legend/Personeanziane_8.png"/>9<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="9.100001" max-value="10.0" checked><img src="styles/legend/Personeanziane_9.png"/>10<br /></a>'
        );
    var featureCounter_Personeanziane = 1;
    jsonSource_Personeanziane.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Personeanziane++);
        feature.set("layerObject", lyr_Personeanziane);
    });        
    jsonSource_Personeanziane.addFeatures(features_Personeanziane);
}
applySLDstyle(lyr_Personeanziane, style_Personeanziane, 'Persone anziane');


var lyr_Bambini = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> Bambini',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    opacity: 0.1667,
    permalink: "Bambini",
    popuplayertitle: 'Bambini',
    creationdate: '2026-06-22 20:36:30',
    interactive: false,
});
function load_Bambini_data() {
    var format_Bambini = new ol.format.GeoJSON();
    var features_Bambini = format_Bambini.readFeatures(json_Bambini, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
    var jsonSource_Bambini = new ol.source.Vector({
    attributions:
    '<a class="legend"><b>Bambini</b><br />\
        <img src="styles/legend/Bambini_0.png"/>1<br />\
        <img src="styles/legend/Bambini_1.png"/>2<br />\
        <img src="styles/legend/Bambini_2.png"/>3<br />\
        <img src="styles/legend/Bambini_3.png"/>4<br />\
        <img src="styles/legend/Bambini_4.png"/>5<br />\
        <img src="styles/legend/Bambini_5.png"/>6<br />\
        <img src="styles/legend/Bambini_6.png"/>7<br />\
        <img src="styles/legend/Bambini_7.png"/>8<br />\
        <img src="styles/legend/Bambini_8.png"/>9<br />\
        <img src="styles/legend/Bambini_9.png"/>10<br /></a>'
        });
    lyr_Bambini.setSource(jsonSource_Bambini);
    lyr_Bambini.set(
    "title", '<div id="layertitle">Bambini<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="1.0" max-value="1.9" checked><img src="styles/legend/Bambini_0.png"/>1<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="1.9000009999999998" max-value="2.8" checked><img src="styles/legend/Bambini_1.png"/>2<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="2.800001" max-value="3.7" checked><img src="styles/legend/Bambini_2.png"/>3<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="3.7000010000000003" max-value="4.6" checked><img src="styles/legend/Bambini_3.png"/>4<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="4.600001" max-value="5.5" checked><img src="styles/legend/Bambini_4.png"/>5<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="5.500001" max-value="6.4" checked><img src="styles/legend/Bambini_5.png"/>6<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="6.4000010000000005" max-value="7.300000000000001" checked><img src="styles/legend/Bambini_6.png"/>7<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="7.300001000000001" max-value="8.200000000000001" checked><img src="styles/legend/Bambini_7.png"/>8<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="8.200001" max-value="9.100000000000001" checked><img src="styles/legend/Bambini_8.png"/>9<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="9.100001" max-value="10.0" checked><img src="styles/legend/Bambini_9.png"/>10<br /></a>'
        );
    var featureCounter_Bambini = 1;
    jsonSource_Bambini.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Bambini++);
        feature.set("layerObject", lyr_Bambini);
    });        
    jsonSource_Bambini.addFeatures(features_Bambini);
}
applySLDstyle(lyr_Bambini, style_Bambini, 'Bambini');


var lyr_Indicedideprivazionematerialeesociale2021 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> Indicedideprivazionematerialeesociale2021',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    opacity: 0.3334,
    permalink: "Indicedideprivazionematerialeesociale2021",
    popuplayertitle: 'Indice di deprivazione materiale e sociale 2021',
    creationdate: '2026-06-22 20:36:30',
    interactive: false,
});
function load_Indicedideprivazionematerialeesociale2021_data() {
    var format_Indicedideprivazionematerialeesociale2021 = new ol.format.GeoJSON();
    var features_Indicedideprivazionematerialeesociale2021 = format_Indicedideprivazionematerialeesociale2021.readFeatures(json_Indicedideprivazionematerialeesociale2021, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
    var jsonSource_Indicedideprivazionematerialeesociale2021 = new ol.source.Vector({
    attributions:
    '<a class="legend"><b>Indice di deprivazione materiale e sociale 2021</b><br />\
        <img src="styles/legend/Indicedideprivazionematerialeesociale2021_0.png"/>1<br />\
        <img src="styles/legend/Indicedideprivazionematerialeesociale2021_1.png"/>2<br />\
        <img src="styles/legend/Indicedideprivazionematerialeesociale2021_2.png"/>3<br />\
        <img src="styles/legend/Indicedideprivazionematerialeesociale2021_3.png"/>4<br />\
        <img src="styles/legend/Indicedideprivazionematerialeesociale2021_4.png"/>5<br />\
        <img src="styles/legend/Indicedideprivazionematerialeesociale2021_5.png"/>6<br />\
        <img src="styles/legend/Indicedideprivazionematerialeesociale2021_6.png"/>7<br />\
        <img src="styles/legend/Indicedideprivazionematerialeesociale2021_7.png"/>8<br />\
        <img src="styles/legend/Indicedideprivazionematerialeesociale2021_8.png"/>9<br />\
        <img src="styles/legend/Indicedideprivazionematerialeesociale2021_9.png"/>10<br /></a>'
        });
    lyr_Indicedideprivazionematerialeesociale2021.setSource(jsonSource_Indicedideprivazionematerialeesociale2021);
    lyr_Indicedideprivazionematerialeesociale2021.set(
    "title", '<div id="layertitle">Indice di deprivazione materiale e sociale 2021<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="1.0" max-value="1.9" checked><img src="styles/legend/Indicedideprivazionematerialeesociale2021_0.png"/>1<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="1.9000009999999998" max-value="2.8" checked><img src="styles/legend/Indicedideprivazionematerialeesociale2021_1.png"/>2<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="2.800001" max-value="3.7" checked><img src="styles/legend/Indicedideprivazionematerialeesociale2021_2.png"/>3<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="3.7000010000000003" max-value="4.6" checked><img src="styles/legend/Indicedideprivazionematerialeesociale2021_3.png"/>4<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="4.600001" max-value="5.5" checked><img src="styles/legend/Indicedideprivazionematerialeesociale2021_4.png"/>5<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="5.500001" max-value="6.4" checked><img src="styles/legend/Indicedideprivazionematerialeesociale2021_5.png"/>6<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="6.4000010000000005" max-value="7.300000000000001" checked><img src="styles/legend/Indicedideprivazionematerialeesociale2021_6.png"/>7<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="7.300001000000001" max-value="8.200000000000001" checked><img src="styles/legend/Indicedideprivazionematerialeesociale2021_7.png"/>8<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="8.200001" max-value="9.100000000000001" checked><img src="styles/legend/Indicedideprivazionematerialeesociale2021_8.png"/>9<br />\
        <input type="checkbox" class="symbology" symbology-type="graduated" min-value="9.100001" max-value="10.0" checked><img src="styles/legend/Indicedideprivazionematerialeesociale2021_9.png"/>10<br /></a>'
        );
    var featureCounter_Indicedideprivazionematerialeesociale2021 = 1;
    jsonSource_Indicedideprivazionematerialeesociale2021.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Indicedideprivazionematerialeesociale2021++);
        feature.set("layerObject", lyr_Indicedideprivazionematerialeesociale2021);
    });        
    jsonSource_Indicedideprivazionematerialeesociale2021.addFeatures(features_Indicedideprivazionematerialeesociale2021);
}
applySLDstyle(lyr_Indicedideprivazionematerialeesociale2021, style_Indicedideprivazionematerialeesociale2021, 'Indice di deprivazione materiale e sociale 2021');

var lyr_FiltrodiPopolazione2025 = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/FiltrodiPopolazione2025.png",
        projection: 'EPSG:32632',
        alwaysInRange: true,
        imageExtent: [508477.415910, 4842152.830136, 808077.415910, 5005952.830136]        }),
    opacity: 1,
    permalink: "FiltrodiPopolazione2025",
    
     
    title: '<div id="layertitle">Filtro di Popolazione 2025<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/FiltrodiPopolazione2025_0.png"/>0<br />\
        <img src="styles/legend/FiltrodiPopolazione2025_1.png"/>99 percentile<br />\
        <img src="styles/legend/FiltrodiPopolazione2025_2.png"/>99,9 percentile<br />\
        <img src="styles/legend/FiltrodiPopolazione2025_3.png"/>99,99 percentile<br />\
        <img src="styles/legend/FiltrodiPopolazione2025_4.png"/>massimo valore<br /></a>'
        });
    
var lyr_Multicronicit = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/Multicronicit.png",
        projection: 'EPSG:32632',
        alwaysInRange: true,
        imageExtent: [508477.415910, 4842152.830136, 808077.415910, 5005952.830136]        }),
    opacity: 0.7,
    permalink: "Multicronicit",
    
     
    title: '<div id="layertitle">Multi-cronicità<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/Multicronicit_0.png"/>0<br />\
        <img src="styles/legend/Multicronicit_1.png"/>99.99° percentile<br />\
        <img src="styles/legend/Multicronicit_2.png"/>massimo valore<br /></a>'
        });
    
var lyr_Disturbimentalieneurocognitivi = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/Disturbimentalieneurocognitivi.png",
        projection: 'EPSG:32632',
        alwaysInRange: true,
        imageExtent: [508477.415910, 4842152.830136, 808077.415910, 5005952.830136]  }),
    opacity: 0.7,
    permalink: "Disturbimentalieneurocognitivi",
    
     
    title: '<div id="layertitle">Disturbi mentali e neurocognitivi<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/Disturbimentalieneurocognitivi_0.png"/>0<br />\
        <img src="styles/legend/Disturbimentalieneurocognitivi_1.png"/>99.99° percentile<br />\
        <img src="styles/legend/Disturbimentalieneurocognitivi_2.png"/>massimo valore<br /></a>'
        });
    
var lyr_Indicedivulnerabilitsanitaria = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/Indicedivulnerabilitsanitaria.png",
        projection: 'EPSG:32632',
        alwaysInRange: true,
        imageExtent: [508477.415910, 4842152.830136, 808077.415910, 5005952.830136],
        }),
    opacity: 0.7,
    permalink: "Indicedivulnerabilitsanitaria",
    
     
    title: '<div id="layertitle">Indice di vulnerabilità sanitaria<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/Indicedivulnerabilitsanitaria_0.png"/>19,0077<br />\
        <img src="styles/legend/Indicedivulnerabilitsanitaria_1.png"/>32,6742<br />\
        <img src="styles/legend/Indicedivulnerabilitsanitaria_2.png"/>60,0483<br /></a>'
        });
    

var lyr_Baciniacquatici = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> Baciniacquatici',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "Baciniacquatici",
    popuplayertitle: 'Bacini acquatici',
    creationdate: '2026-06-22 20:36:30',
    interactive: true,
});
function load_Baciniacquatici_data() {
    var format_Baciniacquatici = new ol.format.GeoJSON();
    var features_Baciniacquatici = format_Baciniacquatici.readFeatures(json_Baciniacquatici, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
    var jsonSource_Baciniacquatici = new ol.source.Vector({
    attributions:
    '<a class="legend"><b>Bacini acquatici</b><br />\
        <img src="styles/legend/Baciniacquatici_0.png"/>Porto<br />\
        <img src="styles/legend/Baciniacquatici_1.png"/>Bacino<br />\
        <img src="styles/legend/Baciniacquatici_2.png"/>Fiume<br />\
        <img src="styles/legend/Baciniacquatici_3.png"/>Sponda<br />\
        <img src="styles/legend/Baciniacquatici_4.png"/>Acqua<br />\
        <img src="styles/legend/Baciniacquatici_5.png"/>Zona umida<br />\
        <img src="styles/legend/Baciniacquatici_6.png"/>Zona umida - Torbiera acida<br />\
        <img src="styles/legend/Baciniacquatici_7.png"/>Zona umida - Torbiera alcalina<br />\
        <img src="styles/legend/Baciniacquatici_8.png"/>Zona umida - palude erbosa<br />\
        <img src="styles/legend/Baciniacquatici_9.png"/>Zona umida - canneto<br />\
        <img src="styles/legend/Baciniacquatici_10.png"/>Zona umida - palude salmastra<br />\
        <img src="styles/legend/Baciniacquatici_11.png"/>Zona umida - palude boscosa<br />\
        <img src="styles/legend/Baciniacquatici_12.png"/>Zona umida - piana intertidale<br />\
        <img src="styles/legend/Baciniacquatici_13.png"/>Zona umida - prato umido<br />\
        <img src="styles/legend/Baciniacquatici_14.png"/>Canale<br />\
        <img src="styles/legend/Baciniacquatici_15.png"/>Fosso di drenaggio<br />\
        <img src="styles/legend/Baciniacquatici_16.png"/>Ruscello<br />\
        <img src="styles/legend/Baciniacquatici_17.png"/>Piscina<br /></a>'
        });
    lyr_Baciniacquatici.setSource(jsonSource_Baciniacquatici);
    lyr_Baciniacquatici.set(
    "title", '<div id="layertitle">Bacini acquatici<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="dock" checked><img src="styles/legend/Baciniacquatici_0.png"/>Porto<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="reservoir" checked><img src="styles/legend/Baciniacquatici_1.png"/>Bacino<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="river" checked><img src="styles/legend/Baciniacquatici_2.png"/>Fiume<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="riverbank" checked><img src="styles/legend/Baciniacquatici_3.png"/>Sponda<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="water" checked><img src="styles/legend/Baciniacquatici_4.png"/>Acqua<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="wetland" checked><img src="styles/legend/Baciniacquatici_5.png"/>Zona umida<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="wetland_bog" checked><img src="styles/legend/Baciniacquatici_6.png"/>Zona umida - Torbiera acida<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="wetland_fen" checked><img src="styles/legend/Baciniacquatici_7.png"/>Zona umida - Torbiera alcalina<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="wetland_marsh" checked><img src="styles/legend/Baciniacquatici_8.png"/>Zona umida - palude erbosa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="wetland_reedbed" checked><img src="styles/legend/Baciniacquatici_9.png"/>Zona umida - canneto<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="wetland_saltmarsh" checked><img src="styles/legend/Baciniacquatici_10.png"/>Zona umida - palude salmastra<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="wetland_swamp" checked><img src="styles/legend/Baciniacquatici_11.png"/>Zona umida - palude boscosa<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="wetland_tidalflat" checked><img src="styles/legend/Baciniacquatici_12.png"/>Zona umida - piana intertidale<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="wetland_wet_meadow" checked><img src="styles/legend/Baciniacquatici_13.png"/>Zona umida - prato umido<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="canal" checked><img src="styles/legend/Baciniacquatici_14.png"/>Canale<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="drain" checked><img src="styles/legend/Baciniacquatici_15.png"/>Fosso di drenaggio<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="stream" checked><img src="styles/legend/Baciniacquatici_16.png"/>Ruscello<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="swimming_pool" checked><img src="styles/legend/Baciniacquatici_17.png"/>Piscina<br /></a>'
        );
    var featureCounter_Baciniacquatici = 1;
    jsonSource_Baciniacquatici.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Baciniacquatici++);
        feature.set("layerObject", lyr_Baciniacquatici);
    });        
    jsonSource_Baciniacquatici.addFeatures(features_Baciniacquatici);
}
applySLDstyle(lyr_Baciniacquatici, style_Baciniacquatici, 'Bacini acquatici');


var lyr_Infrastrutturebluantropiche = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> Infrastrutturebluantropiche',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "Infrastrutturebluantropiche",
    popuplayertitle: 'Infrastrutture blu antropiche',
    creationdate: '2026-06-22 20:36:30',
    interactive: true,
});
function load_Infrastrutturebluantropiche_data() {
    var format_Infrastrutturebluantropiche = new ol.format.GeoJSON();
    var features_Infrastrutturebluantropiche = format_Infrastrutturebluantropiche.readFeatures(json_Infrastrutturebluantropiche, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
    var jsonSource_Infrastrutturebluantropiche = new ol.source.Vector({
    attributions:
    '<a class="legend"><b>Infrastrutture blu antropiche</b><br />\
        <img src="styles/legend/Infrastrutturebluantropiche_0.png"/>Acqua Potabile<br />\
        <img src="styles/legend/Infrastrutturebluantropiche_1.png"/>Fontana<br />\
        <img src="styles/legend/Infrastrutturebluantropiche_2.png"/>Toilette<br />\
        <img src="styles/legend/Infrastrutturebluantropiche_3.png"/>Pozzo d\'acqua<br /></a>'
        });
    lyr_Infrastrutturebluantropiche.setSource(jsonSource_Infrastrutturebluantropiche);
    lyr_Infrastrutturebluantropiche.set(
    "title", '<div id="layertitle">Infrastrutture blu antropiche<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="drinking_water" checked><img src="styles/legend/Infrastrutturebluantropiche_0.png"/>Acqua Potabile<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="fountain" checked><img src="styles/legend/Infrastrutturebluantropiche_1.png"/>Fontana<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="toilet" checked><img src="styles/legend/Infrastrutturebluantropiche_2.png"/>Toilette<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="water_well" checked><img src="styles/legend/Infrastrutturebluantropiche_3.png"/>Pozzo d\'acqua<br /></a>'
        );
    var featureCounter_Infrastrutturebluantropiche = 1;
    jsonSource_Infrastrutturebluantropiche.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Infrastrutturebluantropiche++);
        feature.set("layerObject", lyr_Infrastrutturebluantropiche);
    });        
    jsonSource_Infrastrutturebluantropiche.addFeatures(features_Infrastrutturebluantropiche);
}
applySLDstyle(lyr_Infrastrutturebluantropiche, style_Infrastrutturebluantropiche, 'Infrastrutture blu antropiche');


var lyr_Parchi = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> Parchi',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "Parchi",
    popuplayertitle: 'Parchi',
    creationdate: '2026-06-22 20:36:30',
    interactive: true,
});
function load_Parchi_data() {
    var format_Parchi = new ol.format.GeoJSON();
    var features_Parchi = format_Parchi.readFeatures(json_Parchi, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
    var jsonSource_Parchi = new ol.source.Vector({
    attributions:'<a class="legend"><img src="styles/legend/Parchi.png"/><b>Parchi</b>'
    });
    lyr_Parchi.setSource(jsonSource_Parchi);
    lyr_Parchi.set(
    "title", '<img src="styles/legend/Parchi.png"/>Parchi'
    );
    var featureCounter_Parchi = 1;
    jsonSource_Parchi.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Parchi++);
        feature.set("layerObject", lyr_Parchi);
    });        
    jsonSource_Parchi.addFeatures(features_Parchi);
}
applySLDstyle(lyr_Parchi, style_Parchi, 'Parchi');


var lyr_Alberi = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> Alberi',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "Alberi",
    popuplayertitle: 'Alberi',
    creationdate: '2026-06-22 20:36:30',
    interactive: false,
});
function load_Alberi_data() {
    var format_Alberi = new ol.format.GeoJSON();
    var features_Alberi = format_Alberi.readFeatures(json_Alberi, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
    var jsonSource_Alberi = new ol.source.Vector({
    attributions:'<a class="legend"><img src="styles/legend/Alberi.png"/><b>Alberi</b>'
    });
    lyr_Alberi.setSource(jsonSource_Alberi);
    lyr_Alberi.set(
    "title", '<img src="styles/legend/Alberi.png"/>Alberi'
    );
    var featureCounter_Alberi = 1;
    jsonSource_Alberi.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Alberi++);
        feature.set("layerObject", lyr_Alberi);
    });        
    jsonSource_Alberi.addFeatures(features_Alberi);
}
applySLDstyle(lyr_Alberi, style_Alberi, 'Alberi');


var lyr_EdificieStruttureOSM = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> EdificieStruttureOSM',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "EdificieStruttureOSM",
    popuplayertitle: 'Edifici e Strutture OSM',
    creationdate: '2026-06-22 20:36:30',
    interactive: true,
});
function load_EdificieStruttureOSM_data() {
    var format_EdificieStruttureOSM = new ol.format.GeoJSON();
    var features_EdificieStruttureOSM = format_EdificieStruttureOSM.readFeatures(json_EdificieStruttureOSM, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
    var jsonSource_EdificieStruttureOSM = new ol.source.Vector({
    attributions:
    '<a class="legend"><b>Edifici e Strutture OSM</b><br />\
        <img src="styles/legend/EdificieStruttureOSM_0.png"/>Panchine<br />\
        <img src="styles/legend/EdificieStruttureOSM_1.png"/>Stazioni Ferroviarie<br />\
        <img src="styles/legend/EdificieStruttureOSM_2.png"/>Centri di Comunità<br />\
        <img src="styles/legend/EdificieStruttureOSM_3.png"/>Ospedali<br />\
        <img src="styles/legend/EdificieStruttureOSM_4.png"/>Biblioteche<br />\
        <img src="styles/legend/EdificieStruttureOSM_5.png"/>Centri Commerciali<br />\
        <img src="styles/legend/EdificieStruttureOSM_6.png"/>Scuole<br />\
        <img src="styles/legend/EdificieStruttureOSM_7.png"/>Ripari<br />\
        <img src="styles/legend/EdificieStruttureOSM_8.png"/>Università<br /></a>'
        });
    lyr_EdificieStruttureOSM.setSource(jsonSource_EdificieStruttureOSM);
    lyr_EdificieStruttureOSM.set(
    "title", '<div id="layertitle">Edifici e Strutture OSM<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="bench" checked><img src="styles/legend/EdificieStruttureOSM_0.png"/>Panchine<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="building" checked><img src="styles/legend/EdificieStruttureOSM_1.png"/>Stazioni Ferroviarie<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="community_centre" checked><img src="styles/legend/EdificieStruttureOSM_2.png"/>Centri di Comunità<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="hospital" checked><img src="styles/legend/EdificieStruttureOSM_3.png"/>Ospedali<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="library" checked><img src="styles/legend/EdificieStruttureOSM_4.png"/>Biblioteche<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="mall" checked><img src="styles/legend/EdificieStruttureOSM_5.png"/>Centri Commerciali<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="school" checked><img src="styles/legend/EdificieStruttureOSM_6.png"/>Scuole<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="shelter" checked><img src="styles/legend/EdificieStruttureOSM_7.png"/>Ripari<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="university" checked><img src="styles/legend/EdificieStruttureOSM_8.png"/>Università<br /></a>'
        );
    var featureCounter_EdificieStruttureOSM = 1;
    jsonSource_EdificieStruttureOSM.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_EdificieStruttureOSM++);
        feature.set("layerObject", lyr_EdificieStruttureOSM);
    });        
    jsonSource_EdificieStruttureOSM.addFeatures(features_EdificieStruttureOSM);
}
applySLDstyle(lyr_EdificieStruttureOSM, style_EdificieStruttureOSM, 'Edifici e Strutture OSM');


var lyr_Presidisocioassistenzialianziani = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Presidisocioassistenzialianziani',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "Presidisocioassistenzialianziani",
    popuplayertitle: 'Presidi socioassistenziali anziani',
    creationdate: '2026-06-22 20:36:30',
    interactive: true,
});
function load_Presidisocioassistenzialianziani_data() {
    var format_Presidisocioassistenzialianziani = new ol.format.GeoJSON();
    var features_Presidisocioassistenzialianziani = format_Presidisocioassistenzialianziani.readFeatures(json_Presidisocioassistenzialianziani, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
    var jsonSource_Presidisocioassistenzialianziani = new ol.source.Vector({
    attributions:
    '<a class="legend"><b>Presidi socioassistenziali anziani</b><br />\
        <img src="styles/legend/Presidisocioassistenzialianziani_0.png"/>Casa Di Riposo/Casa Albergo/Albergo per Anziani<br />\
        <img src="styles/legend/Presidisocioassistenzialianziani_1.png"/>Casa Famiglia Anziani<br />\
        <img src="styles/legend/Presidisocioassistenzialianziani_2.png"/>Casa Protetta Per Anziani<br />\
        <img src="styles/legend/Presidisocioassistenzialianziani_3.png"/>Centro Diurno Per Anziani (Centro Diurno Assistenziale)<br />\
        <img src="styles/legend/Presidisocioassistenzialianziani_4.png"/>Comunita Alloggio Per Anziani<br />\
        <img src="styles/legend/Presidisocioassistenzialianziani_5.png"/>CRA<br />\
        <img src="styles/legend/Presidisocioassistenzialianziani_6.png"/>Gruppo appartamento per anziani<br />\
        <img src="styles/legend/Presidisocioassistenzialianziani_7.png"/>Residenza Protetta Per Anziani<br />\
        <img src="styles/legend/Presidisocioassistenzialianziani_8.png"/>Alloggi Con Servizi<br /></a>'
        });
    lyr_Presidisocioassistenzialianziani.setSource(jsonSource_Presidisocioassistenzialianziani);
    lyr_Presidisocioassistenzialianziani.set(
    "title", '<div id="layertitle">Presidi socioassistenziali anziani<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Casa Di Riposo/Casa Albergo/Albergo per Anziani" checked><img src="styles/legend/Presidisocioassistenzialianziani_0.png"/>Casa Di Riposo/Casa Albergo/Albergo per Anziani<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Casa Famiglia Anziani" checked><img src="styles/legend/Presidisocioassistenzialianziani_1.png"/>Casa Famiglia Anziani<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Casa Protetta Per Anziani" checked><img src="styles/legend/Presidisocioassistenzialianziani_2.png"/>Casa Protetta Per Anziani<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Centro Diurno Per Anziani (Centro Diurno Assistenziale)" checked><img src="styles/legend/Presidisocioassistenzialianziani_3.png"/>Centro Diurno Per Anziani (Centro Diurno Assistenziale)<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Comunita Alloggio Per Anziani" checked><img src="styles/legend/Presidisocioassistenzialianziani_4.png"/>Comunita Alloggio Per Anziani<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="CRA" checked><img src="styles/legend/Presidisocioassistenzialianziani_5.png"/>CRA<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Gruppo appartamento per anziani" checked><img src="styles/legend/Presidisocioassistenzialianziani_6.png"/>Gruppo appartamento per anziani<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Residenza Protetta Per Anziani" checked><img src="styles/legend/Presidisocioassistenzialianziani_7.png"/>Residenza Protetta Per Anziani<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="Alloggi Con Servizi" checked><img src="styles/legend/Presidisocioassistenzialianziani_8.png"/>Alloggi Con Servizi<br /></a>'
        );
    var featureCounter_Presidisocioassistenzialianziani = 1;
    jsonSource_Presidisocioassistenzialianziani.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Presidisocioassistenzialianziani++);
        feature.set("layerObject", lyr_Presidisocioassistenzialianziani);
    });        
    jsonSource_Presidisocioassistenzialianziani.addFeatures(features_Presidisocioassistenzialianziani);
}
applySLDstyle(lyr_Presidisocioassistenzialianziani, style_Presidisocioassistenzialianziani, 'Presidi socioassistenziali anziani');


var lyr_Casedellacomunitacensite = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Casedellacomunitacensite',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "Casedellacomunitacensite",
    popuplayertitle: 'Case della comunita censite',
    creationdate: '2026-06-22 20:36:30',
    interactive: true,
});
function load_Casedellacomunitacensite_data() {
    var format_Casedellacomunitacensite = new ol.format.GeoJSON();
    var features_Casedellacomunitacensite = format_Casedellacomunitacensite.readFeatures(json_Casedellacomunitacensite, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
    var jsonSource_Casedellacomunitacensite = new ol.source.Vector({
    attributions:
    '<a class="legend"><b>Case della comunita censite</b><br />\
        <img src="styles/legend/Casedellacomunitacensite_0.png"/>HUB<br />\
        <img src="styles/legend/Casedellacomunitacensite_1.png"/>SPOKE<br /></a>'
        });
    lyr_Casedellacomunitacensite.setSource(jsonSource_Casedellacomunitacensite);
    lyr_Casedellacomunitacensite.set(
    "title", '<div id="layertitle">Case della comunita censite<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="HUB" checked><img src="styles/legend/Casedellacomunitacensite_0.png"/>HUB<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="SPOKE" checked><img src="styles/legend/Casedellacomunitacensite_1.png"/>SPOKE<br /></a>'
        );
    var featureCounter_Casedellacomunitacensite = 1;
    jsonSource_Casedellacomunitacensite.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Casedellacomunitacensite++);
        feature.set("layerObject", lyr_Casedellacomunitacensite);
    });        
    jsonSource_Casedellacomunitacensite.addFeatures(features_Casedellacomunitacensite);
}
applySLDstyle(lyr_Casedellacomunitacensite, style_Casedellacomunitacensite, 'Case della comunita censite');


var lyr_Ospedalicensiti = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Ospedalicensiti',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "Ospedalicensiti",
    popuplayertitle: 'Ospedali censiti',
    creationdate: '2026-06-22 20:36:30',
    interactive: true,
});
function load_Ospedalicensiti_data() {
    var format_Ospedalicensiti = new ol.format.GeoJSON();
    var features_Ospedalicensiti = format_Ospedalicensiti.readFeatures(json_Ospedalicensiti, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
    var jsonSource_Ospedalicensiti = new ol.source.Vector({
    attributions:
    '<a class="legend"><b>Ospedali censiti</b><br />\
        <img src="styles/legend/Ospedalicensiti_0.png"/>STRUTTURE PUBBLICHE<br />\
        <img src="styles/legend/Ospedalicensiti_1.png"/>STRUTTURE PRIVATE<br /></a>'
        });
    lyr_Ospedalicensiti.setSource(jsonSource_Ospedalicensiti);
    lyr_Ospedalicensiti.set(
    "title", '<div id="layertitle">Ospedali censiti<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="STRUTTURE PUBBLICHE" checked><img src="styles/legend/Ospedalicensiti_0.png"/>STRUTTURE PUBBLICHE<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="STRUTTURE PRIVATE" checked><img src="styles/legend/Ospedalicensiti_1.png"/>STRUTTURE PRIVATE<br /></a>'
        );
    var featureCounter_Ospedalicensiti = 1;
    jsonSource_Ospedalicensiti.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Ospedalicensiti++);
        feature.set("layerObject", lyr_Ospedalicensiti);
    });        
    jsonSource_Ospedalicensiti.addFeatures(features_Ospedalicensiti);
}
applySLDstyle(lyr_Ospedalicensiti, style_Ospedalicensiti, 'Ospedali censiti');


var lyr_Comuni2026 = new ol.layer.Vector({
    title: '<div class="roller-switcher"></div> Comuni2026',
    source: new ol.source.Vector(), 
    sourceType: 'json',
    permalink: "Comuni2026",
    popuplayertitle: 'Comuni 2026',
    creationdate: '2026-06-22 20:36:31',
    interactive: true,
});
function load_Comuni2026_data() {
    var format_Comuni2026 = new ol.format.GeoJSON();
    var features_Comuni2026 = format_Comuni2026.readFeatures(json_Comuni2026, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
    var jsonSource_Comuni2026 = new ol.source.Vector({
    attributions:'<a class="legend"><img src="styles/legend/Comuni2026.png"/><b>Comuni 2026</b>'
    });
    lyr_Comuni2026.setSource(jsonSource_Comuni2026);
    lyr_Comuni2026.set(
    "title", '<img src="styles/legend/Comuni2026.png"/>Comuni 2026'
    );
    var featureCounter_Comuni2026 = 1;
    jsonSource_Comuni2026.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_Comuni2026++);
        feature.set("layerObject", lyr_Comuni2026);
    });        
    jsonSource_Comuni2026.addFeatures(features_Comuni2026);
}
applySLDstyle(lyr_Comuni2026, style_Comuni2026, 'Comuni 2026');


var lyr_SezionidiCensimento2021 = new ol.layer.VectorImage({
    title: '<div class="roller-switcher"></div> SezionidiCensimento2021',
    source: new ol.source.Vector(),
maxResolution:28.00446615226196,
 
    sourceType: 'json',
    permalink: "SezionidiCensimento2021",
    popuplayertitle: 'Sezioni di Censimento 2021',
    creationdate: '2026-06-22 20:36:35',
    interactive: true,
});
function load_SezionidiCensimento2021_data() {
    var format_SezionidiCensimento2021 = new ol.format.GeoJSON();
    var features_SezionidiCensimento2021 = format_SezionidiCensimento2021.readFeatures(json_SezionidiCensimento2021, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
    var jsonSource_SezionidiCensimento2021 = new ol.source.Vector({
    attributions:'<a class="legend"><img src="styles/legend/SezionidiCensimento2021.png"/><b>Sezioni di Censimento 2021</b>'
    });
    lyr_SezionidiCensimento2021.setSource(jsonSource_SezionidiCensimento2021);
    lyr_SezionidiCensimento2021.set(
    "title", '<img src="styles/legend/SezionidiCensimento2021.png"/>Sezioni di Censimento 2021'
    );
    var featureCounter_SezionidiCensimento2021 = 1;
    jsonSource_SezionidiCensimento2021.on('addfeature', function (event) {
        var feature = event.feature;
        feature.set("idO", featureCounter_SezionidiCensimento2021++);
        feature.set("layerObject", lyr_SezionidiCensimento2021);
    });        
    jsonSource_SezionidiCensimento2021.addFeatures(features_SezionidiCensimento2021);
}
applySLDstyle(lyr_SezionidiCensimento2021, style_SezionidiCensimento2021, 'Sezioni di Censimento 2021');

var lyr_Toponimi = new ol.layer.Tile({
            'title': 'Toponimi',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}@2x.png'
            })
        });
        

// Funzione per caricare e aggiornare i layer uno alla volta
    // Array per i layer visibili/non visibili all'avvio (solo layer vettori e raster)
    var layersVisibleOnStart = [
        {layer: lyr_Comuni2026, source: 'Comuni2026'},{layer: lyr_SezionidiCensimento2021, source: 'SezionidiCensimento2021'}
    ];
    var layersHiddenOnStart = [
        {layer: lyr_Indicedivulnerabilitclimatica, source: 'Indicedivulnerabilitclimatica'},{layer: lyr_Personesole, source: 'Personesole'},{layer: lyr_Personestraniere, source: 'Personestraniere'},{layer: lyr_Personeanziane, source: 'Personeanziane'},{layer: lyr_Bambini, source: 'Bambini'},{layer: lyr_Indicedideprivazionematerialeesociale2021, source: 'Indicedideprivazionematerialeesociale2021'},{layer: lyr_Baciniacquatici, source: 'Baciniacquatici'},{layer: lyr_Infrastrutturebluantropiche, source: 'Infrastrutturebluantropiche'},{layer: lyr_Parchi, source: 'Parchi'},{layer: lyr_Alberi, source: 'Alberi'},{layer: lyr_EdificieStruttureOSM, source: 'EdificieStruttureOSM'},{layer: lyr_Presidisocioassistenzialianziani, source: 'Presidisocioassistenzialianziani'},{layer: lyr_Casedellacomunitacensite, source: 'Casedellacomunitacensite'},{layer: lyr_Ospedalicensiti, source: 'Ospedalicensiti'}
    ];
    
// Funzione per ottenere il nome del progetto dall'URL
	function getProjectName() {
		const path = window.location.pathname; // Percorso completo del file
		const htmlIndex = path.lastIndexOf('.html'); // Trova la posizione di ".html"

		if (htmlIndex === -1) return 'default'; // Se non trova ".html", ritorna valore di fallback

		// Trova la barra "/" prima di ".html"
		const slashBeforeHtml = path.lastIndexOf('/', htmlIndex);
		if (slashBeforeHtml === -1) return 'default';

		// Calcola da dove iniziare a prendere i caratteri prima della barra
		const extractStart = slashBeforeHtml - 20;
		if (extractStart >= 0) {
			return path.substring(slashBeforeHtml - 20, slashBeforeHtml);
		} else if (slashBeforeHtml >= 15) {
			return path.substring(slashBeforeHtml - 15, slashBeforeHtml);
		} else if (slashBeforeHtml >= 10) {
			return path.substring(slashBeforeHtml - 10, slashBeforeHtml);
		} else {
			return 'default'; // Se troppo corto, ritorna "default"
		}
	}
    
    // Ottieni un database IndexedDB per i layer, aprilo una volta sola
	let dbInstance = null;
	async function getDatabaseForLayers(projectName) {
		if (dbInstance) return dbInstance; // già aperto
		dbInstance = await idb.openDB(`${projectName}_layerDataCache`, 1, {
			upgrade(db) {
				if (!db.objectStoreNames.contains('layers')) {
					db.createObjectStore('layers', { keyPath: 'key' });
				}
			},
		});
		return dbInstance;
	}

    // Salva i dati nel database IndexedDB con il nome del progetto
    async function saveLayerToIndexedDB(key, data) {
        const db = await getDatabaseForLayers(getProjectName());
        await db.put('layers', { key: `${key}`, value: data });
    }
    
    // Carica i dati dal database IndexedDB con il nome del progetto
    async function loadLayerFromIndexedDB(key) {
        const db = await getDatabaseForLayers(getProjectName());
        const rec = await db.get('layers', key);

        if (!rec) return null;

        // Verifica se è nel formato VECCHIO (salvato come stringa JSON)
        if (typeof rec.value === 'string') {
            try {
                // Cancella e riscrivi nel nuovo formato oggetto
                const parsed = JSON.parse(rec.value);
                await saveLayerToIndexedDB(key, parsed); // riscrive come oggetto
                return parsed;
            } catch (e) {
                console.warn(`[Cache] Il dato ${key} è corrotto o non compatibile. Verrà ignorato.`);
                await deleteLayerFromIndexedDB(key);
                return null;
            }
        }
        return rec.value;
    }

    // Salva un file JavaScript nella cache con il nome del progetto
    async function saveLayerFileToCache(projectName, fileName, dataObj, layerDate) {
	  // salvo l'oggetto JSON
	  await saveLayerToIndexedDB(
		`o_files_${projectName}_${fileName}`,
		{ json: dataObj, layerdate: layerDate }
	  );
	}

    // Carica un file JavaScript dalla cache con il nome del progetto
	async function loadLayerFileFromCache(projectName, fileName) {
	  // loadLayerFromIndexedDB ora restituisce già l'oggetto {json, layerdate}
	  const record = await loadLayerFromIndexedDB(`o_files_${projectName}_${fileName}`);
	  return record || null;
	}
	
	// Funzione per caricare il JSON source
    async function loadJSON(projectName, fileName, layerDate) {
        return new Promise((resolve, reject) => {
            // Carica il file dalla cache
            async function tryCache() {                
                const cachedFile = await loadLayerFileFromCache(projectName, fileName);
                if (cachedFile && cachedFile.layerdate === layerDate) {
					console.log(`[Cache] Load ${fileName} from ${projectName} cache - ${layerDate}`);
					// assegno direttamente la variabile JS
					const varName = `json_${fileName}`;
					window[varName] = cachedFile.json;       // <— oggetto già pronto
					resolve(fileName);
					return;
                } else if (cachedFile) {
                    console.log(`[Cache] Outdated cache for ${fileName} in ${projectName}. CachedDate=${cachedFile.layerdate}, NewDate=${layerDate}`);
                    tryLoad(`layers/${fileName}.js`);
                } else {
                    console.log(`[Cache] No cache for ${fileName} in ${projectName}. Downloading...`);
                    tryLoad(`layers/${fileName}.js`);
                }
            }
            tryCache();

            // Scarica il file dalla rete e salva nella cache
            let triedFallback = false;
            function tryLoad(src) {
                const script = document.createElement('script');
                script.src = src;
                script.onload = async () => {
                    const varName = `json_${fileName}`;
					const dataObj = window[varName];
					if (!dataObj) {
					  return reject(new Error(`Variabile ${varName} non trovata dopo il caricamento di ${src}`));
					}
					console.log(`[Network] Save ${fileName} to ${projectName} cache - ${layerDate}`);
					await saveLayerFileToCache(projectName, fileName, dataObj, layerDate);
					resolve(fileName);
                };
                document.head.appendChild(script);
            }                        
        });
    }
	
    // Carico i dati nei layer
    async function loadLayers() {
        try {
            const projectName = getProjectName();
            // Lancia il caricamento dei layer WFS subito
            const wfsLayers = [...layersVisibleOnStart, ...layersHiddenOnStart].filter(
                ({ layer }) => layer.get('sourceType') === 'wfs'
            );
            wfsLayers.forEach(({ layer, source }) => {
                window[`load_${source}_data`]();
            });
            // Carica prima i layer json visibili all'avvio
            for (const { layer, source } of layersVisibleOnStart) {
                if (layer.get('sourceType') === 'json') {
                    const layerDate = layer.get("creationdate");
                    await loadJSON(projectName, source, layerDate); // Carica il file dalla cache o dalla rete
                    window[`load_${source}_data`](); // Svolgo tutte le function load_ sopra
                }
            }
            // Carica i layer json non visibili all'avvio
            for (const { layer, source } of layersHiddenOnStart) {
                if (layer.get('sourceType') === 'json') {
                    const layerDate = layer.get("creationdate");
                    await loadJSON(projectName, source, layerDate); // Carica il file dalla cache o dalla rete
                    window[`load_${source}_data`](); // Svolgo tutte le function load_ sopra
                }
            }
    
            // Quando tutti i layer sono stati caricati e aggiornati, emetti 'layersLoaded'
            window.layersLoadedFlag = true;
            const layersLoaded = new Event('layersLoaded');
            document.dispatchEvent(layersLoaded);
        } catch (error) {
            console.error("Errore nel caricamento dei layer:", error);
            throw error;
        }
    }
    // Esegui il caricamento dei layer una volta che il DOM è pronto
    document.addEventListener("DOMContentLoaded", () => {
        loadLayers();  // Inizia il caricamento dei layer uno per volta
    });

var group_Toponimiedetichette = new ol.layer.Group({
                                layers: [lyr_Comuni2026,lyr_SezionidiCensimento2021,lyr_Toponimi,],
                                openInLayerSwitcher: true,
                                title: 'Toponimi ed etichette'});
var group_Spaziverdi = new ol.layer.Group({
                                layers: [lyr_Parchi,lyr_Alberi,],
                                openInLayerSwitcher: true,
                                title: 'Spazi verdi'});
var group_SpaziBlu = new ol.layer.Group({
                                layers: [lyr_Baciniacquatici,lyr_Infrastrutturebluantropiche,],
                                openInLayerSwitcher: true,
                                title: 'Spazi Blu'});
var group_PuntidiinteresseOSM = new ol.layer.Group({
                                layers: [group_SpaziBlu,group_Spaziverdi,lyr_EdificieStruttureOSM,],
                                openInLayerSwitcher: true,
                                title: 'Punti di interesse OSM'});
var group_Edificipubblici = new ol.layer.Group({
                                layers: [group_PuntidiinteresseOSM,lyr_Presidisocioassistenzialianziani,lyr_Casedellacomunitacensite,lyr_Ospedalicensiti,],
                                openInLayerSwitcher: false,
                                title: 'Edifici pubblici'});
var group_Vulnerabilitsanitaria = new ol.layer.Group({
                                layers: [lyr_Multicronicit,lyr_Disturbimentalieneurocognitivi,lyr_Indicedivulnerabilitsanitaria,],
                                openInLayerSwitcher: false,
                                title: 'Vulnerabilità sanitaria'});


// gruppo mutualmente escusivo                                
var isUpdating = false;
group_Vulnerabilitsanitaria.getLayers().forEach(function(layer) {
    layer.on('change:visible', function() {
        if (isUpdating) return;
        if (layer.getVisible()) {
            isUpdating = true;
            group_Vulnerabilitsanitaria.getLayers().forEach(function(other) {
                if (other !== layer) {
                    other.setVisible(false);
                }            });
            isUpdating = false;        }    }); });     
            
            
            
            



var group_VulnerabilitSocioDemografica = new ol.layer.Group({
                                layers: [lyr_Personesole,lyr_Personestraniere,lyr_Personeanziane,lyr_Bambini,lyr_Indicedideprivazionematerialeesociale2021,],
                                openInLayerSwitcher: false,
                                title: 'Vulnerabilità Socio-Demografica'});
var group_Vulnerabilitambientale = new ol.layer.Group({
                                layers: [lyr_Indicedivulnerabilitclimatica,lyr_TemperaturaSuperficiale,],
                                openInLayerSwitcher: true,
                                title: 'Vulnerabilità ambientale'});

lyr_CartoLight.setVisible(true);lyr_Indicedivulnerabilitclimatica.setVisible(false);lyr_TemperaturaSuperficiale.setVisible(true);lyr_Personesole.setVisible(false);lyr_Personestraniere.setVisible(false);lyr_Personeanziane.setVisible(false);lyr_Bambini.setVisible(false);lyr_Indicedideprivazionematerialeesociale2021.setVisible(false);lyr_FiltrodiPopolazione2025.setVisible(false);lyr_Multicronicit.setVisible(false);lyr_Disturbimentalieneurocognitivi.setVisible(false);lyr_Indicedivulnerabilitsanitaria.setVisible(false);lyr_Baciniacquatici.setVisible(false);lyr_Infrastrutturebluantropiche.setVisible(false);lyr_Parchi.setVisible(false);lyr_Alberi.setVisible(false);lyr_EdificieStruttureOSM.setVisible(false);lyr_Presidisocioassistenzialianziani.setVisible(false);lyr_Casedellacomunitacensite.setVisible(false);lyr_Ospedalicensiti.setVisible(false);lyr_Comuni2026.setVisible(true);lyr_SezionidiCensimento2021.setVisible(true);lyr_Toponimi.setVisible(true);
var layersList = [lyr_CartoLight,group_Vulnerabilitambientale,group_VulnerabilitSocioDemografica,lyr_FiltrodiPopolazione2025,group_Vulnerabilitsanitaria,group_Edificipubblici,group_Toponimiedetichette];
lyr_Indicedivulnerabilitclimatica.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Personesole.set('fieldAliases', {'fid': 'fid', 'SEZ21_ID': 'SEZ21_ID', 'decile/popolazione': 'decile/popolazione', 'Decili lonely': 'Decili lonely', });
lyr_Personestraniere.set('fieldAliases', {'fid': 'fid', 'SEZ21_ID': 'SEZ21_ID', 'Indicatori_demografici_csv_decile_foreign': 'Indicatori_demografici_csv_decile_foreign', });
lyr_Personeanziane.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'SEZ21': 'SEZ21', 'SEZ21_ID': 'SEZ21_ID', 'POP21': 'POP21', 'Indicatori_demografici_csv_age_middle_to_oldest_old_pct_ok': 'Indicatori_demografici_csv_age_middle_to_oldest_old_pct_ok', 'Indicatori_demografici_csv_pop_ok_elderly': 'Indicatori_demografici_csv_pop_ok_elderly', 'Indicatori_demografici_csv_quintile_elderly': 'Indicatori_demografici_csv_quintile_elderly', 'Indicatori_demografici_csv_decile_elderly': 'Indicatori_demografici_csv_decile_elderly', });
lyr_Bambini.set('fieldAliases', {'fid': 'fid', 'SEZ21_ID': 'SEZ21_ID', 'Indicatori_demografici_csv_decile_child': 'Indicatori_demografici_csv_decile_child', });
lyr_Indicedideprivazionematerialeesociale2021.set('fieldAliases', {'fid': 'fid', 'SEZ21_ID': 'SEZ21_ID', 'ID3_21_decili': 'ID3_21_decili', });
lyr_Baciniacquatici.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'width': 'width', 'layer': 'layer', 'path': 'path', });
lyr_Infrastrutturebluantropiche.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'path': 'path', });
lyr_Parchi.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Alberi.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_EdificieStruttureOSM.set('fieldAliases', {'fid': 'fid', 'fclass': 'fclass', 'name': 'name', 'type': 'type', 'osm_id': 'osm_id', 'code': 'code', 'layer': 'layer', 'path': 'path', 'CLUSTER_ID': 'CLUSTER_ID', 'CLUSTER_SIZE': 'CLUSTER_SIZE', });
lyr_Presidisocioassistenzialianziani.set('fieldAliases', {'fid': 'fid', 'denominazione': 'denominazione', 'tipo_struttura': 'tipo_struttura', 'lat': 'lat', 'lon': 'lon', });
lyr_Casedellacomunitacensite.set('fieldAliases', {'fid': 'fid', 'latitudine': 'latitudine', 'longitudine': 'longitudine', 'Tipo Struttura': 'Tipo Struttura', 'denominazione_2': 'denominazione_2', });
lyr_Ospedalicensiti.set('fieldAliases', {'fid': 'fid', 'Denominazione_1': 'Denominazione_1', 'Indirizzo.completo': 'Indirizzo.completo', 'Macrotipologia': 'Macrotipologia', 'Tipologia': 'Tipologia', 'Dip.emergenza': 'Dip.emergenza', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_Comuni2026.set('fieldAliases', {'fid': 'fid', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', });
lyr_SezionidiCensimento2021.set('fieldAliases', {'fid': 'fid', 'PRO_COM': 'PRO_COM', 'SEZ21_ID': 'SEZ21_ID', });
lyr_Indicedivulnerabilitclimatica.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Personesole.set('fieldImages', {'fid': 'TextEdit', 'SEZ21_ID': 'TextEdit', 'decile/popolazione': 'Range', 'Decili lonely': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Personestraniere.set('fieldImages', {'fid': 'TextEdit', 'SEZ21_ID': 'TextEdit', 'Indicatori_demografici_csv_decile_foreign': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Personeanziane.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_UTS': 'TextEdit', 'PRO_COM': 'TextEdit', 'SEZ21': 'TextEdit', 'SEZ21_ID': 'TextEdit', 'POP21': 'TextEdit', 'Indicatori_demografici_csv_age_middle_to_oldest_old_pct_ok': 'TextEdit', 'Indicatori_demografici_csv_pop_ok_elderly': 'Range', 'Indicatori_demografici_csv_quintile_elderly': 'Range', 'Indicatori_demografici_csv_decile_elderly': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Bambini.set('fieldImages', {'fid': '', 'SEZ21_ID': '', 'Indicatori_demografici_csv_decile_child': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Indicedideprivazionematerialeesociale2021.set('fieldImages', {'fid': 'TextEdit', 'SEZ21_ID': 'TextEdit', 'ID3_21_decili': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Baciniacquatici.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'width': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Infrastrutturebluantropiche.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Parchi.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Alberi.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_EdificieStruttureOSM.set('fieldImages', {'fid': '', 'fclass': '', 'name': '', 'type': '', 'osm_id': '', 'code': '', 'layer': '', 'path': '', 'CLUSTER_ID': '', 'CLUSTER_SIZE': '', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Presidisocioassistenzialianziani.set('fieldImages', {'fid': 'TextEdit', 'denominazione': 'TextEdit', 'tipo_struttura': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Casedellacomunitacensite.set('fieldImages', {'fid': 'TextEdit', 'latitudine': 'TextEdit', 'longitudine': 'TextEdit', 'Tipo Struttura': 'TextEdit', 'denominazione_2': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Ospedalicensiti.set('fieldImages', {'fid': 'TextEdit', 'Denominazione_1': 'TextEdit', 'Indirizzo.completo': 'TextEdit', 'Macrotipologia': 'TextEdit', 'Tipologia': 'TextEdit', 'Dip.emergenza': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Comuni2026.set('fieldImages', {'fid': 'TextEdit', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_SezionidiCensimento2021.set('fieldImages', {'fid': 'TextEdit', 'PRO_COM': 'TextEdit', 'SEZ21_ID': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Indicedivulnerabilitclimatica.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Personesole.set('fieldLabels', {'fid': 'no label', 'SEZ21_ID': 'no label', 'decile/popolazione': 'no label', 'Decili lonely': 'no label', });
lyr_Personestraniere.set('fieldLabels', {'fid': 'no label', 'SEZ21_ID': 'no label', 'Indicatori_demografici_csv_decile_foreign': 'no label', });
lyr_Personeanziane.set('fieldLabels', {'fid': 'no label', 'COD_REG': 'no label', 'COD_UTS': 'no label', 'PRO_COM': 'no label', 'SEZ21': 'no label', 'SEZ21_ID': 'no label', 'POP21': 'no label', 'Indicatori_demografici_csv_age_middle_to_oldest_old_pct_ok': 'no label', 'Indicatori_demografici_csv_pop_ok_elderly': 'no label', 'Indicatori_demografici_csv_quintile_elderly': 'no label', 'Indicatori_demografici_csv_decile_elderly': 'no label', });
lyr_Bambini.set('fieldLabels', {'fid': 'no label', 'SEZ21_ID': 'no label', 'Indicatori_demografici_csv_decile_child': 'no label', });
lyr_Indicedideprivazionematerialeesociale2021.set('fieldLabels', {'fid': 'no label', 'SEZ21_ID': 'no label', 'ID3_21_decili': 'no label', });
lyr_Baciniacquatici.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'inline label - visible with data', 'name': 'inline label - visible with data', 'width': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Infrastrutturebluantropiche.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'inline label - visible with data', 'name': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Parchi.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'code': 'hidden field', 'fclass': 'hidden field', 'name': 'no label', });
lyr_Alberi.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_EdificieStruttureOSM.set('fieldLabels', {'fid': 'hidden field', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', 'osm_id': 'hidden field', 'code': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'CLUSTER_ID': 'hidden field', 'CLUSTER_SIZE': 'hidden field', });
lyr_Presidisocioassistenzialianziani.set('fieldLabels', {'fid': 'hidden field', 'denominazione': 'no label', 'tipo_struttura': 'no label', 'lat': 'hidden field', 'lon': 'hidden field', });
lyr_Casedellacomunitacensite.set('fieldLabels', {'fid': 'hidden field', 'latitudine': 'hidden field', 'longitudine': 'hidden field', 'Tipo Struttura': 'no label', 'denominazione_2': 'no label', });
lyr_Ospedalicensiti.set('fieldLabels', {'fid': 'hidden field', 'Denominazione_1': 'no label', 'Indirizzo.completo': 'no label', 'Macrotipologia': 'no label', 'Tipologia': 'no label', 'Dip.emergenza': 'no label', 'latitude': 'hidden field', 'longitude': 'hidden field', });
lyr_Comuni2026.set('fieldLabels', {'fid': 'hidden field', 'PRO_COM_T': 'hidden field', 'COMUNE': 'no label', });
lyr_SezionidiCensimento2021.set('fieldLabels', {'fid': 'hidden field', 'PRO_COM': 'hidden field', 'SEZ21_ID': 'no label', });
