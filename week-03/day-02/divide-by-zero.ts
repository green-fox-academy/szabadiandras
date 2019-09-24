'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


// let divider: number = 2;
// let divideNum: number = 10;
// 
// function divide(divider) {
//     let result = divideNum / divider;
//     console.log(result);
// }


function DivideResult (divider: number) {
    if (divider == 0) {
        throw 'Fail'
    }
    console.log('The result is ' + 10/divider)
}

DivideResult(0);