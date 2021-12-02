const fastify = require('fastify')

const build = (opts = {}) => {
  const app = fastify(opts)

  // Uncomment Below Code to use Redis
  // require('./services/redis/subscriber')()

  app.register(require('./routes/v1'), { prefix: '/v1' })

  return app
}

module.exports = build