'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function lineCenter (x: number, y:number) {
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.stroke();
}

let lineDist: number = 20;
let maxX = lineDist;
let actDist: number = canvas.width/lineDist; //400/20=30

for (let i = 0; i <= maxX; i++) {
    let x = lineDist;
    let y = 0;
    lineCenter(x, y);
    lineDist += actDist;
};

let lineDist1: number = 20;
let maxX1 = lineDist1;
let actDist1: number = canvas.width/lineDist1; //400/20=30

for (let i = 0; i <= maxX1; i++) {
    let x = lineDist1;
    let y = canvas.height;
    lineCenter(x, y);
    lineDist1 += actDist1;
};

//

function lineCenter2 (x: number, y:number) {
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.stroke();
}

let lineDist2: number = 20;
let maxY2 = lineDist2;
let actDist2: number = canvas.height/lineDist2;

for (let i = 0; i <= maxY2; i++) {
    let x = 0;
    let y = lineDist2;
    lineCenter(x, y);
    lineDist2 += actDist2;
};

let lineDist3: number = 20;
let maxY3 = lineDist3;
let actDist3: number = canvas.height/lineDist3; //400/20=30

for (let i = 0; i <= maxY3; i++) {
    let x = canvas.width
    let y = canvas.height - lineDist3;
    lineCenter(x, y);
    lineDist3 += actDist3;
};