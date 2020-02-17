const uuid = require('uuid')
const ClaimsHistory = require('./claims-history')
const randexp = require('randexp').randexp
const sample = require('lodash/sample')
const getMakeAndModel = require('./brandsWithModels')
const STATES = require('./states')

const generateVehicle = () => {
  const vehicleID = uuid.v4()
  return {
    id: vehicleID,
    createdDate: new Date(),
    modifiedDate: new Date(),
    ...getMakeAndModel(),
    purchaseDate: new Date(
      randexp('(1[0-2]|[1-9])-(3[01]|[12][0-9]|[1-9])-(199|200|201)[0-9]{1}'),
    ),
    purchaseValue: randexp('[0-9]{7}'),
    modelYear: parseInt(randexp('(199|200|201)[0-9]{1}')),
    vin: randexp('([A-HJ-NPR-Z0-9]{17})'),
    licensePlateNumber: randexp('[A-HJ-NPR-Z0-9]{7}'),
    licensePlateState: sample(STATES),
    claims: new ClaimsHistory(vehicleID).claims,
  }
}

const vehicles = {
  0: generateVehicle(),
  1: generateVehicle(),
  2: generateVehicle(),
  3: generateVehicle(),
  4: generateVehicle(),
}

const getByVin = (data, vin) => data.find(v => v.vin === vin)

module.exports = { generateVehicle, vehicles, getByVin }
