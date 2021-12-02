const db = require('../models')
const User = db.User

module.exports = async (req, reply, next) => {
  const { query } = req
  const { apiKey } = query

  if (!apiKey) {
    return reply.code(422).send({
      status: 'ERROR',
      message: 'Api key is required',
    })
  }

  const user = await User.findOne({ where: { apiKey } })

  if (!user) {
    return reply.code(400).send({
      status: 'ERROR',
      message: 'Invalid key',
    })
  }

  req.user = user
}
