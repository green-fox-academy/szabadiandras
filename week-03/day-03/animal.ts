'use strict';

/* Create an Animal class
- Every animal has a hunger value, which is a whole number
- Every animal has a thirst value, which is a whole number

- When creating a new animal object these values are created with the     default 50 value

- Every animal can eat() which decreases their hunger by one
- Every animal can drink() which decreases their thirst by one
- Every animal can play() which increases both by one */

class Animal {
    private _hunger: number = 50;
    private _thirst: number = 50;

    eat(){
        this._hunger--;
    }
    thirst(){
        this._thirst--;
    }
    play(){
        this._hunger++;
        this._thirst++;
    }
    getHunger() {
        console.log(this._hunger);
    }
}

let lion = new Animal();
lion.eat();
lion.getHunger();