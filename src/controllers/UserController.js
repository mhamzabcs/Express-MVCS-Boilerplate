const UserService = require('../services/UserService'),
    validation = require('../util/validation');

module.exports = {
    index(req, res) {
        res.status(200).json({ message: "Welcome" })
    },
    onSignUp(req, res) {
        UserService.add(req.body)
            .then(resp => {
                res.status(200).json({ data: resp })
            })
            .catch(err => {
                if (err.errors) {
                    res.status(400).json({ error: validation(err.errors) })
                } else if (err.message) {
                    res.status(400).json({ error: err.message })
                } else { res.status(400); }
            })
    },
    onLoginSuccess(req, res) {
        // after successfull authentication from passport strategy.
        // return user data or whatever you want.
    }
}