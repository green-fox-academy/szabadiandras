'use srict';

// netninja 

let myLet1 = 500;
let myLet2 = 44;
let myLet3 = myLet1 * myLet2;
console.log(myLet3 + (' first'));

myLet3 = 200;
console.log(myLet3 + (' second'));

console.log(' ');

// var vs let

const particle = {
    x: 100, y: 200, z: 0
};
console.log(particle);

particle.z = 50;
console.log(particle.z);
particle.z = particle.z -25;
console.log(particle);
console.log(particle.z);

// particle.z = 50; <-- wont add z value to particle

//the while loop
console.log('\nThe while loop\n')

let age: number = 5;
while (age < 10) {
	console.log("Your age is less than 10!");
	age++;
}
    console.log("You are now over 10!");

// the for loop
console.log('\nThe for loop\n');

let appleNumber: number = 0; // <- edit this number
let appleMinNumber: number = 10;

if (appleNumber === 0) {
    console.log("You don't have any apple. Please take some.")
    let appleNumberMore = (appleNumber + 1); 
    for (appleNumberMore; appleNumberMore < appleMinNumber; appleNumberMore++) {
    console.log('You have ' + (appleNumberMore) + ' apple(s) only. Take one more!');
}
        console.log('Now you have ' + appleMinNumber + ' apple(s)!');
} else {
    let appleNumberMore = (appleNumber + 0);
    for (appleNumberMore; appleNumberMore < appleMinNumber; appleNumberMore++)
    console.log('You have ' + (appleNumberMore) + ' apple(s) only. Take one more!');
    console.log('Now you have ' + appleMinNumber + ' apple(s)!');
}