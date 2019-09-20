'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

// let input: number = 3;
// let calc = (input * (input + 1)) /2;
// let sum = calc;
// let avg = (sum / input);
// console.log('Sum: ' + sum + ', Average: ' + avg);

let input: number = 5;
let summary = 0;
for (let i = 1; i <= input; i++) {
    summary = summary + i;
}
let average = summary / input;
console.log('Sum: ' + summary + ', Average: ' + average);