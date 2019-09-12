'use strict';

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

console.log(24-currentHours);
console.log(60-currentMinutes);
console.log(60-currentSeconds);

console.log('The remaining time is ' + (24-currentHours) + ' hours ' + (60-currentMinutes) + ' minutes ' + (60-currentSeconds) + ' seconds.');
