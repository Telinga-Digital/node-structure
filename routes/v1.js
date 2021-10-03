const helloController = require('../app/controllers/hello')

module.exports = function (fastify, opts, done) {
  fastify.get('/', helloController.hello)
  done()
}
