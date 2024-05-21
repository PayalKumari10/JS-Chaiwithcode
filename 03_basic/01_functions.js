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
      console.log(loginUserMessage("payal"));