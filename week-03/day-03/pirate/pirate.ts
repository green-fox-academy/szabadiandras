'use strict';

export class Pirate {
  private _name: string;
  private _alcoholLevel: number;
  private _healthPoints: number;
  private _isAlive: boolean;
  private _isConscious: boolean;
  private _isCaptain: boolean;
  private _scoreAmount: number;

  constructor(name: string, alcoholLevel?: number, healthPoints?: number, isAlive?: boolean, isConscious?: boolean, isCaptain?: boolean) {
    this._name = name;
    this._alcoholLevel = 0;
    this._healthPoints = 10;
    this._isAlive = true;
    this._isConscious = true;
    this._isCaptain = false;
  }

  isCaptain() {
    return this._isCaptain = true, this.scoreAmount();
  }

  scoreAmount(){
    return this._alcoholLevel
  }

  drinkSomeRum() {
    if (this._isAlive == false) {
      console.log("Cannot drink more, the pirate is dead.")
    } else {
      this._alcoholLevel++;
      return this._alcoholLevel;
    }
  }

  howsItGoingMate() {
    if (this._alcoholLevel <= 4) {
      console.log('Pour me anudder!')
    } else if (this._alcoholLevel > 4) {
      console.log("How d'ya d'ink its goin?");
    } else if (this._alcoholLevel > 10) {
      this._isAlive = false;
      console.log("The pirate drank too much and died.")
    }
  }

  die() {
    console.log('The pirate is dead.')
    return this._isAlive = false;
  }

  brawl(opponent: Pirate) {
    if (opponent._isAlive) {
      let result = Math.floor(Math.random() * 3) + 1;
      if (result == 1) {
        console.log(opponent._name + ' lost and died.');
        opponent._isAlive = false;
      }
      if (result == 2) {
        console.log(this._name + ' lost and died.');
        this._isAlive = false;
      }
      if (result == 3) {
        console.log(this._name + ' and ' + opponent._name + ' both passed out.')
      }
    } else {
      console.log('The opponent pirate is dead, cannot fight.')
    }
  }
};