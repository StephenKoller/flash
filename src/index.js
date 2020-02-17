const FileIO = require('./file-io')
// const vehicles = require('./vehicle')
const countBy = require('lodash/countBy')
const keys = require('object-keys')

// FileIO.writeJson('./data/vehicles.json', vehicles)

FileIO.readJson('./data/vehicles.json', results => {
  const vehicles = results[0]

  const count = keys(vehicles).length
  console.log(`${count} vehicles tracked`)

  const countByYear = countBy(vehicles, 'modelYear')
  console.log(countByYear)

  const totalPurchasePrice = keys(vehicles)
    .map(i => vehicles[i])
    .map(v => v.purchaseValue)
    .reduce((acc, cur) => acc + cur)

  console.log(totalPurchasePrice)
})
