//Array Destructuring//

// let colors = ["Red","Green","Blue"];
// let [first,second,third] = colors;
// console.log(first);
// console.log(second);
// console.log(third);



// let numbers = [1,2,3,4,5];
// let [first,,third,,fifth] = numbers;
// console.log(first);
// console.log(third);
// console.log(fifth);



// let a = 10;
// let b = 20;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);



// let [a=5,b=10] = [1];
// console.log(a);
// console.log(b);



// let scores = [95,87,92,78,85];
// let [highest,...remaining] = scores;
// console.log(highest);
// console.log(remaining);



// Object Destructuring //

// let student = {
//     name: "Rahul",
//     age:20,
//     grade:"A"
// };
// let { name,age,grade } = student;
// console.log(name);
// console.log(age);
// console.log(grade);



// let user = {
//     username: "Karan123",
//     email: "karan@example.com"
// };
// let { username:id,email:mail} = user;
// console.log(id);
// console.log(mail);



// let settings = {
//     theme: "dark"
// };
// let { theme,language="English"} = settings;
// console.log(theme);
// console.log(language);



// let person = {
//     name: "John",
//     address: {
//         city: "Mumbai",
//         pin: 400001
//     }
// };
// let { name,address: {city,pin}} = person;
// console.log(name);
// console.log(city);
// console.log(pin);



// function displayUser ({name,age,country = "India"}) {
//     console.log(`${name} is ${age} years old from ${country}`);
// }
// displayUser({name: "Priya",age:22});

// displayUser({name:"Tom",age:25,country:"USA"});



// For Each() //

// let fruits = ["Apple","Banana","Mango","Orange"];
// fruits.forEach((fruits) => {
//     console.log(fruits);
// })



// let colors = ["Red","Green","Blue"];
// colors.forEach((color,index) => {
//     console.log(`${index}: ${color}`);
// });



// let numbers = [10,20,30,40,50];
// let sum = 0;
// numbers.forEach((num) => {
//     sum += num;
// });
// console.log(`Total: ${sum}`);



// let prices = [99,149,299,499];
// prices.forEach((price) => {
//     console.log(`$${price}.00`);
// });



// let names = ["alice","bob","charlie"];
// let UpperNames = [];
// names.forEach((name) => {
//     UpperNames.push(name.toUpperCase());
// });
// console.log(UpperNames);



// let numbers = [1,2,3,4,5];
// numbers.forEach((num) => {
//     console.log(`5x${num} = ${5*num}`);
// });



// let students = [
//     { name: "Rahul", age:20 },
//     { name: "Priya", age:22 },
//     { name: "Arjun", age: 19},
// ];

// students.forEach((student) => {
//     console.log(`${student.name} is ${student.age} years old`);
// });



// let scores = [85,92,78,45,90];
// scores.forEach((score) => {
//     if (score >= 80) {
//         console.log(`${score} - Excellent!`);
//     } else {
//         console.log(`${score} - Kepp trying!`);
//     }
// });



// Map Method//

// let numbers = [1,2,3,4,5];
// let doubled = numbers.map((num => num*2));
// console.log(doubled);
// console.log(numbers);



// let names = ["alice","bob","charlie"];
// let UpperNames = names.map((name) => name.toUpperCase());
// console.log(UpperNames);
// console.log(names);



// let nums = [2,3,4,5];
// let squares = nums.map((num) => num**2);
// console.log(`Original Array: ${nums}`);
// console.log(`Changed Array: ${squares}`);



// let students = [
//     { name: "John", marks:85 },
//     {name: "Sarah", marks: 92 },
//     { name: "Mike", marks:78 }
// ];
// let names = students.map((student) => student.name);
// console.log(students);
// console.log(names);



// let prices = [100,200,150,300];
// let pricesWithGST = prices.map((price) => price*1.18);
// console.log(pricesWithGST);



// let firstNames = ["Raj","Priya","Amit"];
// let lastNames = ["Sharma","Patel","Kumar"];
// let fullNames = firstNames.map((firstName,index) => {
//     return `${firstName} ${lastNames[index]}`;
// });
// console.log(fullNames);



// let amounts = [100,250,500,1000];
// let formatted = amounts.map((amounts) =>`$${amounts}.00`);
// console.log(formatted);



// let celsius = [0,10,20,30,40];
// let farhenheit = celsius.map((temp) => (temp*9/5) +32);
// console.log(farhenheit);
