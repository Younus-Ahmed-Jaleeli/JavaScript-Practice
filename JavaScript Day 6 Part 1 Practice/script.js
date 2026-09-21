let student = {
    name: "Alice",
    age: 20,
    grade: "A"
};

console.log(student)



let product = {
    title : "Laptop",
    price : 45000,
    Instack : true,
};

console.log(product)



let location1 = {
    latitude : "28.7041 N",
    longitude : "77.1025 E",
    city : "Delhi"
};

console.log(location1)



let book = {
    title : "JavaScript Guide",
    author : "John Doe",
    pages : 350,
    published : 2024
};

console.log(book)



let post = {
    username : "coder_dev",
    content : "Learning JavaScript!",
    likes : 150,
    comments : 23
};

console.log(post)



let student1 = {name: "Alex",age :21,city: "Seattle"};
console.log(student1.name);
console.log(student1.age);
console.log(student1["city"]);
console.log(student1["name"]);



let person = {"first name": "John","last name":"Doe"};
console.log(person["first name"]);

let key = "age";
console.log(student1[key]);



let car = {brand: "Toyota", model:"Camry", year: 2024};
console.log(car.brand);
console.log(car["model"]);



let student2 = {name: "Alex", age:21, city: "Seattle"};
student2.age= 22;
student2.city = "Boston";
console.log(student2);

student2.grade = "A+"
student2.major = "Computer Science";
console.log(student2);

delete student2.city;
console.log(student2);



let product1 = {name : "Phone", price : 30000};
product1.price = 28000;
product1.brand = "Samsung";
delete product1.name;
console.log(product1);



let car1 = {brand : "Honda"};
car1["model"] = "Civic";
car1["year"] = 2024;
console.log(car1);



let userDatbase = {
    user1: {name: "Alice", grade: "A+", city: "Austin"},
    user2: {name: "Bob", grade: "B", city: "Denver"}
};
console.log(userDatbase.user1.name);
console.log(userDatbase.user2.grade);



let company = {
    engineering: {employess: 50, manager: "John"},
    sales: {employess: 30,manager: "Sarah"},
    hr: {employess: 10, manager:"Mike"}
};
console.log(company.engineering.employess);
console.log(company.sales.manager);



let students = {
    student3 : {name: "Emma", math: 85, science: 90},
    student4 : {name: "Oliver", math :78, science: 88}
};
console.log(students.student3.math);
console.log(students.student4.science);



let inventory = {
    electronics: {laptops:25, phones: 50},
    clothing: {shirts: 100, pants: 75}
};
console.log(inventory.electronics.laptops);
console.log(inventory.clothing.shirts);



let school = {
    ClassA: {students: 30, Teacher: "Mrs.Brown"},
    ClassB: {Students: 50, Teacher: "Mrs.Green"},
};
school.ClassA.students = 32;
school.ClassB.Teacher = "Mrs.Johnson";
console.log(school.ClassA.students);
console.log(school.ClassB.Teacher);



let students1 = [
    {name: "Alice", age: 20, grade: "A"},
    {name: "Bob", age: 21, grade: "B"},
    {name: "Charlie", age: 19, grade: "A+"}
];
console.log(students1[0].name);
console.log(students1[1].grade);
console.log(students1.length);



let products = [
    {id: 101, name: "Laptop", price: 45000},
    {id: 102, name: "Mouse", price:500},
    {id: 103, name: "Keyboard", price:1500}
];
console.log(products[0].name);
console.log(products[2].price);



let posts = [
    {username: "user`1", content: "Hello World!", likes: 50},
    {username: "user2", content: "JavaScript is fun", likes: 120},
    {username: "user3", content: "Coding daily", likes: 85}
];
console.log(posts[1].username);
console.log(posts[0].likes);



let courses = [
    {name: "Math",id: 101,credits: 3},
    {name: "Physics",id: 102,credits:4},
    {name: "Chemistry",id: 103,credits: 3}
];
console.log(courses[0].credits);
console.log(courses[1].name);



let cars = [
    {brand: "Toyota",model: "Camry", year:2020},
    {brand: "Honda",model: "Civic",year:2021}
];
cars[0].year = 2024;
cars.push({brand:"Ford",model:"Mustang",year:2023});
console.log(cars[0].year);
console.log(cars[2].brand);



console.log(Math.PI);
console.log(Math.E);

console.log(Math.abs(-42));
console.log(Math.abs(15));
console.log(Math.abs(-7.5));

console.log(Math.pow(2,3));
console.log(Math.pow(5,2));
console.log(Math.pow(10,3));

console.log(Math.floor(4,9));
console.log(Math.floor(4,1));
console.log(Math.ceil(4,1));
console.log(Math.ceil(4,9));

let radius = 5;
let circumference = 2*Math.PI*radius;
let area = Math.PI*radius*radius;
console.log(circumference);
console.log(area);



console.log(Math.random());
console.log(Math.random());
console.log(Math.random());



let num = Math.random()*10;
console.log(num);

let percentage = Math.random()*100;
console.log(percentage);

console.log(Math.random()*5);
console.log(Math.random()*20);
console.log(Math.random()*50);

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*100);



let step1 = Math.random();
let step2 = step1*10;
let step3 = Math.floor(step2);
let step4 = step3 + 1;
console.log(step4);



let random1 = Math.floor(Math.random()*10)+1;
console.log(random1);

let random100 = Math.floor(Math.random()*100) + 1;
console.log(random100);

let diceroll = Math.floor(Math.random()*6) + 1;
console.log(diceroll);

let rating = Math.floor(Math.random()*5) + 1;
console.log(rating);



let num1 = Math.floor(Math.random()*(10-1+1)) + 1;
console.log(num1);

let num3 = Math.floor(Math.random()*(10-5+1)) + 5;
console.log(num3);

let num4 = Math.floor(Math.random()*(100-50+1)) + 50;
console.log(num4);

let num5 = Math.floor(Math.random()*(30-20+1)) + 20;
console.log(num5);

let num6 = Math.floor(Math.random()*(10-(-10) + 1)) + (-10);
console.log(num6);



let dice = Math.floor(Math.random()*6) + 1;
console.log("You rolled: "+ dice);

let colors = ["red","green","blue","yellow"];
let randomIndex = Math.floor(Math.random()*colors.length);
console.log("Random Color: "+ colors[randomIndex]);

let questions = ["Q1","Q2","Q3","Q4","Q5"];
let randomQ = Math.floor(Math.random()*questions.length);
console.log("Random question: "+ questions[randomQ]);

let id = Math.floor(Math.random()*9000) + 1000;
console.log("Generated ID : "+id);

let percentage1 = Math.floor(Math.random()*101);
console.log("Random percetnage: " + percentage1 + "%");