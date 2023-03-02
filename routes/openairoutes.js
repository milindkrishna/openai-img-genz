const express = require('express')
const Router = express.Router()
const controller = require('../controller/openaicontoller')
Router.post('/generateimage',controller.genImg)

module.exports = Router