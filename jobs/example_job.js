const channelName = 'example_job'

const handle = async (redis) => {
  redis.subscribe(channelName, (err, count) => {
    if (err) {
      console.log(err.message)
    }
  })

  redis.on('message', async (channel, message) => {
    if (channel === channelName) {
      // Code Here...
    }
  })
}

module.exports = handle