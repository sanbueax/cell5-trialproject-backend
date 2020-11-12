const express = require("express")
const router = express.Router()
const auth = require("../auth")
const UserController = require("../controllers/user")

router.post('/login', (req, res) => {
	UserController.login(req.body).then(resultFromLogin => res.send(resultFromLogin))
})

module.exports = router