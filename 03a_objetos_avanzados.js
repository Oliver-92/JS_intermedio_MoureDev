// Objetos avanzados

// - Prototipos y Herencia

// -- Prototipos

let person = {
    name: 'John Doe',
    age: 30,
    greet (){console.log(`Hello, ${this.name}`)}
}

console.log(person.__proto__);
console.log(Object.getPrototypeOf(person));

person.sayAge = function () {console.log(`I'm ${this.age} years old`)}

person.sayAge();
console.log(person);

// -- Herencia

let student = {
    __proto__: person,
    course: 'JavaScript',
    sayCourse () {console.log(`I'm studying ${this.course}`)}
}

let programmer = Object.create(person);
programmer.greet();
programmer.language =  'Python';
console.log(programmer.language);

// - Métodos estáticos y de instancia

function Person (name, age) {
    this.name = name;
    this.age = age;

    this.greet = function () {console.log(`Hello, ${this.name}`)};

    this.sayAge = function () {console.log(`I'm ${this.age} years old`)};
}

let newPerson = new Person('Carlos', 20);

newPerson.greet();

// - Metodos avanzados

// -- assign

let person2 = {
    name: 'Raul',
    age: 25
};

let person2_details = {
    job: 'Developer',
    country: 'Spain'
};

let fullPerson = Object.assign(person2, person2_details);

console.log(fullPerson);

// -- keys, values y entries

console.log(Object.keys(fullPerson));
console.log(Object.values(fullPerson));
console.log(Object.entries(fullPerson));

