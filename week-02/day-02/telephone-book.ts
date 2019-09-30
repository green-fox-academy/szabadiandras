'use strict';

let book = {};

book = {
    'William A. Lathan': '405-709-1865',
    'John K. Miller': '402-247-8568',
    'Hortensia E. Foster': '606-481-6467',
    'Amanda D. Newland': '319-243-5613',
    'Brooke P. Askew': '307-687-2982'
};

console.log(book['John K. Miller']);

Object.keys(book).forEach (function whose(value) {
    if (book[value] === '307-687-2982') {
        console.log(value);
    }
});

console.log(book.hasOwnProperty('Chris E. Myers'));
