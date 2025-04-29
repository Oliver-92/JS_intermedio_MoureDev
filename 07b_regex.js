// Expresiones regulares

// developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions/Character_classes


const regex = /abc/;
const regex2 = /abcd/;
const regex3 = new RegExp("abc"); // No se recomienda, es equivalente a la anterior
const text = "Hola abc Javascript";

// test: devuelve true o false si el texto coincide con la regex

console.log(typeof regex);
console.log(regex.test(text)); // true
console.log(regex2.test(text)); // false

const regex4 = /c+/; // +: uno o mas
const regex5 = /[0-3]/; // [0-3]: cualquier caracter entre 0 y 3

console.log(regex4.test(text)); // true
console.log(regex5.test(text)); // false

// replace: reemplaza el texto que coincida con la regex

const regex6 = /Javascript/;
console.log(text.replace(regex6, "PHP"));

const regex7 = /\d/g; // g: global, busca todas las coincidencias
const text3 = "Hola hola 1,2,3,4,5,6,7,8,9,10,11";
console.log(text3.replace(regex7, "X"));

// exec: devuelve el primer elemento que coincide con la regex

console.log(regex7.exec(text3));
while ((match = regex7.exec(text3))) {
    console.log(match);
} // Devuelve todos los elementos que coinciden