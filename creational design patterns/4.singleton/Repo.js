var repo = function() {
	var called = 0;

	var saveTask = function(task) {
		called++;
		console.log('Saving ' + task + ' Called ' + called + ' times');
	}

	console.log("newing up task repo");

	return {
		save:saveTask
	}
}

// module.exports = repo; // not singleton!

// singleton - executing the function here rather than in main
module.exports = repo();
// module.exports = new repo;