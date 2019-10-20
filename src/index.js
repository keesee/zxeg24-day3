const cityData = require('all-the-cities')
const bigCityObject = {}

let citiesInChina = cityData.filter(function(city) {
    return city.country
})

const bigCities = cityData.filter(function(city) {
    return city.population > 10000000
})


for (ii=0; ii < cityData.length; ii++) {
    const item = cityData[ii]
    const name = item.name
    const country = item.country

    if (!bigCityObject[country]) {
        bigCityObject[country] = []
    }


    bigCityObject[country].push(item)

}







console.log(bigCityObject)