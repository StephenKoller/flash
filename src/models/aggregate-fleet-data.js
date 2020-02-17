const countBy = require('lodash/countBy')
const keys = require('object-keys')

/* Design a data structure that contains aggregated metrics for the fleet:
 * - Total count
 * - Count by year (note: unclear whether model year, purchase year, or year in service)
 * - Total purchase price
 *
 * see aggregate-fleet-data-schema.json for shape
 */
// aggregateFleetData = {
//   vehicleCount: 0,
//   vehicleCountByModelYear: {},
//   vehicleCountByPurchaseYear: {},
//   totalPurchasePrice: 0,
// }

const getVehicleCount = vehicles => {
  const vehicleCount = typeof vehicles === 'object' && keys(vehicles).length
  return vehicleCount || 0
}

const getVehicleCountByModelYear = vehicles => countBy(vehicles, 'modelYear')

const getVehicleCountByPurchaseYear = vehicles => {
  const vehiclePurchaseYears = Object.values(vehicles).map(v => ({
    purchaseYear: new Date(v.purchaseDate).getFullYear(),
  }))

  return countBy(vehiclePurchaseYears, 'purchaseYear')
}

const getTotalPurchasePrice = vehicles => {
  return keys(vehicles)
    .map(i => vehicles[i])
    .map(v => v.purchaseValue)
    .reduce((acc, cur) => acc + cur)
}

/* Requirement #3:
 * Write a method that
 *  - Takes a list of car data structures
 *  - Returns an aggregated data structure
 */
const getAggregateFleetData = vehicles => ({
  vehicleCount: getVehicleCount(vehicles),
  vehicleCountByModelYear: getVehicleCountByModelYear(vehicles),
  vehicleCountByPurchaseYear: getVehicleCountByPurchaseYear(vehicles),
  totalPurchasePrice: getTotalPurchasePrice(vehicles),
})

module.exports = {
  getAggregateFleetData,
  getVehicleCount,
  getVehicleCountByModelYear,
  getVehicleCountByPurchaseYear,
  getTotalPurchasePrice,
}
