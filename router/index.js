const _ = require('lodash')

const PublicRoute = require('./RoutePublic').router()
const PrivateRoute = require('./RoutePrivate').router()

module.exports = {
  arrayRoute() {
    return _.concat(PublicRoute, PrivateRoute)
  },
}
