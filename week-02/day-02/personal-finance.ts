'use strict';

let numberList = [500, 1000, 1250, 175, 800, 120];
let summa: number = 0;

for (let i = 0; i < numberList.length; i++) {
    summa += numberList[i];
}

console.log(summa);
console.log(Math.max(...numberList));
console.log(Math.min(...numberList));

let avg = summa / numberList.length;

console.log(Math.floor(avg));