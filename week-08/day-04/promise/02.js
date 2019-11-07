'use strict'

let promise = new Promise(function (fulfill, rejected) {
  setTimeout(() => {
    fulfill('FULFILLED!')
  }, 300);
});

promise.then(console.log);