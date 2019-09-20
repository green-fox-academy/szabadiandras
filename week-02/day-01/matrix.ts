'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

// let matrixSize = 4;
// let matrixArray = [];
// 
// for(let i=matrixSize-1; i>=0; i--){
//     let tempArray = [];
// 
//     for(let j=matrixSize-1; j>=0; j--){
//         if (i==j) {
//             tempArray[j] = 1;
//         }else{
//             tempArray[j] = 0;
//         }
//     }
// 
//     matrixArray.push(tempArray);
// }
// 
// console.log(matrixArray);


let matrixSize = 10;
let matrix: string = "";

for(let i=1; i<=matrixSize; i++){
    let row = "";

    for(let j=1; j<=matrixSize; j++){
        if (i==j) {
            row = row + "1 ";
        }else{
            row = row + "0 ";
        }
    }

    matrix = matrix + row + "\n";
}

console.log(matrix);