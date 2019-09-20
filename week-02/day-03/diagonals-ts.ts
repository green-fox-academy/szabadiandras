'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

let diagonalColors: string[] = ['green', 'red'];
let h = canvas.height
let w = canvas.width

ctx.strokeStyle = diagonalColors[0];
ctx.beginPath();
ctx.moveTo (w, h);
ctx.lineTo(0, 0);
ctx.stroke();

ctx.strokeStyle = diagonalColors[1];
ctx.beginPath();
ctx.moveTo (w, 0);
ctx.lineTo(0, h);
ctx.stroke();