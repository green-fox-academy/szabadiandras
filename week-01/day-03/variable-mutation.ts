    'use strict';

let aa: number = 3;
// make it bigger by 10
aa = aa + 10;
console.log(a);

let bb: number = 100;
// make it smaller by 7
bb = bb - 7;
console.log(b);

let cc: number = 44;
// double c's value
cc = cc * 2;
console.log(c);

let dd: number = 125;
// divide d's value by 5
dd = dd / 5;
console.log(d);

let e: number = 8;
// what's the cube of e's value?
e = Math.pow(e , 3);
console.log(e);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
if (f1 < f2) {
  console.log('The number of f1 is lower than f2!')
} else {
  console.log('The number of f1 is higher than f2!')
}

let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (as a boolean)
if (g1 < g2 * 2) {
  console.log('The double of g2 is bigger than g1!')
} else {
  console.log('The double of g2 is smoller than g1!')
}

let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)
if (h % 11 === 0) {
    console.log('The number 11 is a divisor of 1357988018575474!')
} else {
    console.log('The number 11 is NOT a divisor of 1357988018575474!')
}

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
//  -- Check with mentors -> if (i1 = Math.pow(i1 , 2)) < (i1) > (i1 = Math.pow(i1 , 3)) --
let i22: number = Math.pow(i2 , 2);
let i23: number = Math.pow(i2 , 3);
if (i22 < i1 && i1 < i23) {
    console.log('The "i1" is higher than i2 squared and smaller than i2 cubed!')
} else {
    console.log('The "i1" is NOT higher than i2 squared and smaller than i2 cubed!')
}

let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
if (j % 3 === 0) {
    console.log('The number is divisible by 3!')
} else {
    console.log('The number is not divisible by 3!')
}
if (j % 5 === 0) {
    console.log('The number is divisible by 5!')
} else {
    console.log('The number is not divisible by 5!')
}

//console.log(k);