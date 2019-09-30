'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

// let cbPosition: number = 0;

let cbSize: number = 10;

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
