const uuid = require('uuid')
const ClaimsHistory = require('./claims-history')
const randexp = require('randexp').randexp

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
  vin: randexp('([A-HJ-NPR-Z0-9]{17})'),
  licensePlateState: 'MI',
  licensePlateNumber: 'FL337',
  claims: new ClaimsHistory(vehicleID),
}

const vehicles = {
  0: vehicle,
  1: { ...vehicle, modelYear: 2019, vin: randexp('([A-HJ-NPR-Z0-9]{17})') },
  2: { ...vehicle, modelYear: 2019, vin: randexp('([A-HJ-NPR-Z0-9]{17})') },
}

const getByVin = (data, vin) => data.find(v => v.vin === vin)

module.exports = { vehicle, vehicles, getByVin }
