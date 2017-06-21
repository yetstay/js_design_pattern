// not singleton
/* var repo = require('./repo');
var myrepo = repo();*/

// singleton
var myrepo = require('./repo');

var taskHandler = function() {
	return {
		save:function() {
			myrepo.save("Hi from taskHandler");
		}
	}
}

module.exports = taskHandler();