const axios = require('axios');

const validateToken = async (req, res) => {
  const { authorization } = req.headers

  if (authorization.length !== 12) return res.status(400).json({ message: "email or password is incorrect" });

  // const resultApi = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  // console.log(resultApi);

  res.status(200).json({ roken: authorization });
};

module.exports = validateToken;
