// hello-msc/index.js

const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const Author = require('./controllers/Author');
const ErrorController = require('./controllers/ErrorController');

const app = express();

app.use(bodyParser.json());

app.get('/authors', rescue(Author.getAll));
app.get('/authors/:id', rescue(Author.findById));
app.post('/authors', rescue(Author.createAuthor));

app.use(ErrorController);

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});