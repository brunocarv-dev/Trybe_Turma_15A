const fs = require('fs');

const getSimpsons = (req, res, next) => {
  try{
    const writeFile = fs.readFileSync('../simpsons.json')
    return res.status(200).json(writeFile)
  } catch(err) { return console.error(err.message)}
}

module.exports = getSimpsons;
