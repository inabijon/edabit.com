//31
let arrowFunc = (param) => param
arrowFunc("anyThing")

//32
let frames = (minutes, frame) => {
    return minutes * 60 * frame
}
frames(10, 1)

//33
function toArray(str) {
    var arr = [];
    var s = "";
    var bool, b = 0;
    if (str[0] == "-") {
        b = 1; bool = true;
    }

    for (var i = b; i < str.length; i++) {
        ch = str.charAt(i);
        if (!isNaN(ch)) {
            s += ch;
        } else {
            if (arr.length == 0 && bool) {
                arr.push(parseInt("-" + s));
            } else {
                arr.push(parseInt(s));
            }
            arr.push(ch);
            s = "";
        }
    }

    arr.push(parseInt(s));
    return arr;
}
toArray("23+4")

//34
let greeting = (name) => {
    if (name === "Mubashir")
        return `Hello, my love!`
    return `Hello, ${name}`
}
greeting("Helen")

//35
let makesTen = (num1, num2) => {
    if (num1 === 10 || num2 === 10)
        return true
    else if (num1 + num2 === 10)
        return true
    return false
}
makesTen(1, 9)

//36
let calculateFuel = (fuel) => {
    if (fuel < 0)
        return "fuel can't less than zero"
    if (fuel > 10)
        return fuel * 10
    else return 100
}
calculateFuel(9.99)

//37
let maxNum = (num1, num2) => {
    if (num1 > num2)
        return num1
    else if (num1 === num2)
        return "same numbers"
    return num2
}
maxNum(2, 4)

//38
let makePair = (num1, num2) => {
    return [num1, num2]
}
makePair(1, 2)

//39
let comp = (string1, string2) => {
    if (string1.length === string2.length)
        return true
    return false
}
comp("hello", "hello")

//40
let isEmpty = (string) => {
    if (string.length === 0)
        return true
    return false
}
isEmpty("")


