const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Avenger", "Ben10"]

// marvel_heros.push(dc_heros) //getting value array under array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  //getting value array under array
// console.log(allHeros);

// spread 
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6], 7, [6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)   //Infinity :- value spread out without any thinking 
console.log(real_another_array);

console.log(Array.isArray("Payal"))
console.log(Array.from("Payal"))
console.log(Array.from({name: "payal"})) //vvi Qs

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));