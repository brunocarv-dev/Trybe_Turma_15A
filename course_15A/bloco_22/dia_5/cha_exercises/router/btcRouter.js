
const express = require('express');
const rescue = require('express-rescue');
const { validateToken } = require('../middlewares');

const btcRouter = express.Router();

btcRouter.get('/price', rescue(validateToken))

module.exports = btcRouter;