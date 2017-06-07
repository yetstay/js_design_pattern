var Task = require('./task');
var repoFactory = require ('./repoFactory2');

var task1 = new Task(repoFactory.task.get(1));
var task2 = new Task(repoFactory.task.get(2));

var user = repoFactory.user.get(23);
var project = repoFactory.project.get(678);

task1.user = user;
task1.project = project;

//console.log(task1);
task1.save();



