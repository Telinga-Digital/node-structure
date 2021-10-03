require('dotenv').config()
const config = require('./utils/config')
const fastify = require('fastify')({
  logger: config('app.env') === 'production',
})

const start = async () => {
  try {
    await fastify.register(require('./routes/v1'), { prefix: '/v1' })
    await fastify.listen(config('app.port'))
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()
