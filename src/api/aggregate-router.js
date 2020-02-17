const express = require('express')
const aggregateRouter = express.Router()
const { readJson } = require('../utils/file-io')
const { getAggregateFleetData } = require('../models/aggregate-fleet-data')

aggregateRouter.route('/').get((req, res) => {
  readJson('../data/vehicles.json', response => {
    const data = getAggregateFleetData(response)
    res.send({ data })
  })
})

module.exports = aggregateRouter
