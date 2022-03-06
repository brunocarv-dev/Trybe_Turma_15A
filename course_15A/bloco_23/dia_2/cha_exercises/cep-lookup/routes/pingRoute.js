const express = require('express');

const { pong } = require('../controllers/Cing');

const pingRoute = express.Router();

pingRoute.get('/', pong)

module.exports = pingRoute;