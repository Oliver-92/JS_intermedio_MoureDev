// Estructuras avanzadas

// Arrays avanzados

// - Métodos Funcionales

// -- forEach

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => console.log(number));
numbers.forEach(element => console.log(element)); // Ambas son equivalentes

// -- map

let newNumbers = numbers.map(element => element * 2);
let newNumbers2 = numbers.map((number) => number * 3);

console.log(newNumbers);
console.log(newNumbers2);

// -- filter

let newNumbers3 = newNumbers2.filter(element => element % 2 === 0);
let newNumbers4 = newNumbers2.filter(number => number % 3 === 0);

console.log(newNumbers3);
console.log(newNumbers4);

// -- reduce

let sum = numbers.reduce((previous, current) => previous + current, 0);

let newNumbers5 = newNumbers2.reduce((acc, element) => acc + element, 0);

console.log(sum);
console.log(newNumbers5);

// - Manipulación de Arrays

// -- Flat - Aplana los arrays

let array = [[1, 2, 3], [4, 5, 6,[5]], [7, 8, 9]];

let flatArray = array.flat();

let flatArray2 = flatArray.flat();

console.log(array);
console.log(flatArray);
console.log(flatArray2);

// -- FlatMap - Aplana los arrays y ejecuta una función (Criterio para aplanar)

let frases = ["Hola Mundo", "Hola Mundo 2", "Hola Mundo 3"];

let flatFrases = frases.flatMap(frase => frase.split(" "));

console.log(frases);
console.log(flatFrases);

// -- Ordenación (Por defecto es ascendente alfabeticamente, no con numeros)

let numbers2 = [3,5,7,2,1,4,6,8,9,10];
console.log(numbers2);

let newNumbers6 = numbers2.sort((a, b) => a - b); // Ascendente
console.log(newNumbers6);

let newNumbers7 = numbers2.sort((a, b) => b - a); // Descendente
console.log(newNumbers7);


// --- Reverse

let newNumbers8 = numbers2.reverse();

console.log(newNumbers8);

// Busqueda

let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numberFind = numbers3.find(element => element % 2 === 0);
// Devuelve el primer elemento que cumple la condición
console.log(numberFind);

// El findIndex devuelve el index
let numberFind2 = numbers3.findIndex(element => element % 2 === 0);

console.log(numberFind2);


// Sets avanzados

// - Operaciones

let numbersArray = [1,1,2,3,3,4,5,4,6]
let numbersSet = new Set(numbersArray); // Convierte en set, eliminando los duplicados

console.log(numbersSet);

// Si quiero eliminar los duplicados y que me devuelva un array
let numbersArray2 = [...new Set(numbersArray)];

console.log(numbersArray2);

// Union

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 6]);

const unionSet = new Set([...set1, ...set2]); // Union de sets

console.log(unionSet);

// Intersección

let interSet = new Set([...set1].filter(element => set2.has(element)));

console.log(interSet);

// Diferencia

let diffSet = new Set([...set1].filter(element => !set2.has(element)));

console.log(diffSet);

// Maps avanzados

let myMap = new Map([['name', 'Jorge'], ['age', 22]]);

console.log(myMap);

// Iteración con maps

myMap.forEach((value, key) => console.log(`${key}: ${value}`));

// COnversión de map a array

let myArray = [...myMap];

console.log(myArray);

const arrayFromMap = Array.from(myMap); // ambas maneras dan el mismo resultado

console.log(arrayFromMap);

// Mapa a objeto

let myObject = Object.fromEntries(myMap);

console.log(myObject);

// Objeto a mapa

let myMap2 = new Map(Object.entries(myObject));

console.log(myMap2);

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

let num = [1,3,5,2,1,3]
let numMap = num.map(element => element +0.5);

console.log('Este es numMap',numMap);

let numFilter = num.filter(element => element % 2 !== 0);

console.log('Este es numFilter',numFilter);

let numReduce = num.reduce((previous, current) => previous * current, 1);

console.log('Este es numReduce',numReduce);

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

let num2 = [1,2,3,4,5,6,7,8,9]

let num2Cubo = num2.map(element => element ** 3);
let num2CuboFilter = num2Cubo.filter(element => element % 2 === 0);

console.log('Este es num2Cubo',num2Cubo);
console.log('Este es num2CuboFilter',num2CuboFilter);

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

let num3 = [1,2,3,[5,[4,5,6,7],1,3],[4,5],3,7];
console.log('Este es num3',num3);

let num3Flat = num3.flat();

console.log('Este es num3Flat',num3Flat);

let num3FlatMap = num3.flatMap(element => element + 1);

console.log('Este es num3FlatMap',num3FlatMap);

// 4. Ordena un array de números de mayor a menor

let num2Sorted = num2.sort((a,b) => b - a);

console.log('Este es num3Sorted',num2Sorted);

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

let setA = new Set([1,2,3,4,5,6]);
let setB = new Set([4,5,6,7,8,9]);

let setUnion = new Set([...setA, ...setB]);
let setInter = new Set([...setA].filter(element => setB.has(element)));
let setDifer = new Set([...setA].filter(element => !setB.has(element)));

console.log('Este es setUnion',setUnion);
console.log('Este es setInter',setInter);
console.log('Este es setDifer',setDifer);

// 6. Itera los resultados del ejercicio anterior

setUnion.forEach(element => console.log(element));

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

let dataUsers = new Map ([['Name', 'Jorge'], ['Age', 22], ['Email', 'jorge@jorge']]);
dataUsers.forEach(element => console.log(element));
dataUsers.forEach((value, key) => console.log(`${key}: ${value}`));

let dataUsersObject = Object.fromEntries(dataUsers);

console.log(dataUsersObject);