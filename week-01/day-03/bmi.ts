'use strict';

// Print the Body mass index (BMI) based on these values

let massInKg: number = 81.2;
let heightInM: number = 1.78;
let heightSquare = Math.pow(heightInM, 2);

console.log('The BMI calculated on the given values equals to:');

console.log (massInKg / heightSquare);