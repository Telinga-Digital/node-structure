const hello = async (req, reply) => {
  reply.send({
    status: 'OK',
    message: 'API Works!',
  })
}

module.exports = {
  hello,
}
