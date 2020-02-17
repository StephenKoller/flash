const uuid = require('uuid')
const ClaimsHistory = require('./claims-history')
const randexp = require('randexp').randexp
const sample = require('lodash/sample')
const getMakeAndModel = require('./brands-with-models')
const STATES = require('./states')

const generateVehicle = () => {
  const id = uuid.v4()
  const vin = randexp('([A-HJ-NPR-Z0-9]{17})')
  vehicles[vin] = {
    id,
    createdDate: new Date(),
    modifiedDate: new Date(),
    ...getMakeAndModel(),
    purchaseDate: new Date(
      randexp('(1[0-2]|[1-9])-(3[01]|[12][0-9]|[1-9])-(199|200|201)[0-9]{1}'),
    ),
    purchaseValue: parseInt(randexp('[0-9]{7}'), 10),
    modelYear: parseInt(randexp('(199|200|201)[0-9]{1}')),
    vin,
    licensePlateNumber: randexp('[A-HJ-NPR-Z0-9]{7}'),
    licensePlateState: sample(STATES),
    claims: new ClaimsHistory(id).claims,
  }
}

const vehicles = {}

module.exports = { generateVehicle, vehicles }
