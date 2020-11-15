const express = require("express")
const router = express.Router()
const RegionController = require("../controllers/region")

router.get('/get-region', (req, res) => {
	RegionController.getRegion().then(result => res.send(result))
});

router.post('/add-region', (req, res) => {
	RegionController.addRegion(req.body).then(resultFromAdd => res.send(resultFromAdd))
});

module.exports = router