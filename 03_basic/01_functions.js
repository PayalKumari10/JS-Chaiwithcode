// function myNameLetter() {
//     console.log("P");
//     console.log("A");
//     console.log("Y");
//     console.log("A");
//     console.log("L");
// }

// myNameLetter
//    function addTwoNumbers(number1 , number2) {      //its line called parameter
//              console.log(number1 + number2 );
//    }
//     addTwoNumbers(8,3);
//     addTwoNumbers(8, "3"); //its called arguments
//     addTwoNumbers(9, null);




//     function addTwoNumbers(number1 , number2) {   
//             //its line called parameter

//         //let result = number1 + number2;
//         console.log("Payal");
//        // return result;
// } 
//       const result = addTwoNumbers(3,5)
//       console.log("Result:", result)



    //   function loginUserMessage(username){
    //     if(username === undefined) {
    //         console.log("Enter the username");
    //         return
    //     }
    //     return `${username} just logged in`
    //   }

    //   console.log(loginUserMessage("payal"));

    function loginUserMessage(username = "radha"){
        if(!username) {
            console.log("Enter the username");
            return
        }
        return `${username} just logged in`
      }
    //   console.log(loginUserMessage("payal"));

    function calculateCartPrice(val1,val2,...num1){
          return num1
    }

//    console.log(calculateCartPrice(200, 400, 500,2000))

   const user = {
    username: "payal",
    prices: 199
   }

   
   function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is
     ${anyobject.price}`);
   }

//    handleObject(user)
handleObject({
    username: "ram",
    price: 399
})

const myNewArray = [200, 400, 900]

function returnSecondValue(getArray){
   return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));