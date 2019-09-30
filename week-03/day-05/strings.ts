'use strict';

// Given a string, compute recursively (no loops) a new string where
// all the lowercase 'x' chars have been changed to 'y' chars.

let thestring = 'This x is X a X string x.'

function changeX(letter: string): string {
    if (letter == 'x') {
        return 'y';
    }
}

console.log(changeX(thestring));