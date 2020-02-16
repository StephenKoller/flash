const uuid = require('uuid')
const ClaimsHistory = require('./claims-history')

const vehicleID = uuid.v4()

const vehicle = {
  id: vehicleID,
  createdDate: new Date(),
  modifiedDate: new Date(),
  make: 'Toyota',
  model: 'Prius',
  modelYear: 2020,
  purchaseDate: new Date('01-01-2020'),
  purchaseValue: 3000000,
  vin: '',
  licensePlateState: 'MI',
  licensePlateNumber: 'FL337',
  claims: new ClaimsHistory(vehicleID),
}

module.exports = vehicle
