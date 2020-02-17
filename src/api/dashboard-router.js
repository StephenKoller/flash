const express = require('express')
const dashboardRouter = express.Router()
const { readJson } = require('../utils/file-io')
const { getAggregateFleetData } = require('../models/aggregate-fleet-data')

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

dashboardRouter.route('/').get((req, res) => {
  readJson('../data/vehicles.json', response => {
    const data = getAggregateFleetData(response)
    const formattedData = {
      ...data,
      totalPurchasePrice: formatter.format(data.totalPurchasePrice),
    }
    res.render('index', formattedData)
  })
})

module.exports = dashboardRouter
