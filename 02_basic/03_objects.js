// singleton (when we can decleare contract then create singleton)
//object.create 

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Payal",
    "full name": "Payal Kumari",
    age: 18,
    mySym: "mykey1",
    location: "Ara",
    email: "payal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email = "payal@chatgpt.com"
// Object.freeze(JsUser);

JsUser.email = "payal@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());