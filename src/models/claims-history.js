const uuid = require('uuid')
const faker = require('faker')
const sample = require('lodash/sample')
const randexp = require('randexp').randexp

const AT_FAULT = {
  EMPLOYEE: 0,
  OTHER_DRIVER: 1,
  ACT_OF_GOD: 2,
}

const generateClaimHistory = vehicleID => [
  {
    id: uuid.v4(),
    createdDate: new Date(),
    modifiedDate: new Date(),
    incidentDate: new Date(
      randexp('(1[0-2]|[1-9])-(3[01]|[12][0-9]|[1-9])-(199|200|201)[0-9]{1}'),
    ),
    atFault: sample(AT_FAULT),
    employee: {
      id: uuid.v4(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    },
    vehicle: vehicleID,
    details: {},
  },
]

module.exports = generateClaimHistory
