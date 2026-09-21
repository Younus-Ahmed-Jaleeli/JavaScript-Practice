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
    console.log("Hello, " + name + "!");
}

greetUser("Alice");
greetUser("Bob");
greetUser("Charlie");



function addNumbers(a, b) {
    let sum = a + b;
    console.log("Sum is: " + sum);
}

addNumbers(5, 3);
addNumbers(10, 20);



function calcAverage(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}

calcAverage(10, 20, 30);
calcAverage(85, 90, 95);



function createMessage(name, age) {
    console.log(name + " is " + age + " Years old ");
}

createMessage("Sarah", 25);
createMessage("Tom", 30);



function calculateArea(length, width) {
    let area = length * width;
    console.log("Area is: " + area);
}

calculateArea(5, 10);
calculateArea(7, 3);



function sum(a, b) {
    return a + b;
}

let result = sum(10, 5);
console.log(result);

let total = sum(100, 200);
console.log(total);



function multiply(x, y) {
    return x * y;
}

let answer = multiply(4, 5);
console.log(answer);

console.log(multiply(3, 7));



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
let tax = price * 0.1;
let total1 = price + tax;
console.log(total1);



function getGreeting(name) {
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



// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

// console.log(i);



{
    let secret = "Hidden";
    console.log(secret);
}

// console.log(secret);



function outer() {
    let x = 5;

    function inner() {
        console.log(x);
    }

    inner();
}

outer();



function level1() {
    let a = 10;

    function level2() {
        let b = 20;

        function level3() {
            console.log(a);
            console.log(b);
        }

        level3();
    }

    level2();
}

level1();



// function outer() {
//     function inner() {
//         let secret1 = "Hidden"
//     }

//     inner();
//     console.log(secret1);
// }

// outer();



function greet1(name) {
    function createMessage1() {
        return "Hello, " + name;
    }

    console.log(createMessage1());

}

greet1("Alice")



const sayHi = function(name) {
    console.log("Hi, "+ name + "!");
};

sayHi("Tom");
sayHi("Sarah");



const square = (num) => {
    return num*num;
};

console.log(square(5));
console.log(square(10));



const add = function (a,b) {
    return a+b;
};

const subtract = function (a,b) {
    return a-b;
};

console.log(add(10,5));
console.log(subtract(10,5));