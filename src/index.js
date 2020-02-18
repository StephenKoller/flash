const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const vehiclesRouter = require('./api/vehicles-router')
const aggregateRouter = require('./api/aggregate-router')
const dashboardRouter = require('./api/dashboard-router')
const app = express()

app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'pug')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', dashboardRouter)

app.use('/api/vehicles', vehiclesRouter)
app.use('/api/aggregate', aggregateRouter)

app.listen(3000, () => {
  console.log('REST API running on port 3000')
})
