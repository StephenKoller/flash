const uuid = require('uuid')
const faker = require('faker')

const AT_FAULT = {
  EMPLOYEE: 0,
  OTHER_DRIVER: 1,
  ACT_OF_GOD: 2,
}

class ClaimsHistory {
  constructor(vehicleID) {
    this.claims = [
      {
        id: uuid.v4(),
        createdDate: new Date(),
        modifiedDate: new Date(),
        incidentDate: new Date('01-15-2020'),
        atFault: AT_FAULT.EMPLOYEE,
        employee: {
          id: uuid.v4(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
        },
        vehicle: vehicleID,
        details: {},
      },
    ]
  }
}

module.exports = ClaimsHistory
