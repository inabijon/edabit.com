const { filter } = require('lodash');
var _ = require('lodash');

// Return the First Element in an Array
let getFirstValue = (array) => {
    return array[0];
}
getFirstValue([1, 2, 3, 4, 5]); // 1

// Return the Last Element in an Array
let getLastValue = (array) => {
    return array[array.length - 1];
}

//getVoteCounts
let getVoteCounts = (object) => {
    return object.upvotes - object.downvotes;
}
getVoteCounts({ upvotes: 2, downvotes: 33 })

// Lodash drop()
let drop = (array, n) => {
    return _.drop(array, n);
}
drop([1, 2, 3, 4, 5], 2);

//reverse array
let reverse = (array) => {
    return array.reverse()
}
reverse([1, 2, 3, 4, 5]);

//incrementItems 
let incrementItems = (array) => {
    return array.map(item => item + 1)
}
incrementItems([1, 2, 3, 4, 5])

//arrayToString
let arrayToString = (array) => {
    return array.toString()
}
arrayToString([1, 2, 3, 4, 5])

//findIndex
let findIndex = (array, index) => {
    return array.indexOf(index)
}
findIndex([1, 2, 3, 4, 5], 2)

//sumArray
let sumArray = (array) => {
    return array.reduce((acc, cur) => {
        return acc + cur
    }, 0)
}
sumArray([1, 2, 3, 4, 5])

//Check if an Array Contains a Given Number
let check = (array, checker) => {
    return array.includes(checker)
}
check([1, 2, 3, 4, 5], 3)

//Less Than, Greater Than
let arrBetween = (num1, num2, array) => {
    return array.filter(item => item > num1 && item < num2)
}
arrBetween(2, 10, [1, 2, 3, 4, 11, 12, 14])

//50-30-20 Strategy
let fiftyThirtyTwenty = (salary) => {
    let fifty = salary * 0.5;
    let thirty = salary * 0.3;
    let twenty = salary * 0.2;
    return { "Needs": fifty, "Wants": thirty, "Savings": twenty }
}
fiftyThirtyTwenty(19000)