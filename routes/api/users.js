const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

// POST /api/users/signup
router.post('/signup', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.use(require('../../config/auth'));
router.get ('/', usersCtrl.details)

module.exports = router;