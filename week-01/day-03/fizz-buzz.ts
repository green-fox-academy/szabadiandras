'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

let fizzNumber: number = 100;
let buzzNumber: number = 1;

for (let buzzNumber: number = 1; buzzNumber <= fizzNumber; buzzNumber++) {
    
    if (buzzNumber % 5 == 0 && buzzNumber % 3 == 0) {
        console.log("FizzBuzz");
    } else if (buzzNumber % 5 == 0) {
        console.log("Buzz");
    } else if (buzzNumber % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(buzzNumber);
    }
}