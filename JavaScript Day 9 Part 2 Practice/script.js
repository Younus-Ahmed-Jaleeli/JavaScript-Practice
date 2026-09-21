//Every Mehod//

let ages = [20,25,18,30];
let allAdults = ages.every((age) => age >= 18);
console.log(allAdults);



let ages1 = [20,25,17,30];
let hasTeenager = ages1.some((age) => age < 18);
console.log(hasTeenager);



let formFields = ["John","john@email.com","password123"];
let allFilled = formFields.every ((field) => field.length>0);
console.log(allFilled);



//Some Method//

let numbers = [5,10,-3,20];
let hasNegative = numbers.some((num) => num<0);
console.log(hasNegative);



let prices = [50,75,120,30];
let allAffordable = prices.every((price) => price <=100);
console.log(allAffordable);



//Reduce Method//

let numbers1 = [1,2,3,4,5];
let sum = numbers1.reduce((total,num) => total+num,0);
console.log(sum);



let numbers2 = [45,78,12,89,34];
let max = numbers2.reduce((maximum,num) => {
    return num> maximum ? num: maximum;
},numbers2[0]);
console.log(max);



let fruits = ["apple","banana","apple","mango","apple"];
let count = fruits.reduce((counter,fruit) => {
    counter[fruit] = (counter[fruit] || 0) + 1;
    return counter;
},{});
console.log(count);



let cart = [
    {item: "shirt", price: 500},
    {item: "shoes", price: 1200},
    {item: "hat", price: 300}
];
let total = cart.reduce((sum,product) => sum+product.price,0);
console.log(total);



let nested = [[1,2],[3,4],[5,6]];
let flat = nested.reduce((acc,arr) => acc.concat(arr),[]);
console.log(flat);



//Default Parameters//

function greet(name = "Guest") {
    console.log(`Hello,${name}`);
}
greet("Alice");
greet();



function calculateTax(amount,taxRate=0.18) {
    return amount*taxRate;
}
console.log(calculateTax(1000));
console.log(calculateTax(1000,0.10));



function createProfile(name,age=18,country="India") {
    return {name,age,country};
}
console.log(createProfile("Raj"));
console.log(createProfile("Priya",25,"USA"));



function power(base,exponent=2) {
    return base**exponent;
}
console.log(power(5));
console.log(power(5,3));



function getSlice(arr,start=0,end=arr.length) {
    return arr.slice(start,end);
}
let numbers3 = [1,2,3,4,5];
console.log(getSlice(numbers3));
console.log(getSlice(numbers3,2));
console.log(getSlice(numbers3,1,3));



//Spred Operator//

let original = [1,2,3];
let copy = [...original];
console.log(copy);
copy.push(4);
console.log(original);
console.log(copy);



let fruits1 = ["aaple","banana"];
let vegetables = ["carrot","potato"];
let food = [...fruits1,...vegetables];
console.log(food);



let  numbers4= [2,3,4];
let moreNumbers = [1,...numbers4,5,6];
console.log(moreNumbers);



let user = {
    name: "Tony Stark",
    email: "tony@stark.com"
};
let updatesUser = {
    ...user,
    city: "New York",
    email: "ironman@stark.com"
};
console.log(updatesUser);



let name = "HELLO";
let letters = [...name];
console.log(letters);



//Rest Operator//

function sum1(...numbers) {
    return numbers.reduce((total,num) => total+num,0); 
}
console.log(sum1(1,2,3));
console.log(sum1(5,10,15,20));
console.log(sum1(100));



function announce (first,...others) {
    console.log(`Winner: ${first}`);
    console.log(`Others: ${others.join(",")}`);
}
announce("Alice","bob","Charlie","David");



function createTeam(captain,viceCaptain,...players) {
    return {
        captain,
        viceCaptain,
        players 
    };
}
let team = createTeam("Virat","Rohit","Dhoni","Hardik","Bumrah");
console.log(team);



function findMax (...nums) {
    return Math.max(...nums);
}
console.log(findMax(45,78,23,89,34));



function multiply (multiplier,...numbers5) {
    return numbers5.map((num) => num*multiplier);
}
console.log(multiply(2,1,2,3,4));
console.log(multiply(10,5,6,7));



//SPREAD-EXPANDS 

let arr = [1,2,3];
console.log(...arr); //1 2 3

//REST-Collects

function collect (...items) {
    console.log(items); // [1,2,3]
}
collect(1,2,3);