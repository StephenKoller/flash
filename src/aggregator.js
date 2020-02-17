const countBy = require('lodash/countBy')
const keys = require('object-keys')

class Aggregator {
  static getVehicleCount(vehicles) {
    this.vehicleCount = typeof vehicles === 'object' && keys(vehicles).length
    return this.vehicleCount || 0
  }

  static getVehicleCountByModelYear(vehicles) {
    this.vehicleCountByModelYear = countBy(vehicles, 'modelYear')
    return this.vehicleCountByModelYear
  }

  static getVehicleCountByPurchaseYear(vehicles) {
    const vehiclePurchaseYears = Object.values(vehicles).map(v => ({
      purchaseYear: new Date(v.purchaseDate).getFullYear(),
    }))

    this.vehicleCountByPurchaseYear = countBy(
      vehiclePurchaseYears,
      'purchaseYear',
    )
    return this.vehicleCountByPurchaseYear
  }

  static getTotalPurchasePrice(vehicles) {
    this.totalPurchasePrice = keys(vehicles)
      .map(i => vehicles[i])
      .map(v => v.purchaseValue)
      .reduce((acc, cur) => acc + cur)

    return this.totalPurchasePrice
  }

  static getAggregateData(vehicles) {
    this.getVehicleCount(vehicles)
    this.getVehicleCountByModelYear(vehicles)
    this.getVehicleCountByPurchaseYear(vehicles)
    this.getTotalPurchasePrice(vehicles)
    return {
      vehicleCount: this.vehicleCount,
      vehicleCountByModelYear: this.vehicleCountByModelYear,
      vehicleCountByPurchaseYear: this.vehicleCountByPurchaseYear,
      totalPurchasePrice: this.totalPurchasePrice,
    }
  }
}

module.exports = Aggregator
