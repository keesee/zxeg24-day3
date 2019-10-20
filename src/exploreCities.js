// all cities by tier (in china)
// create a list of tiers
// filter by china
// create an object
// loop tiers
// loop
/////  add the cities to arrays by tier

const cityData = require('all-the-cities')



finalData = {}

const tiers = [15000000, 10000000, 5000000, 2000000, 1000000, 500000, 100000, 10000, 1000]
chinaData = cityData.filter(city => city.country === 'CN')


tiers.forEach(function(tier,ii){
    var tierNum = ii + 1
    var tierName = 'tier-' + tierNum

    if (!finalData[tierName]) {  finalData[tierName] = [] }

})


chinaData.forEach(function(city) {
    var name = city.name
    var pop = city.population

    var tier = -1

})

console.log(finalData)