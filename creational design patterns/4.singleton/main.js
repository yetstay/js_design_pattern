var taskHandler = require('./taskHandler');
// not singleton
/*var repo = require('./repo');
var myrepo = repo();*/

// singleton
var myrepo = require('./repo');

myrepo.save('fromMain');
myrepo.save('fromMain');
myrepo.save('fromMain');
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();
