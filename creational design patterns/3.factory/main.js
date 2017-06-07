var Task = require('./task');

// the following adds too much junk in the main function... so we will use repoFactory! see main2.js

var taskRepo = require('./taskRepository');
var userRepo = require('./userRepository');
var projectRepo = require('./projectRepository');



var task1 = new Task(taskRepo.get(1));

var user = userRepo.get(23);
var project = projectRepo.get(68);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();



