//21
let printArray = (number) => {
    let array = [];
    for (let i = 1; i <= number; i++)
        array.push(i)
    return array
}
printArray(2)

//22
let animals = (chickens, cows, pigs) => {
    return chickens * 2 + cows * 4 + pigs * 4
}
animals(2, 3, 5)

//23