/*
Objects: Problem 3
Module 3: JavaScript
Create an object with three items in it, then write a JavaScript function that accepts an 
object and tells you the length (tells you how many items are in it) of the object.
*/



const user = {
  firstname: 'Michael',
  lastName: 'Jackson',
  job: 'singer'
}

// console.log(user)

function myFunction() {
  document.write("Length is " + user.length);
}

console.log(myFunciton)
// function sumArgs(a)  {
//   console.log(arguments)
//   let sum = 0;
//   for (let i = 0; i < obj.length; i++) {
//     sum += arguments[i];
//   }
// return sum;
// }

// sumArgs(user)
// console.log(info(user))