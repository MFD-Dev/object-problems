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




// delete newObj.position;
// console.log(newObj);

function myFuncton() {

    delete newObj.position; 

}

  console.log(myFuncton());

// function myFuncton(param1, param2) {
//     console.log(myFuncton)
//    return delete param1.param2;
//    console.log(myFuncton)
// }


// myFuncton(newObj, position);

// console.log(myFuncton(newObj, position));



// console.log(myFuncton(n, 'Manager'))