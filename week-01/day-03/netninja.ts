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

// break and continue
console.log('\nBreak & Continue\n');

let banana: number;
for (banana = 0; banana < 10; banana++) {

    if (banana === 5 || banana === 3){
        continue;
    }

    console.log(banana);

    if (banana === 7){
        break;
    }
}

console.log('You reached the desired amount of banana, which is ' + banana + '.');

// Numbers
console.log('\nNumbers\n');

let f = 5;
let g = 7;

console.log(f + g);
 

// -----------------------------------------------------------------

let youLikeMeat = false;
	if (youLikeMeat){
		console.log("Here is the meaty menu");
	} else {
		console.log("Here is the vegetarian menu");
	}

let dots = (" ..... ");
console.log(dots);

let myNum = 1;
	if (myNum >= 10){
		console.log("myNum is greater or equal to 10");
	} else {
		console.log("myNum is not greater or equal to 10");
	}

console.log(dots);

let myAge = 25;

if (myAge > 30){
	console.log("You are over 30!");
} else if (myAge > 20){
	console.log("You are over 20!");
} else if (myAge > 10){
	console.log("You are over 10!");
} else {
	console.log("You are not over 10!");
}

console.log(dots);


let ageCheck = 18;
if (ageCheck >= 18 && ageCheck <= 30){
	console.log("You can come to the party!");
} else {
	console.log("You can't come to the party!");
}

console.log(dots);
console.log(dots);

let ageCheck2 = 26;
if (ageCheck2 < 18 || ageCheck2 > 30 || ageCheck2 === 25){
	console.log("You can't come to the party!");
} else {
	console.log("You can come to the party!");
}

// view it in console or terminal

let age2 = 5;
while (age2 > 10) {
	console.log("Your age is less than 10!");
	age2++;
}
console.log("You are now over 10!");