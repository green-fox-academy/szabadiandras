'use strict';

let myMap = {};

if (myMap <= 0) {
    console.log('The list is NOT empty.');
} else {
    console.log('The list is empty.');
}

myMap = {
    97: 'a',
    98: 'b',
    99: 'c',
    65: 'A',
    66: 'B',
    67: 'C',
};

console.log(Object.keys(myMap));
console.log(Object["values"](myMap));

myMap[68] = 'D'

console.log(Object.keys(myMap).length);
console.log(myMap[99]);

delete myMap[97];

console.log(myMap.hasOwnProperty(100));

myMap = {};