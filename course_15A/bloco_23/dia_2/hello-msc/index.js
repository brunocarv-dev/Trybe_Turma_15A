// hello-msc/index.js

const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./scontrollers/Authors');

const app = express();

app.use(bodyParser.json());

app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.createAuthor);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});