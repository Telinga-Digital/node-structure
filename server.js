require('dotenv').config()
const config = require('./utils/config')

const server = require('./app')({
  logger: config('app.env') === 'production'
})

server.listen(config('app.port'), (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})
