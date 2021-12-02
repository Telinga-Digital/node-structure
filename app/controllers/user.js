const getUser = async (req, rep) => {
  rep.send({
    status: 'Ok',
    data: req.user,
  })
}

module.exports = {
  getUser,
}