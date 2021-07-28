/*
Objects: Problem 4
Module 3: JavaScript
Create an object, then write a JavaScript function that checks 
whether an object contains the specific property.
*/
/*
Four ways to check if a Object has a property:
1. hasOwnProperty
2. in Operator
3. using typeOf and compare it with undefined.
4. using !! operator(double-bang operator)
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
