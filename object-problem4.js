/*
Objects: Problem 4
Module 3: JavaScript
Create an object, then write a JavaScript function that checks 
whether an object contains the specified key.
*/



user = {
  firstName: 'Michael',
  lastName: 'Jackson',
  age: 20
};

//create a function that I pass in a obj to.
function findKey(obj, key) {
  //used hOP method to check if key exists
  return obj.hasOwnProperty.key;
}

console.log(findKey(user, "firstName"));
