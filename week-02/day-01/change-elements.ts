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
console.log(numList[3]);

// let mList = [1, 2, 3, 8, 5, 6];
// 
// mList.forEach(function(val,index){
//     if(val == 8){
//         mList[index] = 4;
//     }
// });
// console.log(mList);



// function valami(number)
// number => 