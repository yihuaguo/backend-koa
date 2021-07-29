const combineRoutes = require('koa-combine-routers')
const arouter = require('./aRouter')
const brouter = require('./bRouter')

module.exports = combineRoutes(
    arouter,
    brouter
)