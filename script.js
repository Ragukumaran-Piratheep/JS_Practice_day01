// Question-01
var obj2 = {};
console.log(typeof(obj2));

// // Question-02
// Write a javascript program to create an object with properties and methods. create an object called"person with properties"name", "age", and also create a function into that object called introduceYou that take a person object as a parameter and logs a message to the console.The message should be like this"Hello, My name is + person's name" 
const person = {
    name: "Piratheep",
    age: 21,
    introduceYou: function(person) {
      console.log(`Hello, My name is ${person.name}`);
    }
  };
//   print the function
console.log(person.introduceYou(person));
  
// // Question-03
const greetStudent = {
    name: "Piratheep",
    age: 21,
    introduceYou: function(greetStudent) {
      console.log(`Hello ${greetStudent.name} Welcome to this Coding school`);
    }
  };

console.log(greetStudent.introduceYou(greetStudent));


// Question-04
let names = {
    name1: "piratheep",
    name2: "nishalini",
    name3: "piranavan"
}
console.log(names.name1);
console.log(names["name1"]);


// Question-05
// write a JavaScript program to add a new property to an existing object. Add a new property email with the value "john@example.com" to the person object.

person.email = "john@example.com"
console.log(person);


// Question-06
// Write a JavaScript program to remove a property from an object
delete person["age"];

console.log(person);






// Question-07
// Write a Javascript program to check whether a property exists in an object
// console.log(person.includes[age]);

// Question-08
var student = {};

var course = {};

var studentCourse = {
    student : {},
    course : {}
}

// Question-09
// How do you check if an object has a specific property ,say,address? "if there an address, log("Address is there")in console, if not ("Address not found")"
const person1 = {
    name: "John",
    age: 30,
    address: "123 Main Street"
  };
  
  if ("address" in person1) {
    console.log("Address is there");
  } else {
    console.log("Address not found");
  }

// Question-10 create an object book with properties for title , author and year, and then convert into a JSON string


const book = {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954
  };
  
  const bookJSON = JSON.stringify(book);
  
  console.log(bookJSON);


// Question-11 create an array of objects called students. Each object in the array should have the following properties.
// name:string
// age:number
// gpa:number

// 01 
function fullName(name) {
  console.log(name);
}
console.log(fullName("Ragukumaran Piratheep")); //Arguments + console= output

// 02
function fullName1(firstName,lastName) {
  console.log(firstName+" "+lastName);
}
console.log('Ragukumaran','Piratheep');


// Arrow Function 
let sum1 = (x,y) => x+y ;
console.log(sum1(3,4));

function areaOfrectangle(length, width) {
  return length * width;
}

// console.log();

// Math.PI
// for loop
for (let i = 0; i < 5; i++) {
  var txt = 'john';
  console.log("Hi",txt);
 }

// use while loop to print 0-10 numbers 
 let num = 0;
 while (num <= 10) {
  console.log(num);
  num++;
 }

//  For each
// Map
// Filter
// DOM Manipulation
// Event handling
// Call back (on click)




// global scope
var globalVar = 'I am a global variable';
let globalLet = 'I am a global let variable';
const globalConst = 'I am a global const variable';

if (true) {
    // block scope
    var blockVar = 'I am a block scoped variable';
    let blockLet = 'I am a block scoped let variable';
    const blockConst = 'I am a block scoped const variable';
}

console.log(globalVar); // I am a global variable
console.log(globalLet); // I am a global let variable
console.log(globalConst); // I am a global const variable
console.log(blockVar); // I am a block scoped variable
// console.log(blockLet); // undefined
// console.log(blockConst); // undefined

// For each
// Const variable: The variable defined using const cannot be reassigned.
// const name4 = "John";
// console.log(name4); // "John"

// name4 = "Mike"; // Error: Assignment to constant variable.

// // 

// Let variable: The variable defined using let can be reassigned.
let age = 20;
console.log(age); // 20

age = 25;
console.log(age); // 25