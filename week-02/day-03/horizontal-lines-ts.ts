'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

function randomColor() {
        let r = 255*Math.random()|0,
            g = 255*Math.random()|0,
            b = 255*Math.random()|0;
        return 'rgb(' + r + ',' + g + ',' + b + ')';
};

function hLines(x: number, y: number) {
    ctx.strokeStyle = randomColor()
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo (x, y);
    ctx.lineTo(x + 50, y);
    ctx.stroke();
}

for (let i = 0; i < 3; + i++) {
    hLines(Math.random() * 250, Math.random() * 300);
}