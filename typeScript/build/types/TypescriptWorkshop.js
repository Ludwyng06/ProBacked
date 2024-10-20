const Firstname = "Ludwyng";
console.log(Firstname, "name");
const age = 19;
console.log(age, "age");
const toy = undefined;
console.log(undefined, "undefined");
console.log(toy);
const lol = null;
console.log(null, "null");
console.log(lol);
const state = true;
console.log(state, "state");
function calculateRectangleArea(base, height) {
    return base * height;
}
const base = 6;
const height = 8;
const result = calculateRectangleArea(base, height);
console.log("El resultado del área es:", result);
class Car {
    constructor(make, model, color, brand) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.brand = brand;
    }
    displayCarInfo() {
        console.log(`El año del carro es ${this.make}, el modelo es ${this.model}, su color es ${this.color}, la marca es ${this.brand}`);
    }
}
const infoCar = new Car("Japón", 2015, "negro", "Toyota");
infoCar.displayCarInfo();
class Rectangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    calculateShapeArea() {
        return this.base * this.height;
    }
}
const rectangle = new Rectangle(3, 5);
console.log("El área del rectángulo es:", rectangle.calculateShapeArea());
const books = [
    {
        title: "Harry Potter y la piedra filosofal",
        author: "J.K. Rowling",
        year: 1997
    },
    {
        title: "Harry Potter y la cámara secreta",
        author: "J.K. Rowling",
        year: 1998
    },
    {
        title: "Harry Potter y el prisionero de Azkaban",
        author: "J.K. Rowling",
        year: 1999
    }
];
const filterBooksByAuthor = books.filter(book => book.author === "J.K. Rowling");
console.log("Libros de J.K. Rowling:", filterBooksByAuthor);
class Library {
    constructor() {
        this.books = [];
    }
    addNewBook(book) {
        this.books.push(book);
    }
    searchBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }
}
const library = new Library();
library.addNewBook({ title: "Harry Potter y la piedra filosofal", author: "J.K. Rowling", year: 1997 });
library.addNewBook({ title: "Harry Potter y la cámara secreta", author: "J.K. Rowling", year: 1998 });
library.addNewBook({ title: "Harry Potter y el prisionero de Azkaban", author: "J.K. Rowling", year: 1999 });
library.addNewBook({ title: "El león, la bruja y el ropero", author: "C.S. Lewis", year: 1950 });
library.addNewBook({ title: "El príncipe Caspian", author: "C.S. Lewis", year: 1951 });
const harryPotterBooks = library.searchBooksByAuthor("J.K. Rowling");
console.log("Libros de J.K. Rowling:", harryPotterBooks);
const narniaBooks = library.searchBooksByAuthor("C.S. Lewis");
console.log("Libros de C.S. Lewis:", narniaBooks);
let sumEvenNumbers = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEvenNumbers += i;
    }
}
console.log("La suma de los pares es:", sumEvenNumbers);
let countOddNumbers = 0;
let num = 1;
while (num <= 30) {
    if (num % 2 !== 0) {
        countOddNumbers++;
    }
    num++;
}
console.log("La cantidad de números impares es:", countOddNumbers);
function isPrimeNumber(num) {
    if (num <= 2)
        return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("Los números primos son:");
for (let i = 1; i < 100; i++) {
    if (isPrimeNumber(i)) {
        console.log(i);
    }
}
//# sourceMappingURL=TypescriptWorkshop.js.map