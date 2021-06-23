/*
<!-- Objects: Problem 1
Module 3: JavaScript
Create a sample object, then write a JavaScript function that deletes the property of an object passed to it.
Your JavaScript function should take in two parameters, the object and the key/property you want to delete. -->
*/


var newObj = {
    firstName: 'Hello',
    lastName: 'There',
    position: 'Manager'
}


// function myFunction(param1, param2) {
//     delete param1[param2];
//    return  param1;
// };


function myFunction(param1, param2) {
    console.log(param1[param2])  // for some reason when I remove the console logs
    delete param1[param2];      // the code breaks.
   return  param1;
   console.log(myFunction())
}

console.log(myFunction(newObj, "position"));



