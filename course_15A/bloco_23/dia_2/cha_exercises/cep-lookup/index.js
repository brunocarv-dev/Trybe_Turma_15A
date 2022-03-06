const express = require('express');
const bodyParser = require('body-parser');

const pingRoute = require('./routes/pingRoute');
const cepRoute = require('./routes/cepRoute');

const app = express();

app.use(bodyParser.json());

app.use('/ping', pingRoute);

app.use('/cep', cepRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Aplicação escutando na porta:', '3000'))