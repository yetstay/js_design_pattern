var Task = function (data) {
	this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
	this.name = data.name;
	// the following were initially defined as part of Task, but with flyweight it will be moved to Flyweight constructor function
	/*this.priority = data.priority;
	this.project = data.project;
	this.user = data.user;
	this.completed = data.completed;*/

}

// if I wanna hide that I am using flyweight when setting priority... add to prototype
// this is just one example
Task.prototype.getPriority = function() {
	this.flyweight.priority;
}

function Flyweight (project, priority, user, completed) {
	this.priority = priority;
	this.project = project;
	this.user = user;
	this.completed = completed;
};

var FlyweightFactory = function(){
	var flyweights = {};

	// get function will take all the things that are not unique to the task
	var get = function(project, priority, user, completed){ 
		if(!flyweights[project + priority + user + completed]){
			flyweights[project + priority + user + completed] = new Flyweight(project, priority, user, completed); // adding to an associative array
		}

		//console.log(flyweights);
		return flyweights[project + priority + user + completed];
	};

	var getCount = function() {
		var count = 0;
		for (var f in flyweights) {
			count++;
		}
		return count;
	};

	return {
		get: get,
		getCount: getCount
	}

}(); // immediately invoked function expression



function TaskCollection() {

	var tasks = {};
	var count = 0;
	var add = function(data){
		tasks[data.name] = new Task(data);
		count++;
	};

	var get = function(name){
		return tasks[name];
	};

	var getCount = function() {
		return count;
	};

	return {
		add: add,
		get: get,
		getCount: getCount
	}
	
}

var tasks = new TaskCollection();

var priorities = [1, 2, 3, 4, 5];
var projects = ['none', 'courses', 'training', 'project'];
var users = ['Jon','Erica','Amanda', 'Nathan'];
var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed; // Node.js function to check the memory

for (var i = 0; i < 10000; i++) {
	tasks.add({
		name: 'task '+ i,
		priority: priorities[Math.floor((Math.random() * priorities.length))],
		project: projects[Math.floor((Math.random() * projects.length))],
		user: users[Math.floor((Math.random() * users.length))],
		completed: completed[Math.floor((Math.random() * completed.length))]
	});
};

var afterMemory = process.memoryUsage().heapUsed;
console.log('used memory '+(afterMemory - initialMemory)/1000000);

console.log("number of tasks: " +tasks.getCount());
console.log("number of flyweights: " +FlyweightFactory.getCount());