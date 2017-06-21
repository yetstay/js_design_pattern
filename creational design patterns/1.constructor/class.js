'use strict'

// this is separate from main.js. executing this in node.js will result in the same as main
// creating an object using class
class Task {
	constructor(name) {
		this.name = name;
		this.complated = false;
	};

	complete() {
		console.log('completing task: '+ this.name);
		this.completed = true;
	};

	save() {
		console.log('saving Task: ' + this.name);
	};

}

var task1 = new Task ('create a demo for constructors');
var task2 = new Task ('create a demo for modules');
var task3 = new Task ('create a demo for singletons');
var task4 = new Task ('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();