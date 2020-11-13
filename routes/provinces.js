const express = require("express")
const router = express.Router()
const ProvincesController = require("../controllers/provinces")

router.get('/get-provinces', (req, res) => {
	ProvincesController.getProvinces().then(result => res.send(result))
});

router.post('/add-record', (req, res) => {
	ProvincesController.addRecord(req.body).then(resultFromAdd => res.send(resultFromAdd))
});

module.exports = router