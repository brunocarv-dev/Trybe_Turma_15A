const axios = require('axios');

const validateToken = async (req, res) => {
  const { authorization } = req.headers

  if (authorization.length !== 12) return res.status(401).json({ message: "invalid token" });

  const resultApi = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  console.log(resultApi);

  res.status(200).json(resultApi.data);
};

module.exports = validateToken;
