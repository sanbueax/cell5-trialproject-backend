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

module.exports.editRecord = (params) => {	
	return Provinces.findById(params.recordId).then(province => {
		console.log(province)

		province.set({
			islandGroup: params.newIslandGroup,
			region: params.newRegion,
			provinceName: params.newProvinceName,
			description: params.newDescription
		})

		return province.save().then((record, err) => {
			return (err) ? false : true
		})
	})
}

module.exports.deleteRecord = (params) => {	
	return Provinces.findById(params.recordId).then(province => {
		console.log(province)

		province.remove()

		return province.save().then((record, err) => {
			return (err) ? false : true
		})
	})
}