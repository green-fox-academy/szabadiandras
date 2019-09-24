'use strict';
declare function require(path: string): any;
export{};
const fs = require('fs');

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copyFunction(copyFrom: string, copyTo: string) {
    try {
        let content: any[] = [];
        let data = fs.readFileSync(copyFrom, 'utf8');
        fs. writeFileSync(copyTo, data, 'utf8');
        return true;
    }
    catch(error) {
        console.log('Task failed');
        return false;
    }
}

let copyFrom: string = 'copy.txt'
let copyTo: string = 'paste.txt'

copyFunction(copyFrom, copyTo);