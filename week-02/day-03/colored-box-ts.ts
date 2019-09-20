'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

// ctx.strokeStyle = 'red';
// ctx.beginPath();
// ctx.moveTo (200, 100);
// ctx.lineTo(400, 100);
// ctx.stroke();
// 
// ctx.strokeStyle = 'green'
// ctx.beginPath();
// ctx.moveTo (200, 300);
// ctx.lineTo(400, 300);
// ctx.stroke();
// 
// ctx.strokeStyle = 'blue'
// ctx.beginPath();
// ctx.moveTo (200, 100);
// ctx.lineTo(200, 300);
// ctx.stroke();
// 
// ctx.strokeStyle = 'yellow'
// ctx.beginPath();
// ctx.moveTo (400, 100);
// ctx.lineTo(400, 300);
// ctx.stroke();

let lines = [
    {
      color: 'red',
      startposition: {
          x: 200,
          y: 100
      },
      endPosition: {
          x: 400,
          y: 100
      }
    },
    {
        color: 'blue',
      startposition: {
          x: 200,
          y: 300
      },
      endPosition: {
          x: 400,
          y: 300
      }
    },
    {
        color: 'yellow',
      startposition: {
          x: 200,
          y: 100
      },
      endPosition: {
          x: 200,
          y: 300
      }
    },
    {
        color: 'green',
      startposition: {
          x: 400,
          y: 100
      },
      endPosition: {
          x: 400,
          y: 300
      }
    },
];


 lines.forEach (elem => {
     ctx.strokeStyle = elem.color;
     ctx.beginPath();
     ctx.moveTo (elem.startposition.x, elem.startposition.y);
     ctx.lineTo(elem.endPosition.x, elem.endPosition.y);
     ctx.stroke();
 });