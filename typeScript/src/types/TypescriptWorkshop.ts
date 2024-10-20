/* 1. Declara variables utilizando todos los tipos primitivos mencionados */ 
const Firstname: string = "Ludwyng";
console.log(Firstname, "name");

const age: number = 19;
console.log(age, "age");

const toy: undefined = undefined;
console.log(undefined, "undefined");
console.log(toy);

const lol: null = null;
console.log(null, "null");
console.log(lol);

const state: boolean = true;
console.log(state, "state");

/* 2. Crea una función que calcule el área de un rectángulo, tomando la base y la altura como parámetros */

function calculateRectangleArea(base: number, height: number): number {
    return base * height;
}
const base: number = 6;
const height: number = 8;

const result: number = calculateRectangleArea(base, height);

console.log("El resultado del área es:", result);

/* 3. Crea una clase Car que tenga propiedades como make, model, y un método para mostrar su información */

class Car {
    public make: string;
    public model: number;
    public color: string;
    public brand: string;

    constructor(make: string, model: number, color: string, brand: string) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.brand = brand;
    }

    displayCarInfo(): void {
        console.log(`El año del carro es ${this.make}, el modelo es ${this.model}, su color es ${this.color}, la marca es ${this.brand}`);
    }
}

const infoCar = new Car("Japón", 2015, "negro", "Toyota");
infoCar.displayCarInfo();

/* 4. Define una interfaz Shape que tenga propiedades para calcular el área y una clase Rectangle que implemente esta interfaz */

interface Shape {
    calculateShapeArea(): number;
}

class Rectangle implements Shape {
    base: number;
    height: number;

    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }

    calculateShapeArea(): number {
        return this.base * this.height;
    }
}

const rectangle = new Rectangle(3, 5);
console.log("El área del rectángulo es:", rectangle.calculateShapeArea());

/* 5. Crea un arreglo de objetos que representen libros, cada uno con propiedades como title, author, y usa filter para obtener solo los libros de un autor específico */

const books: { title: string, author: string, year: number }[] = [
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

/* 6. Crea un pequeño programa que utilice todos los conceptos anteriores:
    Define una interfaz Book que tenga title, author, y year.
    Crea una clase Library que tenga un arreglo de libros y métodos para agregar y buscar libros por autor.
    Usa métodos de clase y arreglos para interactuar con la biblioteca. */

interface Book {
    title: string;
    author: string;
    year: number;
}

class Library {
    private books: Book[] = [];

    addNewBook(book: Book): void {
        this.books.push(book);
    }

    searchBooksByAuthor(author: string): Book[] {
        return this.books.filter(book => book.author === author);
    }
}

const library = new Library();

// Agregar libros de Harry Potter y Narnia

library.addNewBook({ title: "Harry Potter y la piedra filosofal", author: "J.K. Rowling", year: 1997 });
library.addNewBook({ title: "Harry Potter y la cámara secreta", author: "J.K. Rowling", year: 1998 });
library.addNewBook({ title: "Harry Potter y el prisionero de Azkaban", author: "J.K. Rowling", year: 1999 });
library.addNewBook({ title: "El león, la bruja y el ropero", author: "C.S. Lewis", year: 1950 });
library.addNewBook({ title: "El príncipe Caspian", author: "C.S. Lewis", year: 1951 });

// Buscar libros por autor
const harryPotterBooks = library.searchBooksByAuthor("J.K. Rowling");
console.log("Libros de J.K. Rowling:", harryPotterBooks);

const narniaBooks = library.searchBooksByAuthor("C.S. Lewis");
console.log("Libros de C.S. Lewis:", narniaBooks);

/* 7. Uso de ciclos */

/* 1. Escribe un programa que sume todos los números pares del 1 al 100 */
let sumEvenNumbers: number = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEvenNumbers += i;
    }
}
console.log("La suma de los pares es:", sumEvenNumbers);

/* 2. Contar números impares con while, que hay entre 1 y 30. */

let countOddNumbers: number = 0;
let num: number = 1;

while (num <= 30) {
    if (num % 2 !== 0) {
        countOddNumbers++;
    }
    num++;
}
console.log("La cantidad de números impares es:", countOddNumbers);

/* 3. Imprimir números primos con for y if */

function isPrimeNumber(num: number): boolean {
    if (num <= 2) return false;
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
