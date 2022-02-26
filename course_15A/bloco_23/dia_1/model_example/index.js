const express = require('express');
const res = require('express/lib/response');
const { getAll } = require('./models/Author');

const app = express();

app.get('/authors', async (_req, res) => {
 try {
  console.log(await getAll());
  res.status(200).json(await getAll());
 } catch (e) {
   console.error(e);
 }
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log('Ouvindo na porta:', PORT));