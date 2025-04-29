// Depuración

// - console.log() (básico)

function sum(a,b) {
    console.log(a, b);
    console.log("typeof a", typeof a);
    console.log("typeof b", typeof b);
    return a + b
}

console.log(sum(2, 3));
console.log(sum(2, "3"));

// - debugger (depurador, profesional)

function dividir(a,b) {
    if ( b===0){
        throw new Error("No se puede dividir por cero")
    }
    return a / b
}

console.log(dividir(2, 0));