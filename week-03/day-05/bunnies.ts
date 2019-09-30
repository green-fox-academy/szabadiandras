'use strict';

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies
// recursively (without loops or multiplication).

function bunnies(bunny: number): number {
    if (bunny === 0) {
        return 0;
    } else if (bunny > 0) {
        return 2 + bunnies(bunny-1)
    }
}

console.log(bunnies(2));