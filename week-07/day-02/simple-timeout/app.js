'use strict';

// Write a program that prints apple after 3 seconds.

let apple = setTimeout(function () {
  console.log('Apple');
}, 3000);

function callback(task) {
  setTimeout(function () {
      task();
  }, 3000);
};