'use strict';
declare function require(path: string): any;
export{};
const fs = require('fs');

// Create a method that decrypts duplicated-chars.txt

function decrypt(filename: string) {
    try {
        for(let i = 0; i < filename.toString.length; i++) {}
            let content: any[] = [];
            let data = fs.readFilyeSync(filename, 'uft8');
            fs. writeFileSyns(filename, content, 'utf8');
    } catch (error) {
        console.log('Error while decrypting file');
    }
}

let copy: string = 'duplicated-chars.txt'
decrypt('duplicated-chars.txt');