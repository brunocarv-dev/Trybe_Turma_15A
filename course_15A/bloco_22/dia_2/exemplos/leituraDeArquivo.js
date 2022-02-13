const fs = require('fs');

function leArquivo(fileName) {
  const promise = new Promise((resolve, reject) => {
    
    fs.readFile(fileName, (err, content) => {
      if(err) return reject(err);

      resolve(content);
    })
  });

  return promise;
};

leArquivo('./file.txt')
  .then((result) => {
    console.log(result);
    return leArquivo('ortherFile.txt');
  })
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));