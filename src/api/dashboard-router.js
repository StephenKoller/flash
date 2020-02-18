const express = require('express')
const dashboardRouter = express.Router()
const { readJson } = require('../utils/file-io')
const { getAggregateFleetData } = require('../models/aggregate-fleet-data')

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const formatList = (listData, response) => ({
  ...listData,
  totalPurchasePrice: formatter.format(
    listData.totalPurchasePrice.toFixed(2) / 100,
  ),
  results: response,
})

dashboardRouter.route('/').get((req, res) => {
  readJson('../data/vehicles.json', response => {
    const data = getAggregateFleetData(response)
    const formattedData = formatList(data, response)
    res.render('index', formattedData)
  })
})

dashboardRouter.route('/search').post((req, res) => {
  readJson('../data/vehicles.json', response => {
    const data = getAggregateFleetData(response)
    const results = response[req.body.vin]

    const formattedData = formatList(data, response)

    if (results) {
      formattedData.searchResults = {
        ...results,
        createdDate: new Date(results.createdDate).toDateString(),
        modifiedDate: new Date(results.modifiedDate).toDateString(),
        purchaseDate: new Date(results.purchaseDate).toDateString(),
        purchaseValue: formatter.format(results.purchaseValue.toFixed(2) / 100),
      }
    } else {
      formattedData.results = response
    }

    res.render('index', formattedData)
  })
})

module.exports = dashboardRouter
