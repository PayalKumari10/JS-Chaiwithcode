//const linkedinUser = new Object()
const linkedinUser = {}

linkedinUser.id = "123abc"
linkedinUser.name = "ram"
linkedinUser.isLoggedIn = false

//console.log(linkedinUser);

const regularUser = {
    email: "kumar@gmail.com",
    fullname: {
        userfullname: {
            firstname: "payal",
            lastname: "kumari"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "payal@gmail.com"
    },
    {
        id: 4,
        email: "payal@gmail.com"
    },
    {
        id: 2,
        email: "payal@gmail.com"
    }
]

users[1].email
// console.log(linkedinUser);

// console.log(Object.keys(linkedinUser));
// console.log(Object.values(linkedinUser));
// console.log(Object.entries(linkedinUser));

// console.log(linkedinUser.hasOwnProperty('isLoggedIn'));
// console.log(linkedinUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "payal"
}

// course.courseInstructor

const { courseInstructor: instructor } = course

// console.log(courseInstructor);
// console.log(instructor);


//++++++***** JSON ******+++++++
// {
//     "name": "payal",
//     "coursename": "js in hindi",
//     "price": "free"

// }