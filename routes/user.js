const express = require("express")
const router = express.Router()
const auth = require("../auth")
const UserController = require("../controllers/user")

router.post("/email-exists", (req, res) => {
	UserController.emailExists(req.body).then(resultFromEmailExists => res.send(resultFromEmailExists))
})

router.post("/", (req, res) => {
	UserController.register(req.body).then(resultFromRegister => res.send(resultFromRegister))
})

router.post('/login', (req, res) => {
	UserController.login(req.body).then(resultFromLogin => res.send(resultFromLogin))
})

router.get('/details', auth.verify, (req, res) => {
	const user = auth.decode(req.headers.authorization)
	UserController.get({userId: user.id}).then(user => res.send(user))
})

module.exports = router