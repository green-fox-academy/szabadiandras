'use strict';

// Create a PostIt a class that has
//   a backgroundColor
//   a text on it
//   a textColor

// Create a few example post-it objects:
//   an orange with blue text: "Idea 1"
//   a pink with black text: "Awesome"
//   a yellow with green text: "Superb!"


class PostIt {
    private backgroundColor: string;
    private text: string;
    private textColor: string;

constructor(backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}

let Idea1 = new PostIt('orange', 'Idea 1', 'blue');
let Awesome = new PostIt ('orange', 'Awesome', 'pink');
let Superb = new PostIt ('yellow', 'Superb', 'green');

console.log(Idea1);
console.log(Awesome);
console.log(Superb);