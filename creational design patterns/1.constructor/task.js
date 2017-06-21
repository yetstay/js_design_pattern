'use strict'

// traditional way of creating an object 
var task = Object.create(Object.prototype);

task.title = 'My Task';
task.description = 'My Description';

Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + ' ' + this.description;
  },
  writable: false,
  enumerable: false,
  configurable: false
});

/*task.toString = function() {
  return this.title;
}*/

//task.toString = 'hi';

console.log(task.toString());
console.log(Object.keys(task));


//inheritance
var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
  value: function() {
    return this.title + ' is urgent';
  },
  writable: false,
  enumerable: false,
  configurable: false
});

console.log(urgentTask.toString());



