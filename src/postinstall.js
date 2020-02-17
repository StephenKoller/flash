const { generateVehicle, vehicles } = require('./vehicle')
const FileIO = require('./file-io')

const postInstall = () => {
  try {
    for (let index = 0; index < 10; index++) {
      generateVehicle()
    }
    FileIO.writeJson('./data/vehicles.json', vehicles)
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

postInstall()
