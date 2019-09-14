'use srict';

// netninja 

let myLet1 = 500;
let myLet2 = 44;
let myLet3 = myLet1 * myLet2;
console.log(myLet3 + (' first'));

myLet3 = 200;
console.log(myLet3 + (' second'));

// var vs let

const particle = {
    x: 100, y: 100
};
console.log(particle);

particle.x = 200;
console.log(particle.x);
particle.x = particle.x -100;

console.log(particle);
console.log(particle.x);

// particle.z = 50; <-- wont add z value to particle



let age: number = 5;
while (age < 10) {
	console.log("Your age is less than 10!");
	age++;
}
document.write("You are now over 10!");