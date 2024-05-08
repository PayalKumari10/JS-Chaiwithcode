// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
//const outsideTemp = null
let userEmail;

//const id = Symbol('123')
//const anotherId = Symbol('123')

//console.log(id === anotherId);

//const bigNumber = 54687527111547845n     //n means bigInt



// Reference (Non Primitive)

// Array, Objects, Functions

// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

const heros = ["shaktiman", "superman", "ben10"]
 let myObj = {
    name: "payal",
    age: 22,
}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof BigInt);

console.log(typeof null);
console.log(typeof Symbol);


// *****************************************************

//stack (Primitive)  means copy data , Heap (Non-Primitive) means refrence (original data)

let myYoutubename = "sdepayalkumari.com"

let anothername = myYoutubename
anothername = "payalSDE"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "payal@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);