'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long

console.log("Average conding hours at Green Fox Academy")
console.log("")

let averageCodingHours = 6;
let semeterLength = 17;
let averageWorkHours = 52;

let workDays = 5;
let everyDay = 7;

// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.

console.log("The number of hours spent with coding in a semester if the attendee only codes on workdays:")
let codingHoursInSemester = workDays * averageCodingHours * semeterLength;
    console.log(codingHoursInSemester);
console.log("")

//This is the calculation for the total work hours

console.log("The total number of work hours in a semester:")
let totalWorkHours = averageWorkHours * semeterLength;
    console.log(totalWorkHours);
console.log("")

// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

console.log("The percentage of the coding hours in the semester if the average work hours is weekly 52:")
let codingPercentage = codingHoursInSemester * 100 / totalWorkHours;
    console.log(codingPercentage);