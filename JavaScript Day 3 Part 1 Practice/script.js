let strName = "Alice";
let numAge = 25;
let bIsActive = true;

console.log(strName);
console.log(numAge);
console.log(bIsActive);

let userAge = 25;
let firstName = "john"
let isEmailVerified = true;

console.log(userAge);
console.log(firstName);
console.log(isEmailVerified);

let FirstName = "Alice"
let LastName = "Smith"
let UserAdress = "123 Main st";
let employeeSalary = 50000;

console.log(FirstName);
console.log(LastName);
console.log(UserAdress);
console.log(employeeSalary);

let IsLoggedIn = true;
let isOver18 = false;
let hasPersmission = true;
let IsEmailVerified = false;

console.log(IsLoggedIn);
console.log(isOver18);
console.log(hasPersmission);
console.log(IsEmailVerified);

let isStudent = true;

if (isStudent) {
    console.log("Student discount applied!");
} else {
    console.log("Regular price.");
}

let age = 20;
let isAdult = age >=18;
console.log(isAdult);

let score = 75;
let isPassing = score >= 60;
let isFailing = score < 60;
console.log(score);
console.log(isPassing);
console.log(isFailing);

let temperature = 30;
let isHot = temperature > 25;
let isCold = temperature < 10;
console.log(isHot);
console.log(isCold);

let isMenuOpen = false;
let isDarkMode = true;
let isPalying = false;
console.log(isDarkMode);
console.log(isPalying);

let isEmailValid = true;
let isFormComplete =  true;
console.log(isEmailValid);
console.log(isFormComplete);

if(0) {
    console.log("This won't run");
}

if(1){
    console.log("This will run");
}

if("hello") {
    console.log("This will run");
}

let x = 5;
console.log(typeof x);

x = "hello";
console.log(typeof x);

x = true;
console.log(typeof x);

x = [1,2,3];
console.log(typeof x);

function addNumbers(a,b) {
    return a+b;
}

console.log(addNumbers(5,10));
console.log(addNumbers ("5",10));
console.log(addNumbers(5,"10"));

let name = "Alice";
console.log(name.length);

let message = "Hello,World!";
console.log(message.length);

let empty = "";
console.log(empty.length);

let text = "Hello,World!";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.slice(0,5));
console.log(text.replace("world","Javascript"));

let newLine = "First line\nSecond Line";
console.log(newLine);

let tab = "Name:\tAlice";
console.log(tab);

let backslash = "This is a backslash: \\";
console.log(backslash);

let quote = "She said,\"Hi\"";
console.log(quote);

let FIRSTNAME = "Alice"
let GREETING = "Hello,World"
let MESSAGE = "She Said,\"Hello!\"";

console.log(FIRSTNAME);
console.log(GREETING);
console.log(MESSAGE);

let email = "alice@example.com";

if (email[0] === '@') {
    console.log("Email cannot start with @");
} else {
    console.log("Email format might be valid");
}

let firstname = "Alice";
let lastname = "Smith";

let initials = firstname[0]+lastname[0];
console.log(initials);

let formalinitials = firstname[0]+lastname[0]+".";
console.log(formalinitials);

let password = "Pass123";
let firstChar = password [0];
let lastChar = password[password.length-1];

console.log("First Character:",firstChar);
console.log("Last Character:", lastChar);

if(lastChar >= '0' && lastChar <= '9'){
    console.log("Password ends with a number");
}

let word = "Hello";
let newWord = 'J'+ word.slice(1);
console.log(newWord);

let text1 = "Hello";
console.log(text1.length);
console.log(text[text1.length]);
console.log(text[text1.length-1]);

let text2 = "Hello World";
console.log(text2.length);
console.log(text2[5]);

let domain = "example.com";
let protocol = "https://";
let page = "/about";

let fullURL = protocol+domain+page;
console.log(fullURL);

let fileName = "report";
let fileType = ".pdf";
let year = 2024;

let fullFileName = fileName +"_"+ year+fileType;
console.log(fullFileName);

let message2 = "Hello";
message2 += " ";
message2 += "World";
message2 += "!";

console.log(message2);

let htmlContent = "<div>";
htmlContent += "<h1>Title</h1>";
htmlContent +="<p>Paragraph</p>";
htmlContent += "</div>";

console.log(htmlContent);

console.log(10+20);
console.log("10"+20);
console.log(10+"20");

console.log(10+20+"30");
console.log("10"+20+30);

console.log("Result:" + (10+20));

let NAME = "Alice";
let AGE = 25;
let CITY = "New York";
let betterMessage = `My name is ${NAME},I an ${AGE} years old, and i love in ${CITY}`;
console.log(betterMessage);