const express = require('express');
const bodyParser = require('body-parser');

const { getAll, getById, create } = require('./controllers/bookController');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/book', getAll);

app.get('/book/:id', getById);

app.post('/book', create);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));