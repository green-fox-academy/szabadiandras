/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */
// print(dominoes);

import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2)); 
    dominoes.push(new Domino(4, 6)); 
    dominoes.push(new Domino(1, 5)); 
    dominoes.push(new Domino(6, 7)); 
    dominoes.push(new Domino(2 ,4)); 
    dominoes.push(new Domino(7, 1)); 
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();

let dominoArray = [];
dominoArray.push(dominoes[0]);

for (let i = 0; i <= dominoes.length-1; i++) {

    for (let k = 0; k <= dominoes.length-1; k++) {
        
        if ((dominoArray[i].values[1]) === (dominoes[k].values[0])) {
            
            dominoArray.push(dominoes[k])

        } else {}
    }
}

for (let i = 0; i <= dominoArray.length-1; i++) {
    let printForm = (dominoArray[i].values);
    console.log(printForm);
}