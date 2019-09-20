// -  Create a function called `factorio`
//    that returns it's input's factorial

let factorio = 5;

function fct(value) {
    let starting = 1;
    for (let i = 1; i <= value; i++) {
        starting *= i;
    }
    return starting;
}

console.log(fct(factorio));
console.log('The factorial of ' + factorio + ' is ' + fct(factorio) + '.');