// We are going to play with lists. Feel free to use the built-in methods where possible.
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
console.log(list.length)
console.log(list[2]);

for (let i: number = 0; i <= list.length-1; i++) {
    i.toString();
    console.log(list[i]);
};

for (let i: number = 0; i <= list.length-1; i++) {
    i.toString();
    console.log(i+1 + ". " + list[i])   
};

delete list [1];
list.filter(function(element){
    return element != undefined;
});

list = list.filter(function(element){
    return element != undefined;
})

for (let i: number = list.length-1; i >= 0; i--) {
    i.toString();
    console.log(list[i]);
};

let filteredX = list.filter((value, index, array) => {
    return index == list.length;
});
    console.log(filteredX);
    console.log("The list elements have been removed.");

// let reversed = filtered.reverse();
//     console.log(reversed);