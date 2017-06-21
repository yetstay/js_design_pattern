// repo code to access db, for example
var repo = function () {

	// can establish db connection, etc all in here and not in the calling functions -> modular code!
	var db = {};

	// all the db manipulation code is encapsulated below here	
	/*return {
		get: function(id) {
			console.log('Getting task' + id);
			return {
				name: 'new task from db' 
			} //return JSON object with name
		},
		save: function(task) {
			console.log('Saving ' + task.name + ' to the db');
		}

	}*/

	//using "revealing module pattern" below. doing the same thing as above
	var getTask = function(id) {
		console.log('Getting task' + id);
		return {
			name: 'new task from db' 
		} //return JSON object with name
	}

	var saveTask = function(task) {
		console.log('Saving ' + task.name + ' to the db');
	}

	// easy to read what methods are available
	return {
		get: getTask,
		save: saveTask
	} 
}

module.exports = repo();