// const students = {
//     name: "Alex",
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg() {
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// };

// students.getAvg();



// const account = {
//     holder: "Sarah",
//     balance: 5000,
//     deposit(amount) {
//         this.balance += amount;
//         console.log(`${this.holder} deposited: $${amount},New balance: $${this.balance}`);
//     }
// };

// account.deposit(500);



// const cart = {
//     items: ["Apple", "Banana"],
//     total: 2,
//     addItem(item) {
//         this.items.push(item);
//         this.total = this.items.length;
//         console.log(`Added ${item}, Total items: ${this.total}`);
//     }

// };

// cart.addItem("Orange");



// //Exceptional Handling//

// console.log("Program starts");

// try {
//     console.log(undefinedVariable);
// } catch (err) {
//     console.log("Caught an error, Variable not found");
// }

// console.log("Program Continues");



// function divide(a, b) {
//     try {
//         if (b === 0) {
//             throw "Cannot divide by zero";
//         }
//         return a / b;

//     } catch (error) {
//         console.log("Error:", error);
//         return null;

//     }

// }

// console.log(divide(10, 2));
// console.log(divide(10, 0));



// function ValidateAge(age) {
//     try {
//         if (age<0) {
//             throw "Age cannot be negative!";
//         }
//         if (age>150) {
//             throw "Age seems Unrealistic!";
//         }
//         console.log(`Valid age: ${age}`);
//     } catch (error)
//      { console.log("Validation Error:",error);
        
//     }
// }

// ValidateAge(25);
// ValidateAge(-5);
// ValidateAge(200);



// //Arrow Functions//

// const greet = (name) => {
//     return `Hello, ${name}!`;
// };

// console.log(greet("John"));



// const square = (num) => num*num;

// console.log(square(5));
// console.log(square(10));



// const double = num => num*2;
// console.log(double(7));



// const calculateTotal = (price,tax) => {
//     let total = price + (price*tax);
//     return total;
// };

// console.log(calculateTotal(100,0.1));



// let numbers = [1,2,3,4,5];

// let doubled = numbers.map(num => num*2);
// console.log(doubled);

// let events = numbers.filter(num => num %2 ===0);
// console.log(events);



// //Timing Events//

// console.log("Starting...");

// setTimeout(() => {
//     console.log("This appears after 3 seconds");
// }, 3000);

// console.log("Continuing...");



// function greetUser(name) {
//     setTimeout(() => {
//         console.log(`Welcome back, ${name}`);
//     }, 2000);
// }

// greetUser("Alice");



// let count = 0;

// let id = setInterval(() => {
//     count++;
//     console.log(`Count: ${count}`);

//     if (count ===5) {
//         clearInterval(id);
//         console.log("Counter Stopped!");
//     }
// },1000);



// let seconds = 40;

// setInterval(() => {
//     seconds++;
//     console.log(`Elapsed time: ${seconds}seconds`);
// },1000);



// let interValld = setInterval(() => {
//     console.log("Repeating message...");
// }, 2000);

// setTimeout(() => {
//     clearInterval(interValld);
//     console.log("Interval stopped!");
// },10000);



// const student1 = {
//     name: "Alex",
//     marks: 95,

//     getName: function() {
//         return this.name;
//     },

//     getMarks: () => {
//         return this.marks;
//     }
// };

// console.log(student1.getName());
// console.log(student1.getMarks());



// const user = {
//     name: "Sarah",
//     greet: function() {
//         setTimeout(function() {
//             console.log(`Hello ${this.name}`);
//         },1000);
//     }
// };

// user.greet();

// const user1 = {
//     name: "Sarah",
//     greet: function() {
//         setTimeout(() => {
//             console.log(`Hello ${this.name}`);
//         },1000);
//     }

// };

// user1.greet();



// const counter = {
//     count: 0,
//     start: function() {
//         setInterval (() => {
//             this.count++;
//             console.log(this.count);
//         },1000);
//     }

// };

// counter.start();



const calculator = {
    value: 0,
    subtract: function(num) {
        this.value = num;
    }
};




