var repo = {

	tasks: {},
	commands: [],
	get: function(id) {
		return {
			name: 'new task from db'
		}
	},
	save: function (task) {
		repo.tasks[task.id] = task;
		console.log('Saving ' + task.name + ' to the db');
	},

	replay: function() {
		for (var i = 0; i < repo.commands.length; i++) {
			var command = repo.commands[i];

			repo.executeNoLog(command.name, command.obj);
		}
	}
}


repo.executeNoLog = function(name) {
	var args = Array.prototype.slice.call(arguments, 1);

	if(repo[name]) {
		return repo[name].apply(repo, args); // .apply takes an array of parameters, with .call all the parameters needs to be listed out
	}

	return false;
}

repo.execute = function(name) {
	var args = Array.prototype.slice.call(arguments, 1);

	// saving all the commands in an array for replay
	repo.commands.push({
		name: name,
		obj: args[0]
	});

	//executing function
	if(repo[name]) {
		return repo[name].apply(repo, args); // .apply takes an array of parameters, with .call all the parameters needs to be listed out
	}

	return false;
};

// executing a method on the repo if it exists
repo.execute('save', {
	id: 1,
	name: 'Task 1 ',
	completed:false
});

repo.execute('save', {
	id: 2,
	name: 'Task 2 ',
	completed:false
});

repo.execute('save', {
	id: 3,
	name: 'Task 3 ',
	completed:false
});

repo.execute('save', {
	id: 4,
	name: 'Task 4 ',
	completed:false
});

console.log(repo.tasks);
repo.tasks = {}; // deleting repo!
console.log(repo.tasks);
repo.replay(); 
console.log(repo.tasks); // repo still there