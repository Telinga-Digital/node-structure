export const queue = {
  enabled: process.env.QUEUE_ENABLED === 'true',
  default: process.env.QUEUE_CONNECTION || 'redis',
  connections: {
    redis: {
      host: process.env.REDIS_HOST || '127.0.0.1',
      port: process.env.REDIS_PORT || 6379,
      password: process.env.REDIS_PASSWORD,
      db: process.env.REDIS_DB || 0,
    },
  },
}

export default queue
