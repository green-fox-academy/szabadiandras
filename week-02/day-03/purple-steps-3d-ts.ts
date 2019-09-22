'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

let coordinate: number = 0;
let boxSize: number = 10;
let numberOfBoxes: number = 6;

function squares(boxSize: number) {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.strokeRect(coordinate, coordinate, boxSize, boxSize);
    ctx.fillStyle = '#a134eb';
    ctx.fillRect(coordinate, coordinate, boxSize, boxSize)
}

for (let i = 0; i < numberOfBoxes; i++) {
    boxSize += (boxSize/2);
    coordinate = boxSize + boxSize;
    // coordinate = boxSize*ctx.lineWidth -> ?
    squares(boxSize-ctx.lineWidth);
}