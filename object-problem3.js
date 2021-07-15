/*
Objects: Problem 3
Module 3: JavaScript
Create an object with three items in it, then write a JavaScript function that accepts an 
object and tells you the length (tells you how many items are in it) of the object.
*/

var object = {one: 1, two:2, three:3};

function getLength() {
  //Object.keys property checks whether there are any properties.
  // the .length property added to it gives the # of prop that are displayed.
     document.write(Object.keys(object).length);
}

getLength(object);


