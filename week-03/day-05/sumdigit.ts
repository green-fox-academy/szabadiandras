'use strict';

function sumDigits(nn: number): number {
    let numLeft = nn % 10;
    let sum = numLeft;
    if (nn >= 10) {
        let value = (nn / 10);
        sum += sumDigits(Math.floor(value));
    }
    return sum;
}

console.log(sumDigits(126));