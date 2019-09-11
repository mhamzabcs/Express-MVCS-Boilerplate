const express = require('express'),
    router = express.Router(),
    UserController = require('../controllers').UserController;


router.post('/', UserController.onSignUp);

router.put('/:userId', UserController.onUpdate);


module.exports = router;