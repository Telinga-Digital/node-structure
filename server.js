require('dotenv').config()
require('module-alias/register')
const config = require('config')
console.log(config)
// const fastify = require('fastify')({ logger: process.env.APP_ENV === 'production' })

// const start = async () => {
//   try {
//     await fastify.listen(process.env.APP_PORT)
//   } catch (error) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
// }

// start()