'use strict';

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let maxHours: number = 24;
let maxMinutes: number = 60;
let maxSeconds: number = 60;

console.log(maxHours-currentHours);
console.log(maxMinutes-currentMinutes);
console.log(maxSeconds-currentSeconds);

console.log('');

console.log(24-currentHours);
console.log(60-currentMinutes);
console.log(60-currentSeconds);

console.log('');

console.log('The remaining time is ' + (24-currentHours) + ' hour(s) ' + (60-currentMinutes) + ' minute(s) ' + (60-currentSeconds) + ' second(s).');