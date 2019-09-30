import { Student } from "./student"
import { Mentor } from "./mentor"

export class Cohort {
    protected _name: string;
    protected _students: Student[];
    protected _mentors: Mentor[];

    public addStudent(addStudent: Student) {
        this._students.push(addStudent);
    }

    public addMentor(addMentor: Mentor) {
        this._mentors.push(addMentor);
    }

    public info(name?: string, studentSize?: number, mentorSize?: number) {
        studentSize = this._students.length;
        mentorSize = this._mentors.length;
        console.log('Cohort name: ' + this._name + ', number of students: ' + this._students.length + ' number of mentors: ' + this._mentors.length);
    }

    constructor(name: string) {
        this._name = name;
        this._students = [];
        this._mentors = [];
    }
}