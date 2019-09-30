import { Person } from "./person"

export class Mentor extends Person {
    private _level: string;

    public specificGoal(): string{
        return "Educate brilliant junior software developers."
    }

    protected specificIntroduce(): string{
        return this._level + " mentor.";
    }

    constructor(name?: string, age?: number, gender?: string, level: string = 'intermediate') {
        super (name, age, gender);
        this._level = level;
    }
}