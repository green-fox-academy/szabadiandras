'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += "%";
    else
      board += " ";
  }
  board += "\n";
}
console.log(board);

// let matrixSize = 10;
// let matrix: string = "";
// 
// for(let i=1; i<=matrixSize; i++){
//     let row = "";
// 
//     for(let j=1; j<=matrixSize; j++){
//         if (j%2 == 0) {
//             row = row + "1 ";
//         }else{
//             row = row + "0 ";
//         }
//     }
// 
//     matrix = matrix + row + "\n";
// }
// 
// console.log(matrix);