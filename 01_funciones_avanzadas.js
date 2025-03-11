// FUnciones avanzadas

// Ciudadanos de primera clase

const saludar = function (name) {
    console.log(`Hola ${name}`);
}

saludar('Fernando');

function procesarSaludo(greetFunction, name) {
    greetFunction(name);
}

function returnGreeting(name){
    return saludar(name);
}

procesarSaludo(saludar, 'Fernando');

const greet2 = returnGreeting('Fernando');

// Funciones flecha

const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

// this léxico

const handler = {
    name: 'Jorge',
    greeting: function(){
        console.log(`Hola, ${this.name}`);
    },
    arrowGreeting: () =>{
        console.log(`Hola, ${this.name}`); // Undefined, la arrow function no tiene su propio this, tiene contexto propio y no reconoce el name
    }
}

handler.greeting();
handler.arrowGreeting();

// IIFE (Immediately Invoked Function Expression - Expresión de Función Invocada de Inmediato)

// IIFE Clásico

(function(){
    console.log('IIFE Clásico');
})();

(() => {
    console.log('IIFE Clásico arrow function');
})();

// Parámetros Rest (...)

function sum(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));

//Operador Spread (...)

const numbers = [1, 2, 3, 4, 5];
function sum2(a , b , c){
    return a + b + c;
}

console.log(sum2(...numbers));

// Closures (Clausuras)

function createCounter(){
    let count = 0;
    return function (){
        count++;
        console.log(count);
    }
}

const counter = createCounter();
counter(); // 1
counter(); // 2

// Recursividad (Recursion)

function myFunction(){
    myFunction(); // Se va a llamar infinitamente
}

function factorial(n){
    if (n <= 1){
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

// Funciones parciales (Partials)

function sum3(a, b, c){
    return a + b + c;
}

function partial(a){
    return function(b, c){
        return sum3(a, b, c);
    }
}

const sum5 = partial(5);

console.log(sum5(1, 2));

// Funciones currying (Currying)

function currySum(a) {
    return function(b) {
        return function(c) {
            return sum3(a, b, c);
        }
    }
}

const sumAB = currySum(5)(2);

console.log(sumAB(3));

// Calbacks 

function proccesData(data, callback){
    const result = sum(...data)
    callback(result);
}

function proccesResult(result){
    console.log(`Mi resultado es ${result}`);
}

proccesData([1, 2, 3], proccesResult);
proccesData([1, 2, 3], (result) => console.log(`Mi resultado en la arrow function es ${result}`));

// Ejercicios

// 1. Crea una función que retorne a otra función

const returnFunction = () => {
    return () => {
        console.log('HOLA');
    }
}

returnFunction()();

// 2. Implementa una función currificada que multiplique 3 números

const multiply3 = (a) => (b) => (c) => a * b * c;

console.log(multiply3(2)(3)(4));

a = multiply3(2);
b = a(3);
console.log(b(4));

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

const power = (base, exponent) => {
    if (exponent === 0){
        return 1;
    }
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

const createCounter2 = (initialValue) => {
    let count = initialValue;
    return {
        increment: () => count++,
        decrement: () => count--,
        getValue: () => count
    }
}

const counter2 = createCounter2(5);

counter2.increment();
counter2.increment();
counter2.increment();
counter2.decrement();

console.log(counter2.getValue());

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

const sumManyTimes = (multiplier, ...numbers) => {
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result * multiplier;
}

console.log(sumManyTimes(3, 1, 2, 3));

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

const proccesData2 = (data, callback) => {
    const result = sumManyTimes(2, ...data);
    callback(result);
}

proccesData2([1, 2, 3], (result) => console.log(`Mi resultado en la arrow function es ${result}`));

// 7. Desarrolla una función parcial

const sumManyTimes2 = (multiplier, ...numbers) => {
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result * multiplier;
}

const partial2 = (multiplier) => (...numbers) => sumManyTimes2(multiplier, ...numbers);

console.log(partial2(2)(1, 2, 3));

