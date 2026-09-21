//Divisibility Check//

// let Num = 200;

// if (Num % 10 === 0) {
//     console.log("Good")
// } else {
//     console.log("Bad")
// }

//User Profile//

//  let Name = prompt ("Enter Your Name: ")
//  let Age =  prompt ("Mention Your Age: ")

// alert("My Name is" + " " + Name + " " + "My Age is " + Age)

//Quarterly Months//

// let quater = Number(prompt("Enter 1-4 for quater:"));

// switch (quater) {
//     case 1:
//         console.log("March,April,May");
//         break;
//     case 2:
//         console.log("June,July,August");
//         break;
//     case 3:
//         console.log("September,October,November");
//         break;
//     case 4:
//         console.log("December,January Febuary");
//         break;
//     default:
//         console.log("Invalid Number")
// }

// Golden String//

let String = prompt ("Enter a string: ");

if ((String.startswith("A") || String.startswith("a")) && String.length > 5) {
    console.log("Golden String");
} else {
    console.log("Not A Golden String");
}

