const express = require('express');
const bodyParser = require('body-parser');
const recipesRouter = require('./recipesRouter');
const { authMiddleware } = require('./middlewares');

const app = express();
app.use(bodyParser.json());

app.get('/open', authMiddleware, function (req, res) {res.send('open!')
});

app.use('/recipes', recipesRouter);

app.all('*', (req, res) => res.status(404).json({ message: `Rota ${req.path} não existe!` }));

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
