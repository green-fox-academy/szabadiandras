'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

let position: number = 0;
let size: number = 15;
let purpleSquareNumber: number = 19;

function squareDrawing(size: number) {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.strokeRect(position, position, size, size);
    ctx.fillStyle = '#a134eb';
    ctx.fillRect(position, position, size, size)
    //            width,   height  , sqrW, sqrH 
}

for (let i = 0; i < purpleSquareNumber; i++) {
    squareDrawing(size);
    position = position+1 + size;
}
