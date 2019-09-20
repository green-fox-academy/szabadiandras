'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

/* ctx.fillStyle = 'green';
ctx.fillRect(200, 100, 30, 30);

ctx.fillStyle = 'blue';
ctx.fillRect(300, 250, 50, 50);

ctx.fillStyle = 'red';
ctx.fillRect(200, 200, 60, 60); */

let c = ['red', 'blue', 'green', 'yellow'];

function fourBoxes(c:string, s:number, t:number, w:number, h:number) {
    ctx.fillStyle = c;
    ctx.fillRect(s, t, w, h);
};

fourBoxes(c[0], 100, 100, 50, 50);
fourBoxes(c[1], 200, 150, 70, 70);
fourBoxes(c[2], 300, 200, 85, 85);
fourBoxes(c[3], 400, 250, 100, 100);

for (let i = 0; i < 3; + i++) {
   
};