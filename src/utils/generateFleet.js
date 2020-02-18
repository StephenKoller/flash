const { generateVehicle, vehicles } = require('../models/vehicle')
const { writeJson } = require('./file-io')
const randexp = require('randexp').randexp

const generateFleet = () => {
  try {
    for (let index = 0; index < randexp('[0-5][0-9]'); index++) {
      generateVehicle()
    }
    writeJson('../data/vehicles.json', vehicles)
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

generateFleet()
