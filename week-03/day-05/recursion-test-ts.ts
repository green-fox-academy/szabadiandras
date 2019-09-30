'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Create and use classes (eg. Triangle, Circle, Line) with methods 
// (eg. draw function with coordinates as parameters)

function myTree(startX, startY, length, angle) {
    ctx.beginPath(); // draw the lines (branches)
    ctx.save(); // to save & restore the canvas

    ctx.translate(startX, startY); //
    ctx.rotate(angle * Math.PI/90); //
    ctx.moveTo(0, 0)
    ctx.lineTo(0, -length);
    ctx.stroke();

   if (length < 10) {
       ctx.restore();
       return;
   }

    myTree(0, -length, length*0.8, -15);
    myTree(0, -length, length*0.8, 15);

    ctx.restore();

}

myTree(350,600,120,0);