'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let height: number = 20;
let width: number = 30;
let lenght: number = 50;

let SurfaceArea = 2 * lenght * width + 2 * lenght * height + 2 * width * height;
    console.log('Surface Area: ' + SurfaceArea);

let Volume = lenght * width * height;
    console.log('Volume: ' + Volume);

