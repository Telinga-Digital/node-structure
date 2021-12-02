const helloController = require('../../app/controllers/hello')
const userController = require('../../app/controllers/user')
const authenticate = require('../../app/middlewares/authenticate')

module.exports = function (fastify, opts, done) {
  fastify.get('/', helloController.hello)

  fastify.decorateRequest('user', '')
  fastify.get('/user', { preHandler: [authenticate] }, userController.getUser)

  done()
}
