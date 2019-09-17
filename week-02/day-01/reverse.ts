'use strict';

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let numList2 = [3,4,5,6,7];
	let newNumList = [];
	for (let i = numList2.length - 1; i >= 0; i--) {
		newNumList.push(numList2[i]);
	}
	console.log(newNumList);

	
	// direct method
    console.log(numList2.reverse());