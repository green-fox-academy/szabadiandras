'use strict';

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals = ["koal", "pand", "zebr"];
animals = animals.map(stringElement => {
        return stringElement + 'a'
})
   console.log(animals);

// animals[1] = animals[1]+"a";
// console.log(animals);