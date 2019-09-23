'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let starCount: number = 100;
let starSize = 10;
let canvasSize = canvas.width*canvas.height
for (let i: number = 0; i <= starCount; i++) {
    ctx.fillStyle = 'white';
    ctx.fillRect(Math.random()*canvas.width, Math.random()*canvas.height, starSize, starSize);
}


// function randomStars(x, y, starWidth, starHeight) {
//     
// }

