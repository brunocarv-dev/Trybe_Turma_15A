const express = require('express');
const rescue = require('express-rescue');

const { 
  validateUsername,
  validateEmail,
  validatePassword,
} = require('../middlewares');

const userRouter = express.Router();

userRouter.post('/register', rescue(validateUsername), rescue(validateEmail), rescue(validatePassword));

userRouter.post('/login', rescue(validateEmail), rescue(validatePassword));

module.exports = userRouter;