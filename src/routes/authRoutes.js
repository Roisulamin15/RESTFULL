const authRoutes = require('express').Router();
const authConstrollers = require('../controllers/authcontroller');

authRoutes.post('/register', authConstrollers.register);
authRoutes.post('/login', authConstrollers.login)


module.exports = authRoutes;