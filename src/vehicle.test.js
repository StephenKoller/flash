const vehicle = require('./vehicle')
var validate = require('jsonschema').validate
const vehicleSchema = require('./vehicle-schema')

describe('generateVehicle', () => {
  test('should generate vehicle that matches its schema', () => {
    const testVehicle = vehicle.generateVehicle()
    expect(validate(testVehicle, vehicleSchema).errors).toHaveLength(0)
  })
})
