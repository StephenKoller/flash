const FileIO = require('./file-io')
const Aggregator = require('./aggregator')

// FileIO.writeJson('./data/vehicles.json', vehicles)

FileIO.readJson('./data/vehicles.json', results => {
  console.log(Aggregator.getAggregateData(results[0]))
})
