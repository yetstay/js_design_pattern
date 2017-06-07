// repo code to access db, for example
var projectRepo = function () {
	
	var db = {};

	var getProject= function(id) {
		console.log('Getting Project ' + id);
		return {
			name: 'Factory pattern design' 
		} //return JSON object with name
	}

	var saveProject = function(project) {
		console.log('Saving ' + project.name + ' to the db');
	}

	// easy to read what methods are available

	//console.log("newing up the repo");
	return {
		get: getProject,
		save: saveProject
	} 
}

module.exports = projectRepo();