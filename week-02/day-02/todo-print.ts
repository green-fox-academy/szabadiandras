'use strict';

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo


let todoText: string = ' - Buy milk\n';
let mylist: string[] = ['My todo:', ' - Buy milk', ' - Download games', '\t - Diablo']
for (let i = 0; i <= mylist.length-1; i++) { 
    console.log(mylist[i]);
}