'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.


function randomColor() {
    let r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};

function singleLine(x: number, y: number) {
    ctx.strokeStyle = randomColor()
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.moveTo (x, y);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.stroke();
}
    
for (let i = 0; i < 1; + i++) {
        singleLine(canvas.width, Math.ceil(Math.random() * canvas.height));
    };

for (let i = 0; i < 2; + i++) {
    singleLine(0, Math.ceil(Math.random() * canvas.height));
};