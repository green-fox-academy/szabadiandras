'use strict';

import { Pirate } from "./pirate"

export class Ship {
  protected pirates: Pirate[] = [];

  fillShip(): void {
    let crewNumber = Math.floor(Math.random() * 5) + 2;
    let captain = new Pirate('Captain');
    captain.isCaptain();
    this.pirates.push(captain);
    for (let i = 1; i < crewNumber; i++) {
      let crew = new Pirate('Pirate' + i);
      this.pirates.push(crew);
    }
  }
}



  //  getScore() {
  //    let sum = 0;
  //    this.pirates.forEach(pirates => sum += pirates.scoreAmount);
  //    return sum;
  //  }

  // battle(otherShip: string): void {
  //   let score = 
  // }