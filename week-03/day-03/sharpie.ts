'use strict';

class Sharpie {
    private color: string;
    private width: number;
    private inkAmount: number = 100;

    constructor(color: string, width: number) {
        this.color = color;
        this.width = width;
    }

    use() {
        this.inkAmount--;
    }

    getSharpie() {
        console.log(this.inkAmount);
    }
};

let mySharpie = new Sharpie('red', 50);
mySharpie.use();
mySharpie.getSharpie();
console.log(mySharpie);