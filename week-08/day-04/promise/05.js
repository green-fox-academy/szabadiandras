"use strict";

let promise = new Promise(function(fulfill, rejected) {
  fulfill("PROMISE VALUE");
});

promise.then(console.log, null);

console.log("MAIN PROGRAM");
