const express = require('express');

const { pong } = require('../controllers/Ping');

const pingRoute = express.Router();

pingRoute.get('/', pong)

module.exports = pingRoute;