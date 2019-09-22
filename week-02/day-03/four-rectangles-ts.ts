'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let colors = ['yellow', 'blue', 'green', 'red'];
let boxNumber = 4;
let size = 250;

for (let i: number = 0; i < boxNumber; i++) {
    ctx.fillStyle = colors[i];
    ctx.fillRect(Math.random()*size, Math.random()*size, Math.random()*size, Math.random()*size);
};