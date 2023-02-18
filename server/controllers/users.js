//Gets username and password. It also makes a hash. 

const bcrypt = require('bcrypt')
const saltRounds = 10;

module.exports = {
    registerHandler: (req, res) => {
        let username = req.body.username
        let password = req.body.password
        password = bcrypt.hash(password, saltRounds)
        // Need to add a tech that interfaces with the database
        // Adding a user to the database
    },

    loginHandler: (req, res) => {
        let username = req.body.username
        let password = req.body.password
        // Check a users credentials against the database
    }
}

