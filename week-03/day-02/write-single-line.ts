'use strict';
declare function require(path: string): any;
export{};
const fs = require('fs');

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

function manipulate(fileName: string, inputName: string) {
    try {
        fs.readFileSync(fileName, 'utf8');
        fs.writeFileSync(fileName, inputName);
    }
    catch (error) {
        console.log('Unable to write file: ' + fileName);
    }
}

let fileName: string = 'myfile.txt'
let inputName: string = 'Andras Szabadi'

manipulate(fileName, inputName);