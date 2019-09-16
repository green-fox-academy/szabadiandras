'use strict';

// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

let abc = ["Arthur", "Boe", "Chloe"]
console.log(abc);

abc[0] = abc[2];
abc.splice(2, 1, 'Arthur');
console.log(abc);

// review