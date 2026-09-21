//For Each Method//

let numbers = [10,20,30,40];
numbers.forEach((num) => {
    console.log(num);
});



let prices = [99,149,299];
prices.forEach((prices) => {
    console.log(`$${prices}`);
});



let fruits = ["Apple","Banana","Mango"];
fruits.forEach((fruit,index) => {
    console.log(`${index + 1}, ${fruit}`);
});



let scores = [85,90,78,92];
let total = 0;
scores.forEach((score) => {
    total += score;
});
console.log(`Total: ${total}`);



let names = ["alice","bob","charlie"];
let captalizedNames = [];
names.forEach((name) => {
    captalizedNames.push(name.toUpperCase());
});
console.log(captalizedNames);



//Map Method//

let nums = [1,2,3,4];
let doubled = nums.map((num) => num*2);
console.log(doubled);
console.log(nums);



let names1 = ["alice","bob","charlie"];
let upperNames = names1.map((names1) => names1.toUpperCase());
console.log(upperNames);



let students = [
    { name: "John",age: 20},
    { name: "Sarah",age:22},
    { name: "Mike",age:21},
];
let studentNames = students.map((student) => student.name);
console.log(studentNames);
let studentAge = students.map((student) => student.age);
console.log(studentAge);



let prices1 = [100,200,150];
let pricesWithTax = prices1.map((prices1) => prices1*1.18);
console.log(pricesWithTax);



let items = ["Home","About","Contact"];
let menuItems = items.map((items) => `<li>${items}<li>`);
console.log(menuItems);



//Filter Method//

let numbers1 = [1,2,3,4,5,6,7,8];
let events = numbers1.filter((num) => num %2 ===0);
console.log(events);



let gardes = [45,78,89,34,92,56];
let passing = gardes.filter ((grade) => grade >= 50);
console.log(passing);



let words = ["hi","hello","bye","goodbye"];
let longWords = words.filter((word) => word.length>3);
console.log(longWords);



let people = [
    {name: "John",age:17},
    {name: "Sarah",age:22},
    {name: "Mike",age:15},
    {name: "Emma",age:25}
];
let adults = people.filter((person) => person.age >=18);
console.log(adults);



let cart = ["apple","banana","mango","apple"];
let withoutApples = cart.filter((item) => item != "apple");
console.log(withoutApples);