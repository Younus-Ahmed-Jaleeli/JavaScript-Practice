function greet() {
    console.log("Welcome to JavaScript");
}

greet();
greet();



function showMessage() {
    console.log("Learning functions is fun");
}

showMessage();



function introduction() {
    console.log("My name is JavaScript");
    console.log("I was created in 1995");
    console.log("I run in browsers");
}

introduction();



function greetUser(name) {
    console.log("Hello, "+ name + "!");
}

greetUser("Alice");
greetUser("Bob");
greetUser("Charlie");



function addNumbers(a,b) {
    let sum = a+b;
    console.log("Sum is: " + sum);
}

addNumbers(5,3);
addNumbers(10,20);



function calcAverage (a,b,c) {
    let avg = (a+b+c)/3;
    console.log(avg);
}

calcAverage(10,20,30);
calcAverage(85,90,95);



function createMessage(name,age) {
    console.log(name + " is " + age +" Years old ");
}

createMessage("Sarah",25);
createMessage("Tom",30);



function calculateArea (length,width) {
    let area = length*width;
    console.log("Area is: " + area);
}

calculateArea(5,10);
calculateArea(7,3);



function sum(a,b) {
    return a+b;
}

let result = sum (10,5);
console.log(result);

let total = sum(100,200);
console.log(total);



function multiply (x,y) {
    return x*y;
}

let answer = multiply (4,5);
console.log(answer);

console.log(multiply(3,7));



function test() {
    return 10;
    console.log("This will never print");
    return 20;
}

let value = test();
console.log(value);



function getPrice() {
    return 50;
}

let price = getPrice();
let tax = price*0.1;
let total1 = price + tax;
console.log(total1);



function getGreeting (name) {
    return "Hello " + name;
}

let message = getGreeting("Alice");
console.log(message);

console.log(getGreeting("Bob"));



function showScore() {
    let score = 100;
    console.log(score);
}

showScore();

// console.log(score);



function func1() {
    let x = 10;
    console.log(x);
}

function func2() {
    let x = 20;
    console.log(x);
}

func1();
func2();



if (true) {
    let temp = 42;
    console.log(temp);
}



