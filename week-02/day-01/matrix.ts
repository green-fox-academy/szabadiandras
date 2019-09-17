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

let matrixSize = 4;
let matrixArray = [];

for(i=matrixSize-1; i>=0; i--){
    let tempArray = [];

    for(j=matrixSize-1; j>=0; j--){
        if (i==j) {
            tempArray[j] = 1;
        }else{
            tempArray[j] = 0;
        }
    }

    matrixArray.push(tempArray);
}

console.log(matrixArray);
