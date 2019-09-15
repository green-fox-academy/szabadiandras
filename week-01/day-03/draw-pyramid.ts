'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 80;
let actCount = lineCount * 2;
let star = '*';
let lineMinus: number;

function pyramid (star, actCount) {
    let thePyramid = "";
    for (let starNum: number = 1; starNum <= actCount; starNum++) {
        thePyramid += star;
        }
        console.log(thePyramid);
}
    for (let lineMinus: number = 1; lineMinus <= actCount; lineMinus++) {
        if (lineMinus % 2 !== 0) {
            pyramid(star, lineMinus++);
        } else if (lineMinus == 1) {
            pyramid(star, lineMinus++);
        }
}