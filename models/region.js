const mongoose = require("mongoose");

const regionSchema = new mongoose.Schema({
	islandGroup: {
		type: String,
		required: [true, "Main Island is required"]
	},
	regionName: {
		type: String,
		required: [true, "Region is required"]
	},
	isActive: {
		type: Boolean,
		default: true
	}
});

module.exports = mongoose.model("Region", regionSchema)