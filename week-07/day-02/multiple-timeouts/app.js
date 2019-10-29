'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

let apple = setTimeout(function () {
  console.log('Apple');
}, 0);

let pear = setTimeout(function () {
  console.log('Pear');
}, 1000);

let melon = setTimeout(function () {
  console.log('Melon');
}, 3000);

let grapes = setTimeout(function () {
  console.log('Grapes');
}, 5000);

function callback(task) {
  setTimeout(function () {
      task();
  }, 0);
};