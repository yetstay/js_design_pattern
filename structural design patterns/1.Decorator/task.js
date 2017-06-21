// creating an object using constructor pattern and prototype
var Task = function(name) {
	this.name = name;
	this.completed = false;
}

Task.prototype.complete = function () {
	console.log('completing task: '+ this.name);
		this.completed = true;
}

Task.prototype.save = function() {
	console.log('saving Task: ' + this.name);
}

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();


// simple decoration - urgentTask is extending Task
var urgentTask = new Task('Urgent Task');

// javascript can add things on the fly!
urgentTask.priority = 2;

urgentTask.notify = function() {
	console.log('notifying important people');
};
// urgentTask.notify();
urgentTask.complete();

// overwriting task's save function 
urgentTask.save = function() {
	this.notify();
	Task.prototype.save.call(this);
};
urgentTask.save();
