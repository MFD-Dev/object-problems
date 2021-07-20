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

//create a function that I pass in a obj to.
function findKey(obj, key) {
  //used hOP method to check if key exists
  const hasKey = obj.hasOwnProperty.key;
//pass the variable as a parameter
if(hasKey) {
  console.log('Yes the key exists!');
  
} else {
  console.log('No it does not exist.')
}
}

findKey(user, 'Michael');//'No it does not exist.' because
// the key in the object is firstName or lastName
//and the function is searching for 'name'.


console.log(findKey(user, firstName));
