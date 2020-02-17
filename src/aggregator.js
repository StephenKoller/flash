const FileIO = require('./file-io')
const countBy = require('lodash/countBy')
const keys = require('object-keys')

class Aggregator {
  static getVehicleCount() {
    FileIO.readJson('./data/vehicles.json', results => {
      const vehicles = results[0]
      this.vehicleCount = keys(vehicles).length
      console.log(this.vehicleCount)
      return this.vehicleCount
    })
  }

  static getVehicleCountByModelYear() {
    FileIO.readJson('./data/vehicles.json', results => {
      const vehicles = results[0]
      this.vehicleCountByModelYear = countBy(vehicles, 'modelYear')
      console.log(this.vehicleCountByModelYear)
      return this.vehicleCountByModelYear
    })
  }

  static getVehicleCountByPurchaseYear() {
    FileIO.readJson('./data/vehicles.json', results => {
      const vehicles = results[0]
      const vehiclePurchaseYears = Object.values(vehicles).map(v => ({
        purchaseYear: new Date(v.purchaseDate).getFullYear(),
      }))

      this.vehicleCountByPurchaseYear = countBy(
        vehiclePurchaseYears,
        'purchaseYear',
      )
      console.log(this.vehicleCountByPurchaseYear)
      return this.vehicleCountByPurchaseYear
    })
  }

  static getTotalPurchasePrice() {
    FileIO.readJson('./data/vehicles.json', results => {
      const vehicles = results[0]
      this.totalPurchasePrice = keys(vehicles)
        .map(i => vehicles[i])
        .map(v => v.purchaseValue)
        .reduce((acc, cur) => acc + cur)

      console.log(this.totalPurchasePrice)
      return this.totalPurchasePrice
    })
  }
}

module.exports = Aggregator
