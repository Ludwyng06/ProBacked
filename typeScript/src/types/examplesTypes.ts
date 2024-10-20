/*
// Tipos básicos
const username: string = "Jenser";
const age: number = 28;
console.log(username, "nombre de usuario"); // Imprime el nombre de usuario
console.log("La edad de", username, "es", age); // Imprime la edad del usuario

// Ejemplo de string
const cat: string = "Milo";
console.log(cat, "nombre del gato"); // Imprime el nombre del gato
console.log("El gato", cat, "es de", username); // Imprime una frase con el nombre del gato y del usuario

// Ejemplo de number 
let contNumber: number = 0;
contNumber = 100;
console.log("El número final es:", contNumber); // Imprime el número final

// Boolean
// Ejemplo de boolean 
const isActive: boolean = true;
console.log("¿Está haciendo calor?", isActive); // Imprime si está haciendo calor

// Ejemplo de boolean 2
const actions: boolean = false;
console.log("¿La clase es entretenida?", actions); // Imprime si la clase es entretenida

// Any
// Ejemplo
const data: string = "miauu";
const time: number = 2;
console.log("El gato", cat, "dice", data, "a las", time); // Imprime lo que dice el gato y la hora

// Ejemplo de any 2
const example: number = 10;
console.log("Vamos a ir al río con", example, "amigos y también va", username); // Imprime una frase con el número de amigos y el nombre del usuario

// Array
const products: number[] = [7, 8, 9, 6, 1];
const invoices: string[] = ["pago matrícula", "pago producto"];
const stores: number[] = [1, 2, 3, 4, 5, 6];
const coin: string[] = ["name", "hello", "status"];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const peopleOne: any[] = ["any", 1, true, { id: 1, name: "brayan" }];


console.log(products);
console.log(invoices);
console.log(stores);
console.log(coin);
console.log(peopleOne);

// Diferencias de const y let en array
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const coins: any[] = [
  {
    id: 1,
    name: 'Dólar',
    code: '$',
  },
];

coins.push({
  id: 2,
  name: 'Euro',
  code: '€',
});
console.log(coins); // Imprime el array de monedas con el nuevo elemento añadido

// Tuplas: array especial con número fijo de elementos y posiciones definidas
const dateOne: [string, number] = ['cadena', 1];
console.log(dateOne); // Imprime la tupla

// Enum: constante, fácil de mantener y no quemar código
enum Color { Rojo, Verde, Azul }
const c: Color = Color.Verde;
console.log(Color[1]); // Imprime 'Verde'
console.log(c);

enum Day { Lunes = 1, Martes, Miércoles }
const day: Day = Day.Miércoles;
console.log(day, 'día'); // Imprime 3 'día'

enum Week {
  id = 1,
  tipo,
  product
}
const week: Week = Week.product;
console.log(week, 'día'); // Imprime 3 'día'

// Void
/* eslint-disable @typescript-eslint/no-unused-vars 
 eslint-disable @typescript-eslint/no-explicit-any 
function saludar(): void {
  const aux: number[] = [1, 2, 3, 4];
  let sum = 0;
  for (let i = 0; i < aux.length; i++) {
    sum += aux[i];
  }
  console.log('Hola'); // Imprime 'Hola'
}

function llegada(): boolean {
  const name: boolean = true;
  return name; // Devuelve true
}

// Objetos
// Tipar los campos y datos del objeto
const car: { make: string, model: string, year: number } = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020
};
console.log(car); // Imprime el objeto car

// Sin tipado se quita la primera llave
const animals: { name: string, age: number, status: boolean } = {
  name: 'Rex',
  age: 5,
  status: false
};
console.log(animals); // Imprime el objeto animals

// Null y undefined
let nothing: any = null; // Valor por defecto que se puede cambiar
nothing = 'Hello';
console.log(nothing); // Imprime 'Hello'

const notDefined: undefined = undefined;
console.log(notDefined); // Imprime undefined
 
*/