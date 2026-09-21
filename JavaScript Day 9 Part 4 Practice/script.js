//Filter Method//

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let events = numbers.filter((num => num %2 ==0));
// console.log(events);



// let numbers = [15,22,31,44,57,60];
// let odds = numbers.filter((num) => num %2 !==0);
// console.log(odds);



// let grades = [45,78,89,34,92,56,67];
// let passing = grades.filter((grade) => grade >=50);
// console.log(passing);



// let words = ["hi","hello","bye","goodbye","hey"];
// let longWords = words.filter((word) => word.length >3);
// console.log(longWords);



// let people = [
//     { name: "John", age:17},
//     { name: "Sarah", age:22},
//     { name: "Mike", age:15},
//     { name: "Emma", age:25},
//     { name: "Tom", age:16}
// ];
// let adults = people.filter((person) => person.age >=18);
// console.log(adults);



// let names = ["Alice","Bob","Andrew","Charlie","Amanda"];
// let aNames = names.filter((name) => name[0]=="A");
// console.log(aNames);



// let products = [
//     { name: "Laptop", price:50000},
//     { name: "Mouse", price:500},
//     { name: "Keyboard", price:150},
//     { name: "Monitor", price: 15000}
// ];
// let affordable = products.filter((product) => product.price <= 2000);
// console.log(affordable);



// let cart = ["apple","banana","apple","mango","apple","orange"];
// let withoutApples = cart.filter((item) => item!== "apple");
// console.log(withoutApples);



// let numbers = [5,-3,8,-1,0,12,-7,4];
// let positives = numbers.filter((num => num >0));
// console.log(positives);



// let tasks = [
// { task: "Buy milk", done: true },
// { task: "Clean room", done: false },
// { task: "Study", done: true },
// { task: "Exercise", done: false }
// ];
// let completed = tasks.filter((item) => item.done === true);
// console.log(completed);



// let ages = [20, 25, 18, 30, 22];
// let allAdults = ages.every((age) => age >= 18);
// console.log(allAdults);



// let ages = [20, 25, 17, 30, 22];
// let allAdults = ages.every((age) => age >= 18);
// console.log(allAdults);



// let numbers = [5, 10, 15, 20];
// let allPositive = numbers.every((num) => num > 0);
// console.log(allPositive);



// let marks = [78, 85, 92, 67, 89];
// let allPassed = marks.every((mark) => mark >= 50);
// console.log(allPassed);



// let products = [
// { name: "Laptop", inStock: true },
// { name: "Mouse", inStock: true },
// { name: "Keyboard", inStock: false }
// ];
// let allAvailable = products.every((product) => product.inStock === true);
// console.log(allAvailable);



// Some Method //

// let ages = [20, 25, 17, 30, 22];
// let hasTeenager = ages.some((age) => age < 18);
// console.log(hasTeenager);



// let numbers = [5, 10, --3, 20, 15];
// let hasNegative = numbers.some((num) => num < 0);
// console.log(hasNegative);



// let marks = [78, 85, 92, 45, 89];
// let anyoneFailed = marks.some((mark) => mark < 50);
// console.log(anyoneFailed);



// let prices = [1500, 2000, 450, 3000];
// let hasCheapItem = prices.some((price) => price < 500);
// console.log(hasCheapItem);



// let tasks = [
// { task: "Buy milk", done: true },
// { task: "Clean room", done: false },
// { task: "Study", done: true }
// ];
// let hasIncomplete = tasks.some((item) => item.done === false);
// console.log(hasIncomplete);



// Reduce Method //

// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((total, num) => {
// return total + num;
// }, 0);
// console.log(sum);



// let numbers = [2, 3, 4, 5];
// let product = numbers.reduce((result, num) => result * num, 1);
// console.log(product);



// let cart = [
// { item: "Shirt", price: 500 },
// { item: "Shoes", price: 1200 },
// { item: "Hat", price: 300 }
// ];
// let total = cart.reduce((sum, product) => sum + product.price, 0);
// console.log(total);



// let fruits = ["apple", "banana", "apple", "mango", "apple", "banana"];
// let count = fruits.reduce((counter, fruit) => {
// counter[fruit] = (counter[fruit] || 0) + 1;
// return counter;
// }, {});
// console.log(count);



// let nested = [[1, 2], [3, 4], [5, 6]];
// let flat = nested.reduce((acc, arr) => acc.concat(arr), []);
// console.log(flat);



// let words = ["hi", "hello", "hey", "goodbye"];
// let longest = words.reduce((longest, word) => {
// return word.length > longest.length ? word : longest;
// }, "");
// console.log(longest);



// let items = [
// { name: "Apple", type: "fruit" },
// { name: "Carrot", type: "vegetable" },
// { name: "Banana", type: "fruit" },
// { name: "Potato", type: "vegetable" }
// ];
// let grouped = items.reduce((result, item) => {
// if (!result[item.type]) {
// result[item.type] = [];
// }
// result[item.type].push(item.name);
// return result;
// }, {});
// console.log(grouped);



// let scores = [85, 90, 78, 92, 88];
// let sum = scores.reduce((total, score) => total + score, 0);
// let average = sum / scores.length;
// console.log(average);



// Finding Maximum in Array //

// let numbers = [45, 78, 23, 89, 34, 12];
// let max = numbers.reduce((maximum, num) => {
// return num > maximum ? num : maximum;
// });
// console.log(max);



// let numbers = [45, 78, 23, 89, 34];
// let max = numbers.reduce((maximum, num) => {
// return num > maximum ? num : maximum;
// }, numbers[0]);
// console.log(max);



// let numbers = [45, 78, 23, 89, 34, 12];
// let min = numbers.reduce((minimum, num) => {
// return num < minimum ? num : minimum;
// });
// console.log(min); 



// let products = [
// { name: "Laptop", price: 50000 },
// { name: "Mouse", price: 500 },
// { name: "Monitor", price: 15000 }
// ];
// let maxPrice = products.reduce((max, product) => {
// return product.price > max ? product.price : max;
// }, 0);
// console.log(maxPrice);



// let students = [
// { name: "Rahul", marks: 85 },
// { name: "Priya", marks: 92 },
// { name: "Arjun", marks: 78 }
// ];
// let topper = students.reduce((highest, student) => {
// return student.marks > highest.marks ? student : highest;
// });
// console.log(topper);



// // Deafult Parameters //

// function greet(name = "Guest") {
// console.log(`Hello, ${name}!`);
// }
// greet("Alice");
// greet(); 



// function calculateTotal(price, taxRate = 0.18) {
// return price + (price * taxRate);
// }
// console.log(calculateTotal(1000));
// console.log(calculateTotal(1000, 0.10));



// function createUser(name, age = 18, country = "India") {
// return { name, age, country };
// }
// console.log(createUser("Raj"));
// console.log(createUser("Priya", 25));
// console.log(createUser("Tom", 30, "USA"));



// function power(base, exponent = 2) {
// return base ** exponent;
// }
// console.log(power(5)); 
// console.log(power(5, 3)); 
// console.log(power(2, 4));



// function applyDiscount(price, discount = 10) {
// return price - (price * discount / 100);
// }
// console.log(applyDiscount(1000)); 
// console.log(applyDiscount(1000, 20));



// function getElements(arr, start = 0, end = arr.length) {
// return arr.slice(start, end);
// }
// let numbers = [1, 2, 3, 4, 5];
// console.log(getElements(numbers)); 
// console.log(getElements(numbers, 2)); 
// console.log(getElements(numbers, 1, 3));



// function multiply(a, b = a * 2) {
// return a * b;
// }
// console.log(multiply(5)); 
// console.log(multiply(5, 3));