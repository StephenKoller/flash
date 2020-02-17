const countBy = require('lodash/countBy')
const keys = require('object-keys')

/* Design a data structure that contains aggregated metrics for the fleet:
 * - Total count
 * - Count by year
 * - Total purchase price
 */
const aggregator = {
  getVehicleCount(vehicles) {
    const vehicleCount = typeof vehicles === 'object' && keys(vehicles).length
    return vehicleCount || 0
  },

  getVehicleCountByModelYear(vehicles) {
    return countBy(vehicles, 'modelYear')
  },

  getVehicleCountByPurchaseYear(vehicles) {
    const vehiclePurchaseYears = Object.values(vehicles).map(v => ({
      purchaseYear: new Date(v.purchaseDate).getFullYear(),
    }))

    return countBy(vehiclePurchaseYears, 'purchaseYear')
  },

  getTotalPurchasePrice(vehicles) {
    return keys(vehicles)
      .map(i => vehicles[i])
      .map(v => v.purchaseValue)
      .reduce((acc, cur) => acc + cur)
  },

  /* Requirement #3:
   * Write a method that
   *  - Takes a list of car data structures
   *  - Returns an aggregated data structure
   */
  getAggregateData(vehicles) {
    return {
      vehicleCount: getVehicleCount(vehicles),
      vehicleCountByModelYear: getVehicleCountByModelYear(vehicles),
      vehicleCountByPurchaseYear: getVehicleCountByPurchaseYear(vehicles),
      totalPurchasePrice: getTotalPurchasePrice(vehicles),
    }
  },
}

module.exports = aggregator
