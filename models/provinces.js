const mongoose = require("mongoose");

const provincesSchema = new mongoose.Schema({
	islandGroup: {
		type: String,
		required: [true, "Main Island is required"]
	},
	region: {
		type: String,
		required: [true, "Region is required"]
	},
	provinceName: {
		type: String,
		required: [true, "Province Name is required"]
	},
	description: {
		type: String,
		required: [true, "Description is required"]
	},
	isActive: {
		type: Boolean,
		default: true
	}
});

module.exports = mongoose.model("Provinces", provincesSchema)