// Add console.log to check to see if our code is working.
//console.log("working");

// Create the map object with a center and zoom level.
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


//var marker = L.marker([51.5, -0.09]).addTo(map);


//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

//L.circle([34.0522, -118.2437], {
    //radius: 20000
 //}).addTo(map);

// Get data from cities.js
//let cityData = cities;

// Loop through the cities array and create one marker for each city.
//cityData.forEach(function(city) {
    //console.log(city)
    //L.circleMarker(city.location, {
       // radius: city.population/200000,
       // lineweight: 4,
      //  color: 'orange'
   // })
   // .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>").addTo(map)
  //.addTo(map);
//});

//L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
   // attribution: '<a href="https://www.mapbox.com/">Mapbox</a>',
  //  maxZoom: 18,
  //  id: 'mapbox/dark-v10',
  //  tileSize: 512,
   // zoomOffset: -1,
   // accessToken: API_KEY
//}).addTo(map);


// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
//let line = [
    //[33.9416, -118.4085],
    //[37.6214, -122.3790],
    //[40.7899, -111.9791],
    //[47.4502, -122.3088]
  //];

  // Create a polyline using the line coordinates and make the line red.
//L.polyline(line, {
    //color: "blue"
  //}).addTo(map);

  //let line = [
    //[37.61522, -122.389],
    //[30.20212, -97.6681],
    //[43.67852, -79.6291],
    //[40.64176, -73.7809]
  //];

  //L.polyline(line, {
    //color: "blue",
    //lineweight: 4,
   // dashArray: "10 10",
   // opacity: 0.5
  //}).addTo(map);

  // Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"14",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};
// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport).addTo(map);

  

