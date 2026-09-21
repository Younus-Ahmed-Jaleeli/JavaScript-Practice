// Introduction to Hoisting //

var x = 7;
function getName() {
console.log("Namaste JavaScript");
}
getName();
console.log(x); 



getName(); 
console.log(x); 
var x = 7;
function getName() {
console.log("Namaste JavaScript");
}



getName();
console.log(x); 
var x = 7;
function getName() {
console.log("Namaste JavaScript");
}



getName();
console.log(x); 
function getName() {
console.log("Namaste JavaScript");
}



// How Functions are Hoisted //

console.log(getName);
function getName() {
console.log("Namaste JavaScript");
}



console.log(getName); 
function getName() {
console.log("Namaste JavaScript");
}



// Execution Context //

console.log(x); 
getName(); 
var x = 7;
function getName() {
console.log("Namaste JavaScript");
}
console.log(x);



// Different Ways to Declare Functions //

getName(); 
console.log(getName); 
function getName() {
console.log("Namaste JavaScript");
}



// Arrow Function //

getName(); 
console.log(getName); 
var getName = () => {
console.log("Namaste JavaScript");
}



// Function Expression //

getName(); 
console.log(getName); 
var getName = function() {
console.log("Namaste JavaScript");
}



// Introduction to let and const //

console.log(a); 
let a = 10;
console.log(a); 



console.log(b); 
var b = 10;
console.log(b); 



// Memory Allocation //

var b = 10;
console.log(window.b); 
console.log(b); 



let f = 10;
console.log(window.f); 
console.log(f); 



// The Temporal Dead Zone (TDZ) //

// ↓ TDZ for 'a' starts here
// ↓
// ↓
console.log(c); // ReferenceError: Cannot access 'a' before initialization
// ↓
// ↓
let c = 10; // ← TDZ for 'a' ends here
console.log(a); // 10 - Now accessible



// Rules for let and const //

var b = 10;
var b = 100; // Allowed
console.log(b); // 100



let b = 10;
let b = 100; // SyntaxError: 'a' has already been declared



let d; // Valid
d = 10;
console.log(d); // 10



// When to use var , let , or const ? //

const PI = 3.14159; // Value won't change
const userName = "John"; // Value won't change
let counter = 0; // Value will change
let isLoggedIn = false; // Value will change
// Avoid (old style)
var x = 10;



// Mixed Hoisting //

console.log(a); // undefined (var)
console.log(b); // ReferenceError (let in TDZ)



// Function Declaration Types //

// Traditional function

greet(); // "Hello!"
function greet() {
console.log("Hello!");
}

// Arrow function

sayHi(); // TypeError: sayHi is not a function
var sayHi = () => {
console.log("Hi!");
}

// Function expression

welcome(); // TypeError: welcome is not a function
var welcome = function() {
console.log("Welcome!");
}



// Global Object //

var globalVar = "I'm global";
let blockVar = "I'm not global";
const constVar = "I'm also not global";
console.log(window.globalVar); // "I'm global"
console.log(window.blockVar); // undefined
console.log(window.constVar); // undefined



// Const with Objects //

const person = {
name: "John",
age: 30
};
// This is allowed (modifying properties)
person.age = 31;
person.city = "New York";
console.log(person); // { name: "John", age: 31, city: "New York" }
// This is NOT allowed (reassigning the variable)
person = { name: "Jane" }; // TypeError: Assignment to constant variable



