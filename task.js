'use strict'

var task = Object.create(Object.prototype);

task.title = 'My Task';
task.description = 'My Description';

Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + ' ' + this.description;
  },
  writable: false,
  enumerable: false,
  configurable: true
});

/*task.toString = function() {
  return this.title;
}*/

//task.toString = 'hi';

console.log(task.toString());
console.log(Object.keys(task));


//inheritance
var urgentTask = Object.create(task);

Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + ' is urgent';
  },
  writable: false,
  enumerable: false,
  configurable: true
});

console.log(urgentTask.toString());



