// We are going to play with lists. Feel free to use the built-in methods where possible.
// 
// Create an empty list which will contain names (strings)
// Print out the number of elements in the list
// Add William to the list
// Print out whether the list is empty or not
// Add John to the list
// Add Amanda to the list
// Print out the number of elements in the list
// Print out the 3rd element
// Iterate through the list and print out each name
//      William
//      John
//      Amanda
// Iterate through the list and print
//      1. William
//      2. John
//      3. Amanda
// Remove the 2nd element
// Iterate through the list in a reversed order and print out each name
//      Amanda
//      William
// Remove all elements

let list = [];
    console.log(list.length);
list.push ('William');
    console.log(list);

    if (list.length <= 0) {
        console.log('The list is empty.');
    } else {
        console.log('The list is NOT empty.');
    }
    list.push ('John');
    list.push ('Amanda');
    console.log(list.length-1);
console.log(list[2]);

// for (let i: number = 0; i < list.length; i++) {
//     console.log([list[i]);
// 
// }
