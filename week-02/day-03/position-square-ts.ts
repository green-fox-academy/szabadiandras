'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

let squareSize = 50;
let squarePosition = [100, 150, 200];
let color = ['red', 'green', 'blue']

function positionSquare(x: number, y: number) {
    ctx.fillStyle = color[i];
    ctx.fillRect(x, y, squareSize, squareSize);
}

for (let i = 0; i <3; i++) {
        positionSquare(squarePosition[i], squarePosition[i]);
}