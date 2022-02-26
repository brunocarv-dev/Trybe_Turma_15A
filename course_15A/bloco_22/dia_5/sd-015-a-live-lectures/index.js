const express = require('express');
const ping = require('./middlewares/ping');
const hello = require('./middlewares/hello');
const greeting = require('./middlewares/greeting');
const getSimpsons = require('./middlewares/getSimpsons');
const getSimpsonsById = require('./middlewares/getSimpsonsById');

const app = express();

const PORT = 3000;

app.get('/ping', ping)

app.get('/simpsons', getSimpsons)

app.get('/simpsons/:id', getSimpsonsById)

app.use(express.json())

app.post('/ping', hello)

app.post('/greeting', greeting)

app.listen(PORT, () => console.log('Listening on port:', PORT));