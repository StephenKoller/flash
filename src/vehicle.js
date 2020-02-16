const uuid = require('uuid')

const vehicle = {
  id: uuid.v4(),
  createdDate: new Date(),
  modifiedDate: new Date(),
  make: 'Toyota',
  model: 'Prius',
  modelYear: 2020,
  purchaseDate: new Date('01-01-2020'),
  purchaseValue: 3000000,
  vin: '',
  licensePlateState: 'MI',
  licensePlateNumber: 'FL337'
}

module.exports = vehicle
