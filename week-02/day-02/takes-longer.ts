'use strict';

// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let indexIt = quote.indexOf('It')
let indexYou = quote.indexOf('you');
 
quote = quote.substring(0, indexIt+3) + "always takes longer than" + quote.substring(indexYou-1);
 
console.log(quote);