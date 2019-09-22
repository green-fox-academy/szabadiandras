'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//

function triangle(startX, startY, endX, endY) {
    ctx.strokeStyle = 'black'
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
};

let tLines: number = 50;
let tBreak: number = 0;
let nrFit: number = canvas.width/tBreak

for (let i = 0; i < canvas.width/tLines; i++) {

    let startX: number = tBreak/2;
    let startY: number = canvas.height - tBreak/2;
    let endX: number = canvas.width - tBreak/2;
    let endY: number = canvas.height - tBreak/2;

    for (let i = 0; i < canvas.width/tLines; i++) {
        triangle(startX, startY, endX, endY);
    };

    tBreak += tLines;

};

//

function triangle1(startX1, startY1, endX1, endY1) {
    ctx.strokeStyle = 'black'
    ctx.beginPath();
    ctx.moveTo(startX1, startY1);
    ctx.lineTo(endX1, endY1);
    ctx.stroke();
};

let tLines1: number = 50;
let tBreak1: number = 0;
let nrFit1: number = canvas.width/tBreak1

for (let i = 0; i < canvas.width/tLines1; i++) {

    let startX1: number = tBreak1;
    let startY1: number = canvas.height;
    let endX1: number = canvas.width/2 + tBreak1/2;
    let endY1: number = canvas.height/2 + tBreak1/2;

    for (let i = 0; i < canvas.width/tLines1; i++) {
        triangle(startX1, startY1, endX1, endY1);
    };

    tBreak1 += tLines1;

};

//

function triangle2(startX2, startY2, endX2, endY2) {
    ctx.strokeStyle = 'black'
    ctx.beginPath();
    ctx.moveTo(startX2, startY2);
    ctx.lineTo(endX2, endY2);
    ctx.stroke();
};

let tLines2: number = 50;
let tBreak2: number = 0;
let nrFit2: number = canvas.width/tBreak2

for (let i = 0; i < canvas.width/tLines2; i++) {

    let startX2: number = canvas.width - tBreak2;
    let startY2: number = canvas.height;
    let endX2: number = canvas.width/2 - tBreak2/2;
    let endY2: number = canvas.height/2 + tBreak2/2;

    for (let i = 0; i < canvas.width/tLines2; i++) {
        triangle(startX2, startY2, endX2, endY2);
    };

    tBreak2 += tLines2;

};