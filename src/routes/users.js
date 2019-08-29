const express = require('express'),
    router = express.Router(),
    UserController = require('../controllers').UserController;


router.post('/', UserController.onSignUp);

module.exports = router;