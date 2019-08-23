const UserService = require('../services/UserService');

module.exports = {
    index(req, res) {
        res.status(200).json({ message: "Welcome" })
    },
    onSignUp(req, res) {
        UserService.add(req.body)
            .then(resp => {
                res.status(200).json({ message: resp })
            })
            .catch(err => {
                console.log(err)
                res.status(400);
            })
    },
    onLoginSuccess(req, res) {
        // after successfull authentication from passport strategy.
        // return user data or whatever you want.
    }
}