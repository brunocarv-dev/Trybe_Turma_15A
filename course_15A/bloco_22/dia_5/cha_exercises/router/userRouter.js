const express = require('express');
const rescue = require('express-rescue');

const { 
  validateUsername,
  validateEmail,
  validatePassword,
  validateToken,
} = require('../middlewares');

const userRouter = express.Router();

userRouter.post('/register', rescue(validateUsername), rescue(validateEmail), rescue(validatePassword));

userRouter.post('/login', rescue(validateEmail), rescue(validatePassword), rescue(validateToken));

module.exports = userRouter;