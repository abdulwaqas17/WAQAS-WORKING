// Data types

// number
let age = 18;
console.log(age);

// String
const name = 'muhammad waqas';
console.log(name);

// Boolean
let follow = true;
console.log(follow);

// undefined
let Class;
console.log(Class);

// null
let job = null;
console.log(job);

// BigInt
let abc = BigInt(123);
console.log(abc);

// Symbol
let xyz = Symbol('@');
console.log(xyz);


// Object
const student = {

    // key : value, it is a pair
    fullName : 'Muhammad Waqas',
    Age : 18,
    Class : 10,
    marks : 946,
    isJob : false,
};

student['Age'] = student['Age'] + 7;

console.log(student.Age)

// console.log(student.Age); for assess key value of an object

// console.log(student['isJob']); for print value of key of an object

console.log(student);