const User = require("../models/user")
const bcrypt = require("bcrypt")
const auth = require("../auth")

module.exports.emailExists = (params) => {
	return User.find({email: params.email}).then(resultFromFind => {
		return resultFromFind.length > 0 ? true : false;
	})
}

module.exports.register = (params) => {
	let newUser = new User({
		firstName: params.firstName,
		lastName: params.lastName,
		email: params.email,
		password: bcrypt.hashSync(params.password, 10),
	})

	return newUser.save().then((user, err) => {
		return (err) ? false: true
	})
}

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

module.exports.get = (params) => {
	return User.findById(params.userId).then(resultFromFindById => {
		resultFromFindById.password = undefined
		return resultFromFindById
	})
}