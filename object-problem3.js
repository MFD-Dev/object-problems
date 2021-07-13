/*
Objects: Problem 3
Module 3: JavaScript
Create an object with three items in it, then write a JavaScript function that accepts an 
object and tells you the length (tells you how many items are in it) of the object.
*/

Object.objectsize = function(obj) {
  var objSize = 0, key;
  for (key in myObj) {
    if (myObj.hasOwnProperty(key)) objSize++;
  }
  return objSize;
};

const user = {
  firstname: 'Michael',
  lastName: 'Jackson',
  job: 'singer'
};

var objFinalSize = Object.objFinalSize(user);
console.log(objFinalSize);


