// repo code to access db, for example
var userRepo = function () {
	
	var db = {};

	var getUser= function(id) {
		console.log('Getting user ' + id);
		return {
			name: 'Sean Lee' 
		} //return JSON object with name
	}

	var saveUser = function(user) {
		console.log('Saving ' + user.name + ' to the db');
	}

	// easy to read what methods are available

	//console.log("newing up the repo");
	return {
		get: getUser,
		save: saveUser
	} 
}

module.exports = userRepo();