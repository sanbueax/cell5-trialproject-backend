const express = require("express")
const router = express.Router()
const auth = require("../auth")
const RegionController = require("../controllers/region")

router.get('/get-region', (req, res) => {
	RegionController.getRegion().then(result => res.send(result))
});

router.post('/add-region', auth.verify, (req, res) => {
	// console.log(req)
	req.body.userId = auth.decode(req.headers.authorization).id
	RegionController.addRegion(req.body).then(resultFromAdd => res.send(resultFromAdd))
});

module.exports = router