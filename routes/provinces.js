const express = require("express")
const router = express.Router()
const auth = require("../auth")
const ProvincesController = require("../controllers/provinces")

router.get('/get-provinces', (req, res) => {
	ProvincesController.getProvinces().then(result => res.send(result))
});

router.post('/add-record', auth.verify, (req, res) => {
	req.body.userId = auth.decode(req.headers.authorization).id
	ProvincesController.addRecord(req.body).then(resultFromAdd => res.send(resultFromAdd))
});

router.put('/edit-record', auth.verify, (req, res) => {
	// console.log(req)
	req.body.userId = auth.decode(req.headers.authorization).id
	ProvincesController.editRecord(req.body).then(result => res.send(result))
});

router.delete('/delete-record', auth.verify, (req, res) => {
	// console.log(req)
	req.body.userId = auth.decode(req.headers.authorization).id
	ProvincesController.deleteRecord(req.body).then(result => res.send(result))
});

module.exports = router