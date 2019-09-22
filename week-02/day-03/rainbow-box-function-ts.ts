'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function randomColor() {
    let r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

// let position: number = 0;

/* RAINBOX

let sqrSize: number = 15;
let nrOfSquares: number = 5;
let rbColors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

function rainbow(color, size:number) {
    ctx.fillStyle = color;
    ctx.fillRect((canvas.width-size)/2, (canvas.height-size)/2, size, size);
}

for (let i = 0; i <= nrOfSquares; i++) {
    rainbow(rbColors[i], sqrSize);
    sqrSize = sqrSize + 20;
}

RAINBOW */

let rcolors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
let rnumbers = 6;

function rainbox (size) {
    ctx.fillStyle = rcolors[i];
    ctx.fillRect((canvas.width-size)/2, (canvas.height-size)/2, size, size);
}

let rvalue:number = canvas.height;
for (let i: number = 0; i < rnumbers; i++) {
    rainbox(rvalue);
    rvalue = rvalue - canvas.height/rnumbers;
}

// later for purple tasks

// let position: number = 0;
// let size: number = 50;
// let nrOfSquares: number = 10;
// 
// function squareDrawing(color: string, size:number) {
//     ctx.fillStyle = color;
//     ctx.fillRect(position, position, size, size);
//     //             width , height         , sqrW, sqrH 
// }
// 
// for (let i = 0; i < nrOfSquares; i++) {
//     squareDrawing(randomColor(), size);
//     position = position + size;
// }

/* 

let size: number = 1000;
let nrOfSquares: number = 100;

function squareDrawing(color: string, size:number) {
    ctx.fillStyle = 'red', 'orange', 'yellow', 'green', 'blue', 'purple';
    ctx.fillRect((canvas.width-size)/2, (canvas.height-size)/2, size, size);
    //             width , height         , sqrW, sqrH 
}

for (let i = 0; i <= nrOfSquares; i++) {
    squareDrawing(ctx.fillStyle[i], size);
    size = size - 10;
} 
*/


/* multidim

let size: number = 1000;
let nrOfSquares: number = 100;


function squareDrawing(color: string, size:number) {
    ctx.fillStyle = color;
    ctx.fillRect((canvas.width-size)/2, (canvas.height-size)/2, size, size);
    //             width , height         , sqrW, sqrH 
}

for (let i = 0; i <= nrOfSquares; i++) {
    squareDrawing(randomColor(), size);
    size = size - 10;
}

*/