const express = require('express'),
    router = express.Router(),
    UserController = require('../controllers').UserController;


router.get('/', UserController.onSignUp);

module.exports = router;