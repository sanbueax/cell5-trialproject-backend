const Region = require('../models/region');

module.exports.getRegion = () => {
	return Region.find({isActive: true}).then(resultsFromFind => resultsFromFind)
}

module.exports.addRegion = (params) => {
	let newRegion = new Region({
		islandGroup: params.islandGroup,
		regionName: params.regionName
	})

	return newRegion.save().then((record, err) => {
		return (err) ? false : true
	})
}