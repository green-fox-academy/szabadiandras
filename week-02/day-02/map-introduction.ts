'use strict';

let output: string = ''

let myMap = {};

if (myMap <= 0) {
    console.log('The list is NOT empty.');
} else {
    console.log('The list is empty.');
}

myMap = {
    [97]: 'a',
    [98]: 'b',
    [99]: 'c',
    [65]: 'A',
    [66]: 'B',
    [67]: 'C',
};

console.log(Object.keys(myMap));
console.log(myMap[1]);