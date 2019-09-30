'use strict';

let myMap2 = {};

myMap2 = {
    '978-1-60309-452-8': 'A letter to Jo',
    '978-1-60309-459-7': 'Lupus',
    '978-1-60309-444-3': 'Red Panda and Moon Bear',
    '978-1-60309-461-0': 'The Lab',
};

for (let key in myMap2) {
    let value = myMap2[key];
    console.log(value + ' (ISBN: ' + key + ')');
}

delete myMap2['978-1-60309-444-3'];
console.log(myMap2);

for (let key in myMap2) {
    if(myMap2[key] == 'The Lab'){
        delete myMap2[key];
    }
}

console.log(myMap2);

myMap2['978-1-60309-450-4'] = 'They Called Us Enemy';
myMap2['978-1-60309-453-5'] = 'Why Did We Trust Him?'

console.log(myMap2);

console.log(myMap2.hasOwnProperty('478-0-61159-424-8'));
console.log(myMap2['978-1-60309-453-5']);