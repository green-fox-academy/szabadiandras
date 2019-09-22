'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// let lineColor: string[] = ['green', 'purple']

function star(moveToX, moveToY, lineToX, lineToY) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(moveToX, moveToY);
    ctx.lineTo(lineToX, lineToY);
    ctx.stroke();
};

let lineCount: number = 50;
let linebreak: number = 0;

for (let i = 0; i < canvas.height/lineCount; i++) {

    let moveToX: number = 0;
    let moveToY: number = linebreak;
    let lineToX: number = linebreak;
    let lineToY: number = canvas.height;

    for (let i = 0; i < canvas.height/lineCount; i++) {
        star(moveToX, moveToY, lineToX, lineToY);
    };

    linebreak += lineCount;

};


// Purple envelope


function star2(moveToX2, moveToY2, lineToX2, lineToY2) {
    ctx.strokeStyle = 'purple';
    ctx.beginPath();
    ctx.moveTo(moveToX2, moveToY2);
    ctx.lineTo(lineToX2, lineToY2);
    ctx.stroke();
};

let lineCount1: number = 50;

let linebreak1: number = 0;
for (let i = 0; i < canvas.height/lineCount1; i++) {

    let moveToX2: number = linebreak1;
    let moveToY2: number = 0;
    let lineToX2: number = canvas.width;
    let lineToY2: number = linebreak1;

    for (let i = 0; i < canvas.height/lineCount1; i++) {
        star2(moveToX2, moveToY2, lineToX2, lineToY2);
    };

    linebreak1 += lineCount1;

};