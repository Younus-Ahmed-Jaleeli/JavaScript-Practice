// Spread with Array Literals //

// let original = [1, 2, 3, 4];
// let copy = [...original];
// console.log(copy); 
// copy.push(5);
// console.log(original); 
// console.log(copy);



// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let merged = [...arr1, ...arr2];
// console.log(merged);



// let numbers = [2, 3, 4];
// let expanded = [1, ...numbers, 5, 6];
// console.log(expanded);



// let fruits = ["apple", "banana"];
// let vegetables = ["carrot", "potato"];
// let dairy = ["milk", "cheese"];
// let groceries = [...fruits, ...vegetables, ...dairy];
// console.log(groceries);



// let word = "HELLO";
// let letters = [...word];
// console.log(letters);



// let start = [1, 2];
// let end = [5, 6];
// let middle = [3, 4];
// let complete = [...start, ...middle, ...end];
// console.log(complete);



// function sum(a, b, c) {
// return a + b + c;
// }
// let numbers = [1, 2, 3];
// console.log(sum(...numbers));



// let numbers = [45, 78, 23, 89, 34];
// let max = Math.max(...numbers);
// console.log(max); 



// Spread with Object Literals //

// let original = { name: "John", age: 25 };
// let copy = { ...original };
// console.log(copy); 
// copy.age = 30;
// console.log(original); 
// console.log(copy);



// let user = { name: "Alice", age: 22 };
// let updatedUser = { ...user, city: "Mumbai" };
// console.log(updatedUser);



// let user = {
// name: "Tony Stark",
// email: "tony@stark.com",
// age: 45
// };
// let updatedUser = {
// ...user,
// email: "ironman@stark.com", 
// city: "New York" 
// };
// console.log(updatedUser);



// let personal = { name: "Rahul", age: 25 };
// let contact = { email: "rahul@email.com", phone: "9876543210" };
// let address = { city: "Delhi", country: "India" };
// let complete = { ...personal, ...contact, ...address };
// console.log(complete);



// let user = {
// name: "John",
// address: { city: "Mumbai", pin: 400001 }
// };
// let updated = { ...user, name: "Johnny" };
// console.log(updated);



// let product = { name: "Laptop", price: 50000 };
// let withTax = {
// ...product,
// tax: product.price * 0.18,
// total: product.price * 1.18
// };
// console.log(withTax);



// REST OPERATOR //

// function sum(...numbers) {
// return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3)); 
// console.log(sum(5, 10, 15, 20)); 
// console.log(sum(100, 200, 300, 400));



// function announce(winner, ...others) {
// console.log(`Winner: ${winner}`);
// console.log(`Runners-up: ${others.join(", ")}`);
// }
// announce("Alice", "Bob", "Charlie", "David");



// function createTeam(captain, viceCaptain, ...players) {
// return {
// captain,
// viceCaptain,
// players
// };
// }
// let team = createTeam("Virat", "Rohit", "Dhoni", "Hardik", "Bumrah");
// console.log(team);



// function average(...numbers) {
// let sum = numbers.reduce((total, num) => total + num, 0);
// return sum / numbers.length;
// }
// console.log(average(10, 20, 30)); 
// console.log(average(85, 90, 78, 92));



// function getEvens(...numbers) {
// return numbers.filter(num => num % 2 === 0);
// }
// console.log(getEvens(1, 2, 3, 4, 5, 6, 7, 8));



// function multiplyAll(factor, ...numbers) {
// return numbers.map(num => num * factor);
// }
// console.log(multiplyAll(2, 1, 2, 3, 4)); 
// console.log(multiplyAll(10, 5, 6, 7));



// function describePodium(first, second, ...others) {
// console.log(`Gold: ${first}`);
// console.log(`Silver: ${second}`);
// console.log(`Others: ${others.join(", ")}`);
// }
// describePodium("India", "Australia", "England", "Pakistan", "South Africa");



// ARRAY DESTRUCTURING //

// let colors = ["Red", "Green", "Blue"];
// let [first, second, third] = colors;
// console.log(first); 
// console.log(second); 
// console.log(third);



// let numbers = [1, 2, 3, 4, 5];
// let [first, second] = numbers;
// console.log(first); 
// console.log(second); 



// let numbers = [10, 20, 30, 40, 50];
// let [first, , third, , fifth] = numbers;
// console.log(first); 
// console.log(third); 
// console.log(fifth); 



// let a = 5;
// let b = 10;
// [a, b] = [b, a]; 
// console.log(a); 
// console.log(b); 



// let [a = 1, b = 2, c = 3] = [10, 20];
// console.log(a); 
// console.log(b); 
// console.log(c); 



// let numbers = [1, 2, 3, 4, 5];
// let [first, second, ...rest] = numbers;
// console.log(first); 
// console.log(second); 
// console.log(rest); 



// let data = [1, [2, 3], 4];
// let [a, [b, c], d] = data;
// console.log(a); 
// console.log(b); 
// console.log(c); 
// console.log(d); 



// function getScores() {
// return [95, 87, 92];
// }
// let [highest, middle, lowest] = getScores();
// console.log(highest); 
// console.log(middle); 
// console.log(lowest); 



// OBJECT DESTRUCTURING //

// let student = {
// name: "Rahul",
// age: 20,
// grade: "A"
// };
// let { name, age, grade } = student;
// console.log(name); 
// console.log(age); 
// console.log(grade); 



// let user = { name: "Alice", age: 25, city: "Mumbai" };
// let { city, name, age } = user; // Different order
// console.log(name); 
// console.log(age); 
// console.log(city); 



// let user = {
// username: "karan123",
// email: "karan@email.com"
// };
// let { username: id, email: mail } = user;
// console.log(id); 
// console.log(mail);



// let settings = { theme: "dark" };
// let { theme, language = "English", notifications = true } = settings;
// console.log(theme); 
// console.log(language); 
// console.log(notifications);



// let product = { name: "Laptop", price: 50000 };
// let { name: productName, price, discount = 0 } = product;
// console.log(productName); 
// console.log(price); 
// console.log(discount);



// let person = {
// name: "John",
// address: {
// city: "Mumbai",
// pin: 400001,
// country: "India"
// }
// };
// let { name, address: { city, pin } } = person;
// console.log(name); 
// console.log(city); 
// console.log(pin); 



// function displayUser({ name, age, city = "Unknown" }) {
// console.log(`${name} is ${age} years old and lives in ${city}`);
// }
// displayUser({ name: "Priya", age: 22, city: "Delhi" });
// displayUser({ name: "Tom", age: 25 });



// let user = {
// name: "Alice",
// age: 25,
// email: "alice@email.com",
// phone: "9876543210",
// city: "Mumbai"
// };
// let { name, age, ...otherDetails } = user;
// console.log(name); 
// console.log(age); 
// console.log(otherDetails);



// let students = [
// { name: "Rahul", marks: 85 },
// { name: "Priya", marks: 92 },
// { name: "Arjun", marks: 78 }
// ];
// students.forEach(({ name, marks }) => {
// console.log(`${name} scored ${marks}`);
// });



let apiResponse = {
status: "success",
data: {
user: "john_doe",
posts: 150,
followers: 1200
},
timestamp: "2024-01-15"
};
let {
status,
data: { user, followers },
timestamp
} = apiResponse;
console.log(status);
console.log(user);
console.log(followers); 
console.log(timestamp); 