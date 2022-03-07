const express = require('express');
const rescue = require('express-rescue');

const { getByCep } = require('../controllers/Cep');
const { createCep } = require('../controllers/Cep');

const cepRoute = express.Router();

cepRoute.get('/:cep', rescue(getByCep));

cepRoute.post('/', rescue(createCep));

module.exports = cepRoute;