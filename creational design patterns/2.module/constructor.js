var Repo = require('./taskRepository');

var Task = function(data) {
	this.name = data.name;
	this.completed = false;

	/*this.complete = function() {
		console.log('completing task: '+ this.name);
		this.completed = true;
	}

	this.save = function() {
		console.log('saving Task: ' + this.name);
	}*/
}

Task.prototype.complete = function () {
	console.log('completing task: '+ this.name);
		this.completed = true;
}

Task.prototype.save = function() {
	console.log('saving Task: ' + this.name);
	Repo.save(this);
}

module.exports = Task;
