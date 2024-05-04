const accountId = 144589
let accountEmail = "payal@gmail.com"
var accountPassword = "12345"
accountCity = "Ara"
let accountState;

// accountId = 2  //not allowed

accountEmail = "pk@gmail.com"
accountPassword = "211144141"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var because of issue 
in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
