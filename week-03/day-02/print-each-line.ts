'use strict';
declare function require(path: string): any;
export{};
const fs = require('fs');

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

function file(fileName: string) {
    try {
        let content = fs.readFileSync(fileName, 'utf8');
        console.log(fileName);
    }
    catch(error) {
        console.log('Unable to read file: ' + fileName);
    }
}

file('my-file.txt')