'use strict';

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList = [1, 2, 3, 8, 5, 6];

numList = numList.map(function (origin) {
    if (origin === 8) {
        return 4;
    } return origin;
});
console.log(numList);

// let mikiList = [1, 2, 3, 8, 5, 6];
// 
// mikiList.forEach(function(val,index){
//     if(val == 8){
//         mikiList[index] = 4;
//     }
// });
// console.log(mikiList);



// function valami(number)
// number => 