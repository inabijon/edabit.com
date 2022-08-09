//calculator
class Calculator {
    add = (a, b) => a + b
    subtract = (a, b) => a - b
    multiply = (a, b) => a * b
    divide = (a, b) => a / b
}

let cal = new Calculator()
cal.add(1, 2)

//Classes For Fetching Information on a Sports Player
class SportPlayer {
    constructor(name, age, height, weight) {
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
    }

    getAge() {
        return `${this.name} is age ${this.age}`
    }
    getHeight() {
        return `${this.name} is height ${this.height}`
    }
    getWeight() {
        return `${this.name} is weight ${this.weight}`
    }
}
let p1 = new SportPlayer('David Jones', 25, 175, 75)
p1.getAge()

//Point Series 1: Skeleton
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    toString = () => {
        return `[x=${this.x}, y=${this.y}]`
    }
}

/**
 *
 * Video Streaming Plans Class
 *
 */
class BasicPlan {
    static canStream = true
    static canDownload = true
    static hasSD = true
    static hasHD = true
    static hasUHD = true
    static numOfDevices = 1
    static price = '$8.99'
}

class StandardPlan extends BasicPlan {
    static hasHD = true
    static numOfDevices = 2
    static price = '$12.99'
}

class PremiumPlan extends StandardPlan {
    static hasUHD = true
    static numOfDevices = 4
    static price = '$15.99'
}

/**
 *
 * Fullname and Email class
 *
 */

class Employee {
    constructor(fullName) {
        this.fullName = fullName
    }

    getFullName() {
        return this.fullName.trim()
    }

    getFirstName() {
        return this.fullName.trim().split(' ')[0]
    }

    getLastName() {
        return this.fullName.trim().split(' ')[1]
    }

    getEmail() {
        return `${this.getFirstName().toLowerCase()}.${this.getLastName().toLowerCase()}@company.com`
    }
}

let user = new Employee('Nabijon Ibodullaev')
user.getFullName()
user.getFirstName()
user.getLastName()
user.getEmail()

/**
 *
 * Older Than Me
 *
 */

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    compare(other) {
        let options = ['older than', 'the same age as', 'younger than']
        let text = options[Math.sign(this.age - other.age) + 1]
        return `${other.name} is ${text} me`
    }
}

let person1 = new Person('Nabijon', 21)
let person2 = new Person('Husnida', 21)

person1.compare(person2)

/**
 *
 * Make a Circle with OOP
 *
 */

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    getArea() {
        return this.radius * 2 * Math.PI
    }
}

let circle = new Circle(12)
circle.getArea()

/**
 *
 * Rectangle Series 1: Skeleton
 *
 */

class Rectangle {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
    getToString() {
        return [
            `x = ${this.x}, y = ${this.y}, width = ${this.width}, height = ${this.height}`,
        ]
    }
}

let reTangle = new Rectangle(1, 2, 3, 4)


/**
 *
 * The Sweetest Ice Cream
 *
 */

