const cityData          = require('all-the-cities')
const distanceFrom      = require('distance-from')

const cc = cityData.find(city => city.name === 'Chengdu')
const f  = cityData.filter(c => distanceFrom([cc.lat, cc.lon]).to([c.lat, c.lon]).in('km') < 1000)

console.log(f.length)