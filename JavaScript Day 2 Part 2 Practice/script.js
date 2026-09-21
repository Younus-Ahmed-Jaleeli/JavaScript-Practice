let strName = "Alice";
let numAge = 25;
let blsActive = true;

console.log(strName);
console.log(numAge);
console.log(blsActive);

let userAge = 25;
let firstName = "john";
let isEmailVerified = true;

console.log(userAge);
console.log(firstName);
console.log(isEmailVerified);

let FirstName = 'Alice';
let lastName = "Smith";

console.log(FirstName);
console.log(lastName);

let isLoggedIn = true;
let isOver18 = false;
let hasPermission = true;
let isemailVerified = false;

console.log(isLoggedIn);
console.log(isOver18);
console.log(hasPermission);
console.log(isemailVerified);


let age = 20;
let isAdult = age>= 18;
console.log(isAdult);


let score = 75;
let isPassing = score>= 60;
let isFailing = score<60;

console.log(isPassing);
console.log(isFailing);


let temperature = 30;
let isHot = temperature> 25;
let isCold = temperature<10;

console.log(temperature);
console.log(isHot);
console.log(isCold);


let isMenuOpen = false;
let isDarkMode = true;
let isPlaying = false;

console.log(isMenuOpen);
console.log(isDarkMode);
console.log(isPlaying);

let isEmailValid = true;
let isPasswordStrong = false;
let isFormComplete = true;

console.log(isEmailValid);
console.log(isPasswordStrong);
console.log(isFormComplete);


if (0) {
    console.log("This Won't run");
}

if (1) {
    console.log("This Will run");

}

if ("hello") {
    console.log("This Will run");
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
console.log(addNumbers("5" , 10));
console.log(addNumbers(5,"10"));

let FirstNamerstName = 'Alice';
let greeting = 'Hello,World!';
let message = 'It\'s a beautiful day';

console.log(FirstNamerstName);
console.log(greeting);
console.log(message);


let Firstname = "Alice";
let Greeting = "Hello,World!";
let Message = "She said,\"Hello!\"";

console.log(Firstname);
console.log(Greeting);
console.log(Message);

let email = "alice@example.com";

if (email[0] === '@') {
    console.log("Email cannot start with @");
} else {
    console.log("Email format might be valid");
}


let FirstnameirstName = "Alice";
let LastName = "Smith";

let initials = FirstName[0] + LastName[0];
console.log(initials);

let formalInitials = FirstName[0] + "." + lastName[0] + ".";
console.log(formalInitials);


let Password = "Pass123";

let firstChar = Password[0];
let lastChar = Password[Password.length - 1];


console.log("First character:" , firstChar);
console.log("Last character:" , lastChar);

if (lastChar>='0' && lastChar <= '9') {
    console.log("Password ends with a number");
}

let word = "Hello";
word[0] = "J"; //This does NOT work!
console.log(word);


let newWord = "J" + word.slice(1);
console.log(newWord);

let text1 = "Hello";

console.log(text1.length);
console.log(text1[text1.length]);
console.log(text1[text1.length - 1]);

let text2 = "Hello World";
console.log(text2.length);
console.log(text2[5]);


let Greeting2 = "Hello";
let name = "World";
let punctuation = "!";

let message3 = Greeting2 + "," + name + punctuation;
console.log(message3);