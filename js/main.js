// Add all scripts to the JS folder


//Get tileset map from unit 1, and use fetch to get data to show up 
//Add leaflet library in LIB 
var WuiCc;

var waterFall;

var wuiMc;


//function to instantiate the leaflet map
function createMap(){
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
var Stadia_AlidadeSmooth = L.tileLayer('https://api.mapbox.com/styles/v1/jinskeep/cl0im49qp000k15muijdwfann/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiamluc2tlZXAiLCJhIjoiY2wwaWhwZWIwMDJxODNvb3Q1Mm1zMzJwMyJ9.YJAm8B6G0iBkf0wIiCKSfA', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);


//call the getData function

getData(); 
getDataTwo();
getDataThree();//COMMMMMMMMEINTED OUT
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
function getDataTwo(){   //Put map in paranthesis?
    //load the data
    fetch("data/waterfall.geojson")
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            waterFall= L.geoJson(json,{

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
document.addEventListener('DOMContentLoaded', createMap)