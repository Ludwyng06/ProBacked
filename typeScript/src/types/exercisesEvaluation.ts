/*
const auxNumber: number[] = [1,2,3,4,5,6,7,8,9];
//agrego los numeros
auxNumber.push(10);
auxNumber.push(12);
auxNumber.push(15);
auxNumber.push(17);

console.log(auxNumber);

//elimino el ultimo numero o la ultima posicion 
auxNumber.pop();
console.log(auxNumber);

//encontar el indice
const index = auxNumber.indexOf(1)
const index2 = auxNumber.indexOf(4)
const index3 = auxNumber.indexOf(7)
console.log("index :",index);
console.log("index :",index2);
console.log("index :",index3);

//extraer una parte del array en posicion 2-9
const sliced = auxNumber.slice(2 , 9);
console.log(sliced);

//verificar si todos los elementos son  > por every 
const Menores = auxNumber.every(num => num >0);
console.log(Menores);

//verificar si algun elemento es >=7 con some 
const verificacion = auxNumber.some(num => num >7);
console.log(verificacion);

//2
const auxStriing: string[] = ['1' , '2' , '3' , '4' , '5' , '6' , '7'];

//agregar el array por push en tipo string 
auxStriing.push("10");
auxStriing.push("11");
auxStriing.push("12");
auxStriing.push("13");
auxStriing.push("14");
console.log(auxStriing);

//encontar el indice de 10,11,14 con indexOff
const Index = auxStriing.indexOf("10");
const Index2 = auxStriing.indexOf("11");
const Index3 = auxStriing.indexOf("14");
console.log(Index);
console.log(Index2);
console.log(Index3);

//3

const message: string = 'Bienvenidos al Itp';

//dividir la cadena en un array de palabras 
const words: string[] = message.split(' ');
console.log(words);

//aplicar join donde se separen por comas
const joinedSentence: string = words.join(' , ');
console.log(joinedSentence);



//4
const names: string = 'michael,anderson,yadir,Kevin,Emerson';


//dividir el array en una palabra 
const Words = names.split(",");
console.log(Words);

//aplicar join donde se separe por espacios 
const joinedNames: string = Words.join('  ');
console.log(joinedNames);


//5
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const anyProducts: any[] = [
    {
        id: 1,
        name: 'arroz',
        price: 1000,
        priceDiscont: 700,
    },
    {
        id: 2,
        name: 'atun',
        price: 2500,
        priceDiscont: 1500,
    }

];

//filtrar en una const

const evenNumbers = anyProducts.filter(product =>product.price > 900);
console.log(evenNumbers);




//6

const array01: number[] = [1,2,3,4];
const array02: number[] = [6,7,8,9];

//concatenar
const concatenatedArray = array01.concat(array02);
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 6, 7, 8, 9]

//ordenar de menor a mayor
const sortedNumbers: number[] = concatenatedArray.sort((a, b) => a - b);
console.log(sortedNumbers);

//imprimir el array de manera decendente 
const reversedNumbers: number[] = sortedNumbers.reverse();
console.log(reversedNumbers);*/