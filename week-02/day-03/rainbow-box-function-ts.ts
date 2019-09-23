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