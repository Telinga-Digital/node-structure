const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)
const Redis = require('ioredis')
const config = require('../../utils/config')
const redisConfig = config(`queue.connections.${config('queue.default')}`)

module.exports = () => {
  if (!config('queue.enabled')) {
    return
  }

  const redis = new Redis()
  const jobsFolder = path.join(__dirname, '../../jobs')

  fs.readdirSync(jobsFolder).filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  }).forEach((file) => {
    const job = require(path.join(jobsFolder, file))
    job(redis)
  })
}
