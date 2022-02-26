const fs = require('fs');

const getSimpsonsById = (req, res, next) => {
      const { id } = req.params;
      try{
        const writeFile = fs.readFileSync('../simpsons.json')
        const foundChar = writeFile.find((char) => char.id === +id)
        if (!foundChar) return res.status(404).json({
          message: 'Simpson not found!'
        })
        return res.status(200).json(foundChar)
      } catch(err) { return console.error(err.message)}
    }

module.exports = getSimpsonsById;
