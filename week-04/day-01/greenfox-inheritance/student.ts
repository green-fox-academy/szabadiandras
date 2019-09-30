import { Person } from "./person"

export class Student extends Person {
    private _previousOrganization: string;
    private _skippedDays: number;

    public specificGoal(): string{
        return "Be a junior software developer"
    }

    public specificIntroduce(): string{
        return " from " + this._previousOrganization + " who skipped " + this._skippedDays + " days from the course already.";
    }

    skipDays(numberOfDays: number) {
        this._skippedDays = this._skippedDays + numberOfDays;
    }

    constructor(name?: string, age?: number, gender?: string, goal?: string, previousOrganization: string = 'The School of Line') {
        super (name, age, gender, goal)
        this._previousOrganization = previousOrganization;
        this._skippedDays = 0;
    }
}
