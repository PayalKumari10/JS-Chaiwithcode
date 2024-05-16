// array is object, as with arrays in other programming langauages, enables storing a 
//  , contirbution items under a single variable name 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Avenger", "Benten"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[4]);


//Array methods

// myArr.push(6)
// myArr.push(7)  //add value 
// myArr.pop() //last value remove 

// myArr.unshift(9) //add on starting value 
// myArr.shift()  // shift value

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);



//+++++++ slice and splice +++++++++
// slice :  Extracts a portion of an array without modifying the original array, returning
// a new array with selected elements.


// splice :- original array mainuplate only
// Modifies the original array by adding, removing, or replacing elements, returning
// the removed elements as a new array.



console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);


