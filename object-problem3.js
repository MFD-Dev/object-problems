/*
Objects: Problem 3
Module 3: JavaScript
Create an object with three items in it, then write a JavaScript function that accepts an 
object and tells you the length (tells you how many items are in it) of the object.
*/

const user = {
  fName: 'Michael',
  lName: 'John',
  age: 22
}

function getLength(obj) {
     return Object.keys(obj).length;
}


console.log(getLength(user));


