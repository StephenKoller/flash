const FileIO = require('./file-io')
const Aggregator = require('./aggregator')
const { vehicles, getByVin } = require('./vehicle')
// FileIO.writeJson('./data/vehicles.json', vehicles)

FileIO.readJson('./data/vehicles.json', results => {
  // console.log(Aggregator.getAggregateData(results))

  console.log(getByVin(Object.values(results), 'VBNL09NCFASUBV5XT'))
})
