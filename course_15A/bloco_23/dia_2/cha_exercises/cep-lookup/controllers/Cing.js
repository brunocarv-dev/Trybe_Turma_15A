const pong = (_req, res) => {
  try {
    return res.status(200).json({ "message": "pong!" })
  } catch (e) {
    console.error(e);
  }
};

module.exports = { pong };