const uuid = require('uuid')
const ClaimsHistory = require('../models/claims-history')
const randexp = require('randexp').randexp
const sample = require('lodash/sample')
const getMakeAndModel = require('../data/brands-with-models')
const STATES = require('../data/states')

const vehicles = {}

/* Design a data structure for a single car that
 *   - Has a unique id
 *   - Contains the properties
 *   - Year, make, model, purchase value, VIN, license plate state, and number
 *   - Contains the claim history
 *   - Claim history details varies by company [arbitrary objects]
 *   - Claim history details are always the same for a given company
 *
 * See ./vehicleSchema.json for the JSONSchema representation
 */

const generateVehicle = () => {
  const id = uuid.v4()
  const vin = randexp('([A-HJ-NPR-Z0-9]{17})')

  // storing the vehicles in an object using the VIN as a key allows
  // for rapid lookup because non-scalar objects behave as associative arrays
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
  return vehicles[vin]
}

module.exports = { generateVehicle, vehicles }
