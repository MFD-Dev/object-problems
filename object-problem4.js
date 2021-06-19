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
}

function info(obj, key) {
  return obj != null && user.firstName(obj, key);
  
}
console.log(info(user))