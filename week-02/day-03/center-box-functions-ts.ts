'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

let colors = ['red', 'green', 'blue'];

function centerBox (size) {
    ctx.fillStyle = colors[i];
    ctx.fillRect((canvas.width-size)/2, (canvas.height-size)/2, size, size);
}

let value:number = 150;
for (let i: number = 0; i < 3; i++) {
    centerBox(value);
    value = value - 50;
}