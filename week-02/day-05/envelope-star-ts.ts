'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function envelope(moveToX, moveToY, lineToX, lineToY) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(moveToX, moveToY);
    ctx.lineTo(lineToX, lineToY);
    ctx.stroke();
};

let envelopeLines: number = 30;
let envelopeBreak: number = 0;

for (let i = 0; i < (canvas.height/envelopeLines)/2; i++) {

    let moveToX: number = canvas.width/2 + envelopeBreak;
    let moveToY: number = canvas.height/2;
    let lineToX: number = canvas.width/2;
    let lineToY: number = canvas.height - envelopeBreak;

    for (let i = 0; i < canvas.height/envelopeLines; i++) {
        envelope(moveToX, moveToY, lineToX, lineToY);
    };

    envelopeBreak += envelopeLines;

};

// 

function envelope1(moveToX1, moveToY1, lineToX1, lineToY1) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(moveToX1, moveToY1);
    ctx.lineTo(lineToX1, lineToY1);
    ctx.stroke();
};

let envelopeLines1: number = 30;
let envelopeBreak1: number = 0;

for (let i = 0; i < (canvas.height/envelopeLines1)/2; i++) {

    let moveToX1: number = canvas.width/2 + envelopeBreak1;
    let moveToY1: number = canvas.height/2;
    let lineToX1: number = canvas.width/2;
    let lineToY1: number = envelopeBreak1;

    for (let i = 0; i < canvas.height/envelopeLines1; i++) {
        envelope(moveToX1, moveToY1, lineToX1, lineToY1);
    };

    envelopeBreak1 += envelopeLines1;

};

//

function envelope2(moveToX2, moveToY2, lineToX2, lineToY2) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(moveToX2, moveToY2);
    ctx.lineTo(lineToX2, lineToY2);
    ctx.stroke();
};

let envelopeLines2: number = 30;
let envelopeBreak2: number = 0;

for (let i = 0; i < (canvas.height/envelopeLines2)/2; i++) {

    let moveToX2: number = canvas.width/2 + envelopeBreak2;
    let moveToY2: number = canvas.height/2;
    let lineToX2: number = canvas.width/2;
    let lineToY2: number = envelopeBreak2;

    for (let i = 0; i < canvas.height/envelopeLines2; i++) {
        envelope(moveToX2, moveToY2, lineToX2, lineToY2);
    };

    envelopeBreak2 += envelopeLines2;

};

//

function envelope3(moveToX3, moveToY3, lineToX3, lineToY3) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(moveToX3, moveToY3);
    ctx.lineTo(lineToX3, lineToY3);
    ctx.stroke();
};

let envelopeLines3: number = 30;
let envelopeBreak3: number = 0;

for (let i = 0; i < (canvas.height/envelopeLines3)/2; i++) {

    let moveToX3: number = canvas.width/2 - envelopeBreak3;
    let moveToY3: number = canvas.height/2;
    let lineToX3: number = canvas.width/2;
    let lineToY3: number = envelopeBreak3;

    for (let i = 0; i < canvas.height/envelopeLines3; i++) {
        envelope(moveToX3, moveToY3, lineToX3, lineToY3);
    };

    envelopeBreak3 += envelopeLines3;

};

// 

function envelope4(moveToX4, moveToY4, lineToX4, lineToY4) {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(moveToX4, moveToY4);
    ctx.lineTo(lineToX4, lineToY4);
    ctx.stroke();
};

let envelopeLines4: number = 30;
let envelopeBreak4: number = 0;

for (let i = 0; i < (canvas.height/envelopeLines4)/2; i++) {

    let moveToX4: number = canvas.width/2 - envelopeBreak4;
    let moveToY4: number = canvas.height/2;
    let lineToX4: number = canvas.width/2;
    let lineToY4: number = canvas.height - envelopeBreak4;

    for (let i = 0; i < canvas.height/envelopeLines4; i++) {
        envelope(moveToX4, moveToY4, lineToX4, lineToY4);
    };

    envelopeBreak4 += envelopeLines4;

};