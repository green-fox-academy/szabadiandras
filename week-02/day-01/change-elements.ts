// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList = [1, 2, 3, 8, 5, 6];

let numListNew = numList.map(number => {
    if (number === 8) {
        return 4;
    } return number;
});
    console.log(numListNew);