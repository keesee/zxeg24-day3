/////////////////////////////////////////////////////////////////////////////////////////////
// TODO /////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
// FIND ALL THE CITIES THAT ARE WITHIN X DISTANCE OF YOU
// 1. Import the city data
// 2. Setup your settings (city and maxDistance)
// 3. Find (or write) code to calculate the distance between 2 coordinate points on Earth (4 ways in this doc) - Install the packages if needed
// 4. Find your current city in the array of all cities using Array.find() - save it for later
// 5. Loop over every city in the array and calculate the distance from current city.  Keep those that are less than X (maxDistance) from your city.  Use Array.filter()
// 6. Return the number of cities that you have left in your new array after filtering


// imports
const cityData          = require('all-the-cities')                       // City data
const distanceFrom      = require('distance-from')                        // Jimmy
const calculateDistance = require('@lmeikle/calculate-distance-util')     // Chloe
const haversine         = require('haversine')                            // Clint

// Show me the first city so I know what data is available
// console.log(cityData[0])

////////////////////////////////////////////////////////////////////////////////////
// Setup ///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
var myCity      = 'Chengdu'
var maxDistance = 1000

////////////////////////////////////////////////////////////////////////////////////
// Current City ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// Find my current city
const currentCity = cityData.find(city => city.name === myCity)
// Show me the current city
// console.log(currentCity)

////////////////////////////////////////////////////////////////////////////////////
// By Hand /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
// Implementation of the Haversine equation by hand (from scratch)
// https://en.wikipedia.org/wiki/Haversine_formula
// http://www.longitudestore.com/haversine-formula.html

function byHandHaversine(lat1,lon1,lat2,lon2) {
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R     = 6371; // Radius of the earth in km
    var M     = Math  // Get the match library from javascript
    var dLat  = deg2rad(lat2-lat1)
    var dLon  = deg2rad(lon2-lon1) 
    var a     = M.sin(dLat/2) * M.sin(dLat/2) + M.cos(deg2rad(lat1)) * M.cos(deg2rad(lat2)) * M.sin(dLon/2) * M.sin(dLon/2)
    var c     = 2 * M.atan2(M.sqrt(a), M.sqrt(1-a)); 
    var d     = R * c; // Distance in km
    
    return d;
  }

  return getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2)
}

////////////////////////////////////////////////////////////////////////////////////
// Filter Valid Cities  (4 ways) ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
const final = cityData.filter(function(city){   
  // get the distance
  var dist = byHandHaversine(currentCity.lat, currentCity.lon, city.lat, city.lon)  // by hand
  // var dist = distanceFrom([currentCity.lat, currentCity.lon]).to([city.lat, city.lon]).in('km') // Jimmy
  // var dist = calculateDistance(currentCity.lat, currentCity.lon, city.lat, city.lon) // Chloe
  // var dist = haversine({ latitude: currentCity.lat, longitude: currentCity.lon },{ latitude: city.lat, longitude: city.lon }) // Clint

  // check to see if the distance is less than the max (filter)
  return dist < maxDistance
})

console.log(final, final.length)