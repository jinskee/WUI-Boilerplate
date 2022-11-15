// Add all scripts to the JS folder


//Get tileset map from unit 1, and use fetch to get data to show up 
//Add leaflet library in LIB 
var WuiCc;

var waterFall;

var wuiMc;

var bridgerFoothills;

var breachieCreek;

var locations;


//function to instantiate the leaflet map
function createMap(){

    //var satellite = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});
    
    map = L.map('map', {
        center: [40, -100],
        zoom: 4,
        minZoom: 3,
        maxBounds: [
            [65, -155],
            [23, -35]
            ]
    });




//Add custom base tilelayer
var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

var Stadia_AlidadeSmooth = L.tileLayer('https://api.mapbox.com/styles/v1/jinskeep/cl0im49qp000k15muijdwfann/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiamluc2tlZXAiLCJhIjoiY2wwaWhwZWIwMDJxODNvb3Q1Mm1zMzJwMyJ9.YJAm8B6G0iBkf0wIiCKSfA', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);



var baseMaps = {
   
   'Satellite': googleSat,
   'Hill Shade': Stadia_AlidadeSmooth,
}

L.control.layers(baseMaps).addTo(map);


//call the getData function

getData(); 
getDataTwo();
getDataThree();//COMMMMMMMMEINTED OUT
getDataFour(); 
getDataFive();
};



//function to retrieve the data and place it on the map
function getData(){   //Put map in paranthesis?
    //load the data
    fetch("data/WUICC.geojson")
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            WuiCc = L.geoJson(json,{
                onEachFeature:function(feature, layer){
                    var popupContentCC = createPopupContentCC(feature);
                    layer.bindPopup(popupContentCC)
                }
                

            }).addTo(map)

            //var attributes = processData(json);
            //calcStats(json)
            //create marker options
            //callfunction to create proportional symbols
            //createPropSymbols(json, attributes);
            //createSequenceControls(attributes);
            //createLegend(attributes);
        }) 
}; 

var fly= [
    {
        id: "start",
        location:[39.16,-119.77],
        zoom: 11 //change zoom if not close enough
    },
    {
        id: "block1",
        location:[45.68, -111.03],
        zoom: 11
    },
    {
        id: "block2",
        location:[44.93, -122.65],
        zoom: 9
    }
];

function scroll(){
    fly.forEach(function(item){
        isInPosition(item.id, item.location, item.zoom)
    });
};

function isInPosition(id, location, zoom){
    var block1 = document.getElementById(id);
    var rect = block1.getBoundingClientRect();
    var block2 = document.getElementById(id);
    var rect2 = block2.getBoundingClientRect();
    y = rect.top;
    x = rect2.top;

    var topMargin = window.innerHeight / 2;

    if ((y-topMargin) < 0 && y > 0){
     map.flyTo(location, zoom, {
        animate: true,
        duration: 2
     });

    };

};

// GETTING SCROLLING STORY TO WORK 
/*function zoomLocate() {
    var latitudeCC = 39.16
    var longitudeCC = -119.77
    featuredAreas = createArray(latitudeCC, longitudeCC);
    scrollLocation(null, locations);
}; 

function createArray (latitudeCC, longitudeCC){
    var fire = [
        {
            id: "carsonCity",
            location:[latitudeCC, longitudeCC],
            zoom: 7
        },
        {
            id: "bozemanMontana",
            location:[45.68, 111.03],
            zoom: 7
        },
        {
            id: "breachieCreek",
            location:[44.93, -122.65],
            zoom:7,
        }
    ];
    return fire;
};

function scrollLocation(){
    locations.forEach(function(item){
        locatorIsInPosition(item.id, item.location, item.zoom)
    });
};

function locatorIsInPosition (id, location, zoom) {

    var locText = document.getElementById(id);
    var rect = locText.getBoundingClientRect();
    y = rect.top;

    var topMargin = window.innerHeight / 2;

    if ((y-topMargin) < 0 && y > 0) {
        map.flyTo(location, zoom, {
            animate: true,
            duration: 2
    
        });

    }

} */
function getDataTwo(){   //Put map in paranthesis?
    //load the data
    fetch("data/waterfall.geojson")
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            waterFall= L.geoJson(json,{
                onEachFeature:function(feature, layer){
                    var popupContent = createPopupContent(feature);
                    layer.bindPopup(popupContent)
                }
            }).addTo(map)
            waterFall.setStyle(style)

            //var attributes = processData(json);
            //calcStats(json)
            //create marker options
            //callfunction to create proportional symbols
            //createPropSymbols(json, attributes);
            //createSequenceControls(attributes);
            //createLegend(attributes);
        }) 
};

function getDataThree(){   //Put map in paranthesis?
    //load the data
    fetch("data/WUIMC.geojson")
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            wuiMc= L.geoJson(json,{

            }).addTo(map)

            //var attributes = processData(json);
            //calcStats(json)
            //create marker options
            //callfunction to create proportional symbols
            //createPropSymbols(json, attributes);
            //createSequenceControls(attributes);
            //createLegend(attributes);
        }) 
};

function getDataFour(){   //Put map in paranthesis?
    //load the data
    fetch("data/bridgerFoothill.geojson")
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            bridgerFoothills= L.geoJson(json,{
                onEachFeature:function(feature, layer){
                    var popupContentBFH = createPopupContentBFH(feature);
                    layer.bindPopup(popupContentBFH)
                }
            }).addTo(map)
            bridgerFoothills.setStyle(style);

            //var attributes = processData(json);
            //calcStats(json)
            //create marker options
            //callfunction to create proportional symbols
            //createPropSymbols(json, attributes);
            //createSequenceControls(attributes);
            //createLegend(attributes);
        }) 
};

function getDataFive(){   //Put map in paranthesis?
    //load the data
    fetch("data/breachieCreek.geojson")
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            breachieCreek= L.geoJson(json,{
                onEachFeature:function(feature, layer){
                    var popupContentBCF = createPopupContentBCF(feature);
                    layer.bindPopup(popupContentBCF)
                },

                //pointToLayer: pointToLayer
                
            }).addTo(map)
            breachieCreek.setStyle(style);
            //var attributes = processData(json);
            //calcStats(json)
            //create marker options
            //callfunction to create proportional symbols
            //createPropSymbols(json, attributes);
            //createSequenceControls(attributes);
            //createLegend(attributes);
        }) 
};

function createPopupContent(feature){
    var popupContent = "<p><b>Fire:</b> " + feature.properties.INCDNT_NM +
        "</p><p><b>Year:</b> " +feature.properties.Year +
        "</p><p><b>Total Acres:</b> " + feature.properties.GIS_ACRES +
        "</p><p><b>Structures Lost:</b> " + feature.properties.Homes +
        "</p><p><b>Cause:</b> " + feature.properties.Cause;
    return popupContent
};
function createPopupContentCC(feature){
    var popupContentCC = "<p><b>Area:</b> " + feature.properties.name +
        "</p><p><b>Acres of WUI:</b> " + feature.properties.Acres;
    return popupContentCC
};
function createPopupContentBFH(feature){
    var popupContentBFH = "<p><b>Fire:</b> " + feature.properties.FIRENAME +
    "</p><p><b>Year:</b> " +feature.properties.FIREYEAR +
    "</p><p><b>Total Acres:</b> " + feature.properties.TOTALACRES +
    "</p><p><b>Structures Lost:</b> " + feature.properties.homes +
    "</p><p><b>Cause:</b> " + feature.properties.cause;
return popupContentBFH
};

function createPopupContentBCF(feature){
    var popupContentBCF = "<p><b>Fire:</b> " + feature.properties.FIRENAME +
    "</p><p><b>Year:</b> " +feature.properties.FIREYEAR +
    "</p><p><b>Total Acres:</b> " + feature.properties.TOTALACRES +
    "</p><p><b>Structures Lost:</b> " + feature.properties.homes +
    "</p><p><b>Cause:</b> " + feature.properties.cause;
return popupContentBCF
};

function style(){
    return {
        fillOpacity: 0.5,
        fillColor: "#f8961e",
        color: "#f8961e"

    }
}




/*function pointToLayer(feature, latlng){

    var options = {
        color: "#FFA500",
        opacity: 1,
        fillOpacity: 0.5
    };

    var layer = L.circleMarker(latlng, options)

    return layer;
};*/
document.addEventListener('DOMContentLoaded', createMap)
//document.addEventListener('DOMContentLoaded', zoomLocate)
document.addEventListener('scroll', scroll)