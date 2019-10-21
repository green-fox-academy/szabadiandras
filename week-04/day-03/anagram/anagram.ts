'use strict';

// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

export class Anagramma {

    public anagram() {

        let p1: string = ('listen').split('').sort().join('');
        let p2: string = ('silent').split('').sort().join('');

        if (p1 === p2) {
            return true;
        } else {
            return false;
        }
    }
}

const testing = new Anagramma();
console.log(testing.anagram());