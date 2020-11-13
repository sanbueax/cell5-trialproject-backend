const express = require("express")
const router = express.Router()
const auth = require("../auth")
const UserController = require("../controllers/user")

router.post('/login', (req, res) => {
	UserController.login(req.body).then(resultFromLogin => res.send(resultFromLogin))
})

router.get('/details', auth.verify, (req, res) => {
	const user = auth.decode(req.headers.authorization)
	UserController.get({userId: user.id}).then(user => res.send(user))
})

module.exports = router