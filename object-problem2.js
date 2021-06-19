/*
Objects: Problem 2
Module 3: JavaScript
Create an array of people objects with first name, last name, and age, then write a JavaScript program to display the first and last names of all the people.
Your function should take in an object and return the the values above.
*/


const user = {
  firstName: 'Hello',
  lastName: 'There',
  age: 20
}


// console.log(Object.keys(user))

// for (const key of Object.keys(user)) {
//   console.log(`${key} => ${user[0, 1]}`);
// }

console.log(Object.entries(user));

for (const [key, value] of Object.entries(user)) {
  console.log(`${key} => ${value}`);
}