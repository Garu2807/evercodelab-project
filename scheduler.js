"use strict";

// Init script: runs synchronously on file load.
console.log("scheduler.js started");

function scheduler(name, interval, task) {
  return setInterval(task, interval);
}

// Task required by the assignment.
scheduler("running", 10000, () => {
  console.log("running");
});

module.exports = scheduler;

