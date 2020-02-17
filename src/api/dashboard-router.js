const express = require('express')
const dashboardRouter = express.Router()

dashboardRouter.route('/').get((req, res) => {
  res.render('index', { message: 'Hello there!' })
})

module.exports = dashboardRouter
