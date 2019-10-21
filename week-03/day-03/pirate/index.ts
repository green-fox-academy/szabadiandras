import { Pirate } from './pirate'
import { Ship } from './ship'

let Jack = new Pirate('Jack');
let Armando = new Pirate('Armando');
let Parrot = new Pirate('Perry, the parrot');

Jack.drinkSomeRum();
Jack.howsItGoingMate();
Jack.drinkSomeRum();
Jack.drinkSomeRum();
Jack.drinkSomeRum();
Jack.drinkSomeRum();
Jack.howsItGoingMate();
Jack.die();
Jack.drinkSomeRum();

Jack.brawl(Armando);
Armando.die();
Jack.brawl(Armando);

//console.log('');
//let Warrior = new Ship;
//Warrior.fillShip();
//console.log(Warrior);