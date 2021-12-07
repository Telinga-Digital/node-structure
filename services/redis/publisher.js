const Redis = require('ioredis')
const config = require('../../utils/config')
const redisConfig = config(`queue.connections.${config('queue.default')}`)

const redis = () => {
  if (!config('queue.enabled')) {
    return
  }

  const redis = new Redis()

  return redis
}

module.exports = redis()
