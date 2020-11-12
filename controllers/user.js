const User = require("../models/user")
const bcrypt = require("bcrypt")
const auth = require("../auth")

module.exports.login = (params) => {
	return User.findOne({email: params.email}).then(resultFromFindOne => {
		if(resultFromFindOne === null){
			return false
		}

		const isPasswordMatched = bcrypt.compareSync(params.password, resultFromFindOne.password)

		if(isPasswordMatched){
			return {access: auth.createAccessToken(resultFromFindOne.toObject())}
		}else{
			return false
		}
	})
}