/*
Objects: Problem 5
Module 3: JavaScript
Write a JavaScript function to sort the following array of objects by title value.
Hint: Read about the JavaScript sort method.
Example array: 
const = books
[ 

   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

   ];
*/
//created a object out of the array
const books =
[ 

   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

   ];

//created a function with 2 parameters
function compareTitle(x, y) {
   //created a if stmnt to compare the length of titles that were passed through.
   // giving them a numberical value or rating and then organized based on that.  
  if(x.title < y.title)
    return -1;
  if(x.title > y.title)
    return 1;
  return 0;
}

//called the object and used the sort method and passed in the compareTitle function
console.log(books.sort(compareTitle));

// return
/*
[[object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
  author: "Bill Gates",
  libraryID: 1254,
  title: "The Road Ahead"
}, [object Object] {
  author: "Steve Jobs",
  libraryID: 4264,
  title: "Walter Isaacson"
}]
*/
