// -  Create a variable named `numList (numX due to duplication)` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

let numX = [1, 2, 3, 4, 5];

let numListNew2 = numX.map(number => {
    if (numX[2] === 3) {
        numX[2]++;
    } return number;
});
    console.log(numListNew2);

// how to access a specific array-element?