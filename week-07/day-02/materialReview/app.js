'use strict';

let counter = 1;

let myInterval = setInterval(function () {
    console.log('Thinking about Stacy');
    counter++;
    if (counter > 5) {
        clearInterval(myInterval);
    }
    if (counter > 2) {
        clearTimeout(stacyWillDie);
    }
}, 2000);

callMyFunctionAfter3seconds(function () {
    console.log('I will do something, and its after 3 seconds');
});

let stacyWillDie = setTimeout(function () {
    console.log('Stacy dies for you');
}, 5000);

function callMyFunctionAfter3seconds(whatIShouldDoAfter) {
    setTimeout(function () {
        whatIShouldDoAfter();
    }, 3000);
} 