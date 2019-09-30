'use strict';

// Find the greatest common divisor of two numbers using recursion.

function divisior(n: number, m:number) {
    if (!m) {
        return n;
    }
    return divisior(m, n % m);
};

console.log(divisior(123, 456));