const { generateVehicle, vehicles } = require('../models/vehicle')
const { writeJson } = require('../utils/file-io')

const postInstall = () => {
  try {
    for (let index = 0; index < 10; index++) {
      generateVehicle()
    }
    writeJson('../data/vehicles.json', vehicles)
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

postInstall()
