const FileIO = require('./file-io')
// const Aggregator = require('./aggregator')
const { getByVin } = require('./vehicle')
// FileIO.writeJson('./data/vehicles.json', vehicles)

FileIO.readJson('./data/vehicles.json', results => {
  // console.log(Aggregator.getAggregateData(results[0]))

  console.log(getByVin(Object.values(results[0]), 'Z15U28CLLZEJ4H4X0'))
})
