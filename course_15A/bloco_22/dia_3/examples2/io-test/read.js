const fs = require('fs');

const read = (file) => {
  try {
    const readDone = fs.readFileSync(file, 'utf-8');
    return readDone;
  } catch (e) {
    return null;
  };
};

module.exports = read;