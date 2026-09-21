let userInput = "    Hello Javascript   "
let cleanInput = userInput.trim().toLowerCase();
console.log(cleanInput);

let email = "    USER@EXAMPLE.COM   "
let formatedEmail = email.trim().toLowerCase();
console.log(formatedEmail);


let sentence = "Javascript is awesome and Javascript is fun"

let findIndex1 = sentence.indexOf("Javascript");
console.log(findIndex1);

let findIndex2 = sentence.indexOf("awesome");
console.log(findIndex2);

let findIndex3 = sentence.indexOf("python");
console.log(findIndex3);


let message = "Welcome to the coding class"

let findmessage = message.indexOf("coding");
console.log(findmessage);

if (findmessage) {
    console.log("Found Coding")
} else {
    console.log("Coding Not Found")
}




let newData = "    MESSY iNpuT   "
let processData = newData.trim().toLowerCase();


console.log(newData);
console.log(processData);


let password = "  MyP@ssw0rd123   "
let securePassword = password.trim().toUpperCase().slice(0,8);
console.log(securePassword);


let fullName = "Alexender Hamilton"
let firstName= fullName.slice(0,9);
let lastName = fullName.slice(10);
console.log(firstName,lastName);
console.log(firstName);
console.log(lastName);


let phone = "9704782374"
let areaCode = phone.slice(0,3);
let lastFour = phone.slice(-4);
console.log(`Area Code: ${areaCode}, Last Four: ${lastFour}`);



let announcement = "The event will happen on Monday and Monday Only"
let updateAnnouncement = announcement.replace("Monday,Thursdat");
console.log(updateAnnouncement);


let template = "Hello Younus Ahmed Jaleeli, welcome to our website"
let personalizedMessage = template.replace("NAME","ALICE");
console.log(personalizedMessage);

let colors = ["red","green","blue","orange"]

console.log(colors);
console.log(colors[0]);
console.log(colors[3]);


let score = [85, 92, 78, 90, 88];

console.log(score [3]);

score[0]= 95;
console.log(score);
console.log(score[0]+score[1]);