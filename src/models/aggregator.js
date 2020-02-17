const countBy = require('lodash/countBy')
const keys = require('object-keys')

class Aggregator {
  static getVehicleCount(vehicles) {
    const vehicleCount = typeof vehicles === 'object' && keys(vehicles).length
    return vehicleCount || 0
  }

  static getVehicleCountByModelYear(vehicles) {
    return countBy(vehicles, 'modelYear')
  }

  static getVehicleCountByPurchaseYear(vehicles) {
    const vehiclePurchaseYears = Object.values(vehicles).map(v => ({
      purchaseYear: new Date(v.purchaseDate).getFullYear(),
    }))

    return countBy(vehiclePurchaseYears, 'purchaseYear')
  }

  static getTotalPurchasePrice(vehicles) {
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
  static getAggregateData(vehicles) {
    return {
      vehicleCount: getVehicleCount(vehicles),
      vehicleCountByModelYear: getVehicleCountByModelYear(vehicles),
      vehicleCountByPurchaseYear: getVehicleCountByPurchaseYear(vehicles),
      totalPurchasePrice: getTotalPurchasePrice(vehicles),
    }
  }
}

module.exports = Aggregator
