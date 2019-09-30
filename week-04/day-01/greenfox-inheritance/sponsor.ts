import { Person } from "./person"

export class Sponsor extends Person {
    private _company: string;
    private _hiredStudents: number;

    protected specificIntroduce(): string{
        return ' who represents ' + this._company + ' and hired ' + this._hiredStudents + ' students so far.';
    }

    public hire() {
        this._hiredStudents += 1;
    }

    public specificGoal(): string{
        return "Hire brilliant junior software developers."
    }

    constructor(name?: string, age?: number, gender?: string, company: string = 'Google') {
        super (name, age, gender)
        this._company = company;
        this._hiredStudents = 0;
    }
}
