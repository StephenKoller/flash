const express = require('express')
const vehiclesRouter = express.Router()
const { readJson } = require('../utils/file-io')

vehiclesRouter.route('/').get((req, res) =>
  readJson('../data/vehicles.json', response => {
    res.send({ data: response })
  }),
)

vehiclesRouter.route('/:id').get((req, res) => {
  readJson('../data/vehicles.json', response => {
    res.send({
      message: `got vehicle ${req.params.id}`,
      data: response[req.params.id],
    })
  })
})

module.exports = vehiclesRouter
