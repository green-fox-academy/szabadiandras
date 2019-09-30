export class Person {
    protected _name: string;
    protected _age: number;
    protected _gender: string;
    protected _goal: string;

    constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', goal?: string) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._goal = goal;
    }

    protected specificIntroduce(): string{
        return "";
    }

    public introduce(geet?: string): void{
        console.log("Hi, I'm " + this._name + ", a " + this._age + ' year old ' + this._gender + ' ' + this.specificIntroduce());
    }

    protected specificGoal(): string{
        return "Live for the moment!";
    }

    public getGoal(): void {
        console.log("My goal is: " + this.specificGoal());
    }
}