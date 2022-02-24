const PORT = 3001
const express = require('express');
const bodyParser = require('body-parser');
const { userRouter, btcRouter } = require('./router');
const { error500, genericError } = require('./middlewaresError');

const app = express();

app.get('/open', (_req, res) => res.send('open!'));

app.use(bodyParser.json());

app.use('/user', userRouter);

app.use('/btc', btcRouter);

app.use(genericError);

app.use(error500);

app.all('*', (_req, res) => res.status(404).json({ message: 'Page not found' }));

app.listen(PORT, () => console.log('App escutando na porta:', PORT));