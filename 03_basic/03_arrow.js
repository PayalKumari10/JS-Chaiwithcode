const user = {
    username: "payal",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "ram"
// user.welcomeMessage()

// console.log(this);


// function code(){
//     let username = "payal"
//     console.log(this);
// }
// code()

// const code = function(){
//     let uername = "payal"
//     console.log(this.username);
// }

// const code = () => {
//     let uername = "payal"
//     console.log(this);
// }

// code()


// const addTwo = (num1, num2) => {      //explicite return : when we use {} and add on return  keyword
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2  //implicite return : means we dont use paranthesis {}

// const addTwo = (num1, num2) => (num1 + num2)   // we dont use {} not add return keywords

const addTwo = (num1, num2) => ({username: "payal"} )   //use objects add {} with ()


console.log(addTwo(3,5))



