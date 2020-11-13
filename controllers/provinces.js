const Provinces = require('../models/provinces');

module.exports.getProvinces = () => {
	return Provinces.find({isActive: true}).then(resultsFromFind => resultsFromFind)
}

module.exports.addRecord = (params) => {
	let newRecord = new Provinces({
		islandGroup: params.islandGroup,
		region: params.region,
		provinceName: params.provinceName,
		description: params.description
	})

	return newRecord.save().then((record, err) => {
		return (err) ? false : true
	})
}