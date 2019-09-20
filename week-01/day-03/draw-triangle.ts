'use strict';

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount1 is

let lineCount1: number = 4;
let star1= '*';
let lineMinus1: number;

function triangle (star1, lineCount1) {
    let theTriangle = "";
    for (let star1Num: number = 1; star1Num <= lineCount1; star1Num++) {
        theTriangle += star1;
        }
        console.log(theTriangle);
}
    for (let lineMinus1: number = 1; lineMinus1 <= lineCount1; lineMinus1++) {
        triangle(star1, lineMinus1);
}

//  var height = 100;
// 
// 	for (var i = 1; i <= height; i++) {
// 		var row = "";
// 		for(var j = 1; j <= i; j++){
// 			row = row + "*";
// 		}
// 
// 		console.log(row);
// 	}