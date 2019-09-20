// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(parameter1, parameter2, parameter3) {
    for (let i = 0; i <= arguments.length-1; i++) {
        console.log(arguments[i]);
    }
};
printParams(1,2,3);