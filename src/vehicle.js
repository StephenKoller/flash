const uuid = require('uuid')
const ClaimsHistory = require('./claims-history')
const randexp = require('randexp').randexp
const sample = require('lodash/sample')

const STATES = {
  ALABAMA: 'AL',
  ALASKA: 'AK',
  ARIZONA: 'AZ',
  ARKANSAS: 'AR',
  CALIFORNIA: 'CA',
  COLORADO: 'CO',
  CONNECTICUT: 'CT',
  DELAWARE: 'DE',
  DISTRICT_OF_COLUMBIA: 'DC',
  FLORIDA: 'FL',
  GEORGIA: 'GA',
  HAWAII: 'HI',
  IDAHO: 'ID',
  ILLINOIS: 'IL',
  INDIANA: 'IN',
  IOWA: 'IA',
  KANSAS: 'KS',
  KENTUCKY: 'KY',
  LOUISIANA: 'LA',
  MAINE: 'ME',
  MARYLAND: 'MD',
  MASSACHUSETTS: 'MA',
  MICHIGAN: 'MI',
  MINNESOTA: 'MN',
  MISSISSIPPI: 'MS',
  MISSOURI: 'MO',
  MONTANA: 'MT',
  NEBRASKA: 'NE',
  NEVADA: 'NV',
  NEW_HAMPSHIRE: 'NH',
  NEW_JERSEY: 'NJ',
  NEW_MEXICO: 'NM',
  NEW_YORK: 'NY',
  NORTH_CAROLINA: 'NC',
  NORTH_DAKOTA: 'ND',
  OHIO: 'OH',
  OKLAHOMA: 'OK',
  OREGON: 'OR',
  PENNSYLVANIA: 'PA',
  PUERTO_RICO: 'PR',
  RHODE_ISLAND: 'RI',
  SOUTH_CAROLINA: 'SC',
  SOUTH_DAKOTA: 'SD',
  TENNESSEE: 'TN',
  TEXAS: 'TX',
  UTAH: 'UT',
  VERMONT: 'VT',
  VIRGINIA: 'VA',
  WASHINGTON: 'WA',
  WEST_VIRGINIA: 'WV',
  WISCONSIN: 'WI',
  WYOMING: 'WY',
}

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
  1: {
    ...vehicle,
    modelYear: parseInt(randexp('(199|200|201)[0-9]{1}')),
    vin: randexp('([A-HJ-NPR-Z0-9]{17})'),
    licensePlateNumber: randexp('[A-HJ-NPR-Z0-9]{7}'),
    licensePlateState: sample(STATES),
  },
  2: {
    ...vehicle,
    modelYear: parseInt(randexp('(199|200|201)[0-9]{1}')),
    vin: randexp('([A-HJ-NPR-Z0-9]{17})'),
    licensePlateNumber: randexp('[A-HJ-NPR-Z0-9]{7}'),
    licensePlateState: sample(STATES),
  },
  2: {
    ...vehicle,
    modelYear: parseInt(randexp('(199|200|201)[0-9]{1}')),
    vin: randexp('([A-HJ-NPR-Z0-9]{17})'),
    licensePlateNumber: randexp('[A-HJ-NPR-Z0-9]{7}'),
    licensePlateState: sample(STATES),
  },
  2: {
    ...vehicle,
    modelYear: parseInt(randexp('(199|200|201)[0-9]{1}')),
    vin: randexp('([A-HJ-NPR-Z0-9]{17})'),
    licensePlateNumber: randexp('[A-HJ-NPR-Z0-9]{7}'),
    licensePlateState: sample(STATES),
  },
}

const getByVin = (data, vin) => data.find(v => v.vin === vin)

module.exports = { vehicle, vehicles, getByVin }
