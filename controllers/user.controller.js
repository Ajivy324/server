const User = require('.../models/show.model');

module.exports = {
    
    createUser: (req, res) => {
        User.create(req.body)
            .then(newUser => res.json(newUser))
            .catch(err => res.status(400).json(err))
    },
}