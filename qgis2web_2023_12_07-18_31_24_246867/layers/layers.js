var wms_layers = [];


        var lyr_Googlesatellite_0 = new ol.layer.Tile({
            'title': 'Google satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Faults_Mikroz_cropped_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Faults_Mikroz_cropped",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Faults_Mikroz_cropped_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2794889.655407, 4208774.898679, 2796542.639031, 4210311.523003]
                            })
                        });
var format_possible_faults_2 = new ol.format.GeoJSON();
var features_possible_faults_2 = format_possible_faults_2.readFeatures(json_possible_faults_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_possible_faults_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_possible_faults_2.addFeatures(features_possible_faults_2);
var lyr_possible_faults_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_possible_faults_2, 
                style: style_possible_faults_2,
                interactive: true,
                title: '<img src="styles/legend/possible_faults_2.png" /> possible_faults'
            });
var format_visible_faults_3 = new ol.format.GeoJSON();
var features_visible_faults_3 = format_visible_faults_3.readFeatures(json_visible_faults_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_visible_faults_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_visible_faults_3.addFeatures(features_visible_faults_3);
var lyr_visible_faults_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_visible_faults_3, 
                style: style_visible_faults_3,
                interactive: true,
                title: '<img src="styles/legend/visible_faults_3.png" /> visible_faults'
            });
var format_faults_major_4 = new ol.format.GeoJSON();
var features_faults_major_4 = format_faults_major_4.readFeatures(json_faults_major_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_faults_major_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_faults_major_4.addFeatures(features_faults_major_4);
var lyr_faults_major_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_faults_major_4, 
                style: style_faults_major_4,
                interactive: true,
                title: '<img src="styles/legend/faults_major_4.png" /> faults_major'
            });
var format_SeisimicLines_5 = new ol.format.GeoJSON();
var features_SeisimicLines_5 = format_SeisimicLines_5.readFeatures(json_SeisimicLines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SeisimicLines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeisimicLines_5.addFeatures(features_SeisimicLines_5);
var lyr_SeisimicLines_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SeisimicLines_5, 
                style: style_SeisimicLines_5,
                interactive: true,
    title: 'Seisimic Lines<br />\
    <img src="styles/legend/SeisimicLines_5_0.png" /> 1<br />\
    <img src="styles/legend/SeisimicLines_5_1.png" /> 2<br />\
    <img src="styles/legend/SeisimicLines_5_2.png" /> <br />'
        });
var format_egsa_6 = new ol.format.GeoJSON();
var features_egsa_6 = format_egsa_6.readFeatures(json_egsa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_egsa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_egsa_6.addFeatures(features_egsa_6);
var lyr_egsa_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_egsa_6, 
                style: style_egsa_6,
                interactive: true,
                title: '<img src="styles/legend/egsa_6.png" /> egsa'
            });
var format_egsa1_7 = new ol.format.GeoJSON();
var features_egsa1_7 = format_egsa1_7.readFeatures(json_egsa1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_egsa1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_egsa1_7.addFeatures(features_egsa1_7);
var lyr_egsa1_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_egsa1_7, 
                style: style_egsa1_7,
                interactive: true,
                title: '<img src="styles/legend/egsa1_7.png" /> egsa1'
            });

lyr_Googlesatellite_0.setVisible(true);lyr_Faults_Mikroz_cropped_1.setVisible(true);lyr_possible_faults_2.setVisible(true);lyr_visible_faults_3.setVisible(true);lyr_faults_major_4.setVisible(true);lyr_SeisimicLines_5.setVisible(true);lyr_egsa_6.setVisible(true);lyr_egsa1_7.setVisible(true);
var layersList = [lyr_Googlesatellite_0,lyr_Faults_Mikroz_cropped_1,lyr_possible_faults_2,lyr_visible_faults_3,lyr_faults_major_4,lyr_SeisimicLines_5,lyr_egsa_6,lyr_egsa1_7];
lyr_possible_faults_2.set('fieldAliases', {'LAYER': 'LAYER', });
lyr_visible_faults_3.set('fieldAliases', {'LAYER': 'LAYER', });
lyr_faults_major_4.set('fieldAliases', {'Id': 'Id', 'Code': 'Code', });
lyr_SeisimicLines_5.set('fieldAliases', {'id': 'id', 'Seism_Line': 'Seism_Line', 'By': 'By', });
lyr_egsa_6.set('fieldAliases', {'χ': 'χ', 'Y': 'Y', 'H': 'H', 'ID': 'ID', });
lyr_egsa1_7.set('fieldAliases', {'χ': 'χ', 'Y': 'Y', 'H': 'H', 'ID': 'ID', });
lyr_possible_faults_2.set('fieldImages', {'LAYER': 'TextEdit', });
lyr_visible_faults_3.set('fieldImages', {'LAYER': 'TextEdit', });
lyr_faults_major_4.set('fieldImages', {'Id': 'Range', 'Code': 'TextEdit', });
lyr_SeisimicLines_5.set('fieldImages', {'id': 'TextEdit', 'Seism_Line': 'TextEdit', 'By': 'TextEdit', });
lyr_egsa_6.set('fieldImages', {'χ': 'TextEdit', 'Y': 'TextEdit', 'H': 'TextEdit', 'ID': 'TextEdit', });
lyr_egsa1_7.set('fieldImages', {'χ': 'TextEdit', 'Y': 'TextEdit', 'H': 'TextEdit', 'ID': 'TextEdit', });
lyr_possible_faults_2.set('fieldLabels', {'LAYER': 'no label', });
lyr_visible_faults_3.set('fieldLabels', {'LAYER': 'no label', });
lyr_faults_major_4.set('fieldLabels', {'Id': 'no label', 'Code': 'no label', });
lyr_SeisimicLines_5.set('fieldLabels', {'id': 'no label', 'Seism_Line': 'no label', 'By': 'no label', });
lyr_egsa_6.set('fieldLabels', {'χ': 'no label', 'Y': 'no label', 'H': 'no label', 'ID': 'no label', });
lyr_egsa1_7.set('fieldLabels', {'χ': 'no label', 'Y': 'inline label', 'H': 'no label', 'ID': 'no label', });
lyr_egsa1_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});