//11
function nextEdge(side1, side2) {
	return (side1 + side2) - 1
}
nextEdge(8, 10)

//12
function remainder(x, y) {
	return x % y
}
remainder(1, 3)

//13
function findPerimeter(side1, side2) {
	return 2 * side1 + 2 * side2
}
findPerimeter(6, 7);

//14
function giveMeSomething(something) {
	return "something" + " " + something
}
giveMeSomething('is better than nothing')

//15
function squared(number) {
	return number ** 2
}
squared(5)

//16
function lessThanOrEqualToZero(number) {
	if (number <= 0)
		return true
	return false
}
lessThanOrEqualToZero(5)

//17
function sumPolygon(number) {
	if (number > 2)
		return (number - 2) * 180
	else return "number should be larger than 2"
}
sumPolygon(3)

//18
let points = (number1, number2) => {
	return number1 * 2 + number2 * 3
}

points(1, 1)

//19
let nameString = (name) => {
	return name + "Edabit"
}
nameString("Nabijon")

//20
let lessThan100 = (number1, number2) => {
	if (number1 + number2 < 100)
		return true
	return false
}
lessThan100(20, 30)

//21
let printArray = (number) => {
	let array = [];
	for (let i = 1; i <= number; i++)
		array.push(i)
	return array
}
printArray(2)
