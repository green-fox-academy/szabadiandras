'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

let theNum = 5;

function sum(value) {
    let sumZero = 0;
    for (let i = 1; i <= value; i++) {
        sumZero += i;
    }
    return sumZero;
}

console.log(sum(theNum));
console.log('The sum of the numbers from 0 to ' + theNum + ' is ' + sum(theNum) + '.');