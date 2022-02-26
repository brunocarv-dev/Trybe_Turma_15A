const ping = (req, res, next) => {
  return res.status(200).send('pong!')
}

module.exports = ping;