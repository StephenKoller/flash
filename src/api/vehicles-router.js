const express = require('express')
const vehiclesRouter = express.Router()
const { readJson } = require('../file-io')

vehiclesRouter.route('/').get((req, res) =>
  readJson('./data/vehicles.json', response => {
    res.send({ data: response })
  }),
)

vehiclesRouter.route('/:id').get((req, res) => {
  readJson('./data/vehicles.json', response => {
    res.send({
      message: `got vehicle ${req.params.id}`,
      data: response[req.params.id],
    })
  })
})
// .post((req, res) => res.send({ message: `created vehicle ${req.params.id}` }))
// .put((req, res) => res.send({ message: `updated vehicle ${req.params.id}` }))
// .delete((req, res) =>
//   res.send({ message: `deleted vehicle ${req.params.id}` }),
// )

module.exports = vehiclesRouter
