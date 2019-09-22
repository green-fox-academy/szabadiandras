'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

// let cbPosition: number = 0;

let cbSize: number = 20;

function checkerboard(positionX: number, positionY: number) {
    ctx.fillStyle = 'black';
    ctx.fillRect(positionX, positionY, cbSize, cbSize);
};

let incrementor: number = 0;

for (let i = 0; i < canvas.height/cbSize; i++) {

    let positionX: number = 0;
    let positionY: number = 0 + incrementor;
    let positionX2: number = cbSize;
    let positionY2: number = cbSize+incrementor;

    for (let i = 0; i < canvas.width/cbSize; i++) {
        checkerboard(positionX, positionY);
        positionX += cbSize*2;
    };
    for (let i = 0; i < canvas.width/cbSize; i++) {
        checkerboard(positionX2, positionY2);
        positionX2 += cbSize*2;
    };

    incrementor += cbSize*2;

};

/*
let positionX: number = 0;
let positionY: number = 0;
for (let i = 0; i < 10; i++) {
    checkerboard(positionX, positionY);
    positionX += cbSize*2;
};

let positionX2: number = 50;
let positionY2: number = 50;
for (let i = 0; i < 10; i++) {
    checkerboard(positionX2, positionY2);
    positionX2 += cbSize*2;
};

let positionX3: number = 0;
let positionY3: number = 100;
for (let i = 0; i < 10; i++) {
    checkerboard(positionX3, positionY3);
    positionX3 += cbSize*2;
};

let positionX4: number = 50;
let positionY4: number = 150;
for (let i = 0; i < 10; i++) {
    checkerboard(positionX4, positionY4);
    positionX4 += cbSize*2;
};

let positionX5: number = 0;
let positionY5: number = 200;
for (let i = 0; i < 10; i++) {
    checkerboard(positionX5, positionY5);
    positionX5 += cbSize*2;
};
*/