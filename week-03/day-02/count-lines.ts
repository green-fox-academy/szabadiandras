// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';
declare function require(path: string): any;
export{};
const fs = require('fs');

//

// let readMe = fs.readFileSync('test.txt', 'utf8')
// console.log(readMe);

function nameOfFile(fileName: string) {
    try {
        let content = fs.readFileSync(fileName, 'utf8');
        let lines = content.trim().split('\r\n');
        console.log(lines.length);
    }
    catch (returMessage) {
        console.log('0');
    }
}
nameOfFile('test.txt');