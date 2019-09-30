'use strict';

// Create a list ('List A') which contains the following values
// Apple, Avocado, Blueberries, Durian, Lychee
// Create a new list ('List B') with the values of List A
// Print out whether List A contains Durian or not
// Remove Durian from List B
// Add Kiwifruit to List A after the 4th element
// Compare the size of List A and List B
// Get the index of Avocado from List A
// Get the index of Durian from List B
// Add Passion Fruit and Pomelo to List B in a single statement

// Print out the 3rd element from List A

let listA = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let listB = listA;

console.log(listA.indexOf('Durian') > -1 );

listB = listB.filter(function(value){
    return value != 'Durian';
});

let ins = listA.indexOf('Durian');
listA.splice(ins, 0, 'Kiwifruit');

if (listA.length > listB.length) {
    console.log('ListA is longer.')
} else if (listA.length == listB.length) {
    console.log('The size of the lists are equal.')
} else {
    console.log('ListB is longer.')
}

console.log(listA.indexOf('Avocado'));
console.log(listB.indexOf('Durian') > -1 );

listB = listB.concat('Passion Furit', 'Pomelo');
console.log(listB);

console.log(listA[2]);