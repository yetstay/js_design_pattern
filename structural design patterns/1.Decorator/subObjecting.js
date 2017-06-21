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


// sub class implementation below
var UrgentTask = function(name, priority){
	Task.call(this, name);
	this.priority = priority;
}

// UrgentTask doesn't have prototype, so create a new object from Task's prototype and refer to it for true inheritance
// if UrgentTask.prototype = Task.prototype; then when UrgentTask's prototype is changed so is Task's prototype : not a desired behaviour
UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = function() {
	console.log('notifying important people');
};
UrgentTask.prototype.save = function() {
	this.notify();
	console.log("do special stuff before saving");
	Task.prototype.save.call(this);
};

var ut = new UrgentTask("This is urgent", 1);

ut.complete();
ut.save();
console.log(ut);