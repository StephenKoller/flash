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
      totalPurchasePrice: formatter.format(
        data.totalPurchasePrice.toFixed(2) / 100,
      ),
    }
    res.render('index', formattedData)
  })
})

dashboardRouter.route('/search').post((req, res) => {
  readJson('../data/vehicles.json', response => {
    const data = getAggregateFleetData(response)
    const results = response[req.body.vin]

    const formattedData = {
      ...data,
      totalPurchasePrice: formatter.format(
        data.totalPurchasePrice.toFixed(2) / 100,
      ),
    }

    if (results) {
      console.log(results.purchaseValue)
      console.log(results.purchaseValue.toFixed(2) / 100)

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
