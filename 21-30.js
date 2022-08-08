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
let and = (boolean1, boolean2) => {
    if (boolean1 === true && boolean2 === true)
        return true
    return false
}
and(true, true)

//24
let isSameNum = (num1, num2) => {
    if (num1 === num2)
        return true
    return false
}
isSameNum(2, 3)

//25
let footballPoints = (wins, draws, losses) => {
    return wins * 3 + draws * 2 + losses * 0
}
footballPoints(3, 4, 2)

//26 
let convert = (hours, minutes) => {
    return hours * 3600 + minutes * 60
}
convert(1, 3)

//27
let isSeven = (number) => {
    if (number === 7)
        return true
    return false
}
isSeven(7)

//28
let checkEquality = (a, b) => a === b
checkEquality(NaN, NaN)

//29
let profitableGamble = (prob, price, pay) => {
    if (prob * price > pay)
        return true
    return false
}
profitableGamble(0.2, 50, 9)