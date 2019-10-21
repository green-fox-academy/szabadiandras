'use strict';

// Write a function that computes a member of the fibonacci sequence by a given index
// Create tests for multiple test cases.

function fibonacci(x: number) {
  let array = [];
  for (let i = 0; i <= x; i++) {
    if (array.length < 2) {
      array.push(i);
    } else {
      array.push(array[i-1] + array[i-2])
    }
  }
  return array;
}


let x: number = 100;
console.log(fibonacci(x));

// let fibo = []
// for (let i = 0; i <= x; i++) {
//   fibo.push(fibonacci(x)[i] + fibonacci(x)[i+1]);
// }
// 
// console.log(fibo);