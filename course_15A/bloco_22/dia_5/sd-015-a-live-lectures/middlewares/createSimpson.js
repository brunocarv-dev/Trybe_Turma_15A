const fs = require('fs').promises;

const getCreateSimpson = async (req, res, next) => {
      const { id } = req.params;
      const { name } = req.body;
      try{
        const writeFile = await fs.readFile('../simpsons.json').then((data) => JSON.parse(data))
        writeFile.push({
          id, name
        })
        await fs.writeFile('../simpsons.json', JSON.stringify(writeFile))
        if (!foundChar) return res.status(404).json({
          message: 'Simpson not found!'
        })
        return res.status(200).json(foundChar)
      } catch(err) { return console.error(err.message)}
    }

module.exports = getCreateSimpson;
