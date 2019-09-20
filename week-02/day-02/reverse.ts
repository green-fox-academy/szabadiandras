'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";

function reversing(index) {
    let reverse: string = "";
    for (var i = index.length -1; i >= 0; i--) {
        reverse = reverse + index[i];
    }
    return reverse;
}

console.log(reversing(reversed));

export = reversing;