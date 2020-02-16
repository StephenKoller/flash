const FileIO = require('./file-io')
const vehicle = require('./vehicle')

FileIO.writeJson('./data/vehicles.json', vehicle)
console.log(FileIO.readJson('./data/vehicles.json'))
