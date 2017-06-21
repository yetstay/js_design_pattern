var Task = require('./task');

// three different observers
var notificationService = function() {
	var message = 'Notifying ';
	this.update = function(task){
		console.log(message + task.user + ' for task ' + task.name);
	}
};

var loggingService = function() {
	var message = 'Logging ';
	this.update = function(task){
		console.log(message + task.user + ' for task ' + task.name);
	}
};

var auditingService = function() {
	var message = 'Auditing ';
	this.update = function(task){
		console.log(message + task.user + ' for task ' + task.name);
	}
};

// observer list
function ObserverList() {
	this.observerList = [];
};

ObserverList.prototype.add = function(obj){
	return this.observerList.push(obj);
}

ObserverList.prototype.get = function(index) {
	if(index > -1 && index < this.observerList.length) {
		return this.observerList[index];
	}
}

ObserverList.prototype.count = function() {
	return this.observerList.length;
}

ObserverList.prototype.removeAt = function(index) {
	this.observerList.splice(index, 1);
};

ObserverList.prototype.indexOf = function(obj, startIndex) {
	var i = startIndex;

	while(i < this.observerList.length){
		if(this.observerList[i] == obj){
			return i;
		}
		i++;
	}

	return -1;
}

// observable task (wrapper) for Task: decoration pattern
var ObservableTask = function(data) {
	Task.call(this, data);
	this.observers = new ObserverList();
};

ObservableTask.prototype.addObserver = function(observer) { // observer here is gonna be ***Service.update
	this.observers.add(observer);
}

ObservableTask.prototype.removeObserver = function(observer) {
	this.observers.removeAt(this.observers.indexOf(observer, 0));
}

ObservableTask.prototype.notify = function(context) { // context in our case will be always ObservableTask
	var observerCount = this.observers.count();

	for (var i = 0;i< observerCount; i++) {
		// this is effectively this.observerList[i](task)
		// which is ***Service.update(ObservableTask)
		this.observers.get(i)(context); 
	}
}

ObservableTask.prototype.save = function(){
	Task.prototype.save.call(this);
	this.notify(this);	
}

// main function 
var task1 = new ObservableTask({
	name: 'Create a demo for constructors',
	user: 'Sean'
});

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

task1.addObserver(not.update);
task1.addObserver(ls.update);
task1.addObserver(audit.update);


task1.save();

task1.removeObserver(audit.update);

task1.save();