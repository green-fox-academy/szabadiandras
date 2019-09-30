'use strict';


// Person class


class Person {
    private name: string;
    private age: number;
    private gender: string;

    introduce() {
        console.log("Hi, I'm " + this.name + ", a " + this.age + ' year old ' + this.gender);
    }

    getGoal() {
        console.log("My goal is: Live for the moment!");
    }

    constructor (name?: string, age?: number, gender?: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;

    }

};

let JaneDoePerson = new Person ('Jane Doe', 30, 'female');

JaneDoePerson.introduce();
JaneDoePerson.getGoal();


// Student class


class Student {
    private name: string;
    private age: number;
    private gender: string;
    private previousOrganization: string;
    private skippedDays: number;

    getGoal() {
        console.log("Be a junior software developer.");
    }

    introduce() {
        console.log("Hi, I'm " + this.name + ", a " + this.age + ' year old ' + this.gender + ' from ' + this.previousOrganization + ' who skipped ' + this.skippedDays + ' days from the course already.');
    }

    skipDays(numberOfDays: number) {
        this.skippedDays = this.skippedDays + numberOfDays;
    }

    constructor (name?: string, age?: number, gender?: string, previousOrganization?: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.previousOrganization = previousOrganization;
        this.skippedDays = 0;
    }
};

let JaneDoeStudent = new Student ('Jane Doe', 30, 'female', 'The School of Life');

JaneDoeStudent.introduce();
JaneDoeStudent.getGoal();


// Mentor Class


class Mentor {
    private name: string;
    private age: number;
    private gender: string;
    private level: string;

    introduce() {
        console.log("Hi, I'm " + this.name + ", a " + this.age + ' year old ' + this.gender + this.level + ' mentor.');
    }

    getGoal() {
        console.log("Educate brilliant junior software developers.");
    }

    constructor (name?: string, age?: number, gender?: string, level?: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.level = level;
    }

};

let JaneDoeMentor = new Mentor ('Jane Doe', 30, 'female', 'intermediate');


// Sponsor Class


class Sponsor {
    private name: string;
    private age: number;
    private gender: string;
    private company: string;
    private hiredStudents: number;

    introduce() {
        console.log("Hi, I'm " + this.name + ", a " + this.age + ' year old ' + this.gender + ' who represents ' + this.company + ' and hired ' + this.hiredStudents + ' students so far.');
    }

    hire() {
        this.hiredStudents = this.hiredStudents + 1;
    }

    getGoal() {
        console.log("Hire brilliant junior software developers.");
    }

    constructor(name?: string, age?: number, gender?: string, company?: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.company = company;
        this.hiredStudents = 0;
    }
};

let JaneDoeSponsor = new Sponsor('Jane Doe', 30, 'female', 'Google');

JaneDoeSponsor.introduce();
JaneDoeSponsor.getGoal();


// TEST INPUT


let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

JaneDoeStudent.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  elon.hire();
}

people.forEach((person) => {
  person.introduce();
  person.getGoal();
});


// TEST OUTPUT

// Hi, I'm Mark, a 46 year old male.
// My goal is: Live for the moment.
// Hi, I'm Jane Doe, a 30 year old female.
// My goal is: Live for the moment.
// Hi, I'm John Doe, a 20 year old male from BME who skipped 0 days from the course already.
// My goal is: Be a junior software developer.
// Hi, I'm Jane Doe, a 30 year old female from The School of Life who skipped 3 days from the course already.
// My goal is: Be a junior software developer.
// Hi, I'm Gandhi, a 148 year old male senior mentor.
// My goal is: Educate brilliant junior software developers.
// Hi, I'm Jane Doe, a 30 year old female intermediate mentor.
// My goal is: Educate brilliant junior software developers.
// Hi, I'm Jane Doe, a 30 year old female who represents Google and hired 4 students so far.
// My goal is: Hire brilliant junior software developers.
// Hi, I'm Elon Musk, a 46 year old male who represents SpaceX and hired 6 students so far.
// My goal is: Hire brilliant junior software developers.