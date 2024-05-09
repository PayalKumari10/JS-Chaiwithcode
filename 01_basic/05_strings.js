// we can denoted string "" or ''

const name = "payal"
const repoCount = 50

// console.log(name +  repoCount + "Value"); (today its not used for written this types  is old )

console.log(`Helo my name is  ${name} 
and my repo count is ${repoCount}`);    //modern way for written 

const gameName = new String('payalpk')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf(2));

const newString =gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,4) //we can use negative value in slice
console.log(anotherString);

const newStringOne = "   payal   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://payal.com/payal%20kumari"

console.log(url.replace('%20', '-'))

console.log(url.includes('payal'))


