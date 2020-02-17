const express = require('express')
const morgan = require('morgan')
const vehiclesRouter = require('./vehicles-router')

const app = express()

app.use(morgan('dev'))

app.use('/vehicles', vehiclesRouter)

app.listen(3000, () => {
  console.log('REST API running on port 3000')
})
