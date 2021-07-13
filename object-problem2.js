/*
Objects: Problem 2
Module 3: JavaScript
Create an array of people objects with first name, last name, and age, then write a
 JavaScript program to display the first and last names of all the people.
Your function should take in an object and return the the values above.
*/


// const users = {
//   firstName: 'Hello',
//   lastName: 'There',
//   age: 20
// }

const users = [
  {
    
    firstName: 'Hello',
    lastName: 'There',
    age: 20,
  },
  {
    firstName: 'Hey',
    lastName: 'Peoples',
    age: 20
  }

]

for (let key in users) {
  console.log(key);
  console.log(users(key));
}

// let userNames = users.filter

// for (var i = 0; i < users.length; i++) {
//   var usersName =
//    users[i].firstName {
//      console.log(users);
//    }
// }
// function myFunction(f, l, a) {
//   var f = firstName;
//   var l = lastName;
//   var a = age;
//   return {
//     f,
//     l,
//     a,
//   }
// }

// console.log(myFunction(users[f]))

// console.log(Object.keys(user))

// for (const key of Object.keys(user)) {
//   console.log(`${key} => ${user[0, 1]}`);
// }

// console.log(Object.entries(users));

// function myFuncton() {

// for (const [key, value] of Object.entries(users)) {
//   console.log(`${key} => ${value}`);
// }


// }

// console.log(myFuncton());