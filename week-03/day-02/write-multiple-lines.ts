'use strict';
declare function require(path: string): any;
export{};
const fs = require('fs');

// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

function mutiple(path: string, word: string, number: number) {
    try {
        let content = fs.readFileSync('apples.txt', 'utf8');
        fs.writeFileSyns ('apples.txt', word);
    }
    catch {};
}

let number: number = 5;
let word: string = 'apple' 
let path: string = 'C:\Users\Szabadi András\Documents\Documents\Green Fox Academy\szabadiandras\week-03\day-02\apple'