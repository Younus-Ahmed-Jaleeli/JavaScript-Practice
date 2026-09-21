//Synchronous Execution//

// console.log("Step 1");
// console.log("Step 2");
// console.log("Step 3");



//The Blocking Problem//

// console.log("Before the long calculation");

// for (let i = 0; i < 500000000; i++) {

// }

// console.log("After the long calculation");



// Synchronous vs Asynchrounous 

// let x = 10;
// let y = 20;
// let sum = x + y;
// console.log(sum);

// let name = "Alice";
// let greeting = "Hello," + name;
// console.log(greeting);



// Asynchronous Code: Operations that take time //

// console.log("Starting");

// setTimeout(() => {
//     console.log("This appears after 2 seconds");
// }, 2000);

// console.log("Ending");



// setTimeout: Your First Async Function //

// console.log("1. Program starts");

// setTimeout(() => {
//     console.log("2.This runs after 2 seconds");
// }, 2000);

// console.log("3.Program continues immediately");



// Mutiple Timers //

// console.log("Open CGC portal");

// setTimeout(() => {
//     console.log("Header loaded");
// }, 1000);

// setTimeout(() => {
//     console.log("Student data loaded");
// }, 2000);

// setTimeout(() => {
//     console.log("Footer loaded");
// }, 500);

// console.log("Portal structure ready");



// Form Submission Simulation //

// function submitForm() {
//     console.log("Submitting form....");

//     setTimeout(() => {
//         console.log("Form submitted sucessfully!");
//         console.log("Redirecting to dashboard...");
//     }, 1500);

//     console.log("Please Wait...");
// }

// submitForm();



// Callback Functions //

// function greet(name, callback) {
//     console.log("Hello," + name);
//     callback();
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye);



// Callbacks with Asynchronous Operations //

// function fetchStudentData(studentId, callback) {
//     console.log("Fetching data for student ID:", studentId);


//     setTimeout(() => {
//         let studentData = {
//             id: studentId,
//             name: "Rahul Sharma",
//             course: "Compute Science"
//         };

//         console.log("Data fetched successfully!");
//         callback(studentData);
//     }, 2000);
// }

// function displayStudent(data) {
//     console.log("Displaying student:");
//     console.log("Name:",data.name);
//     console.log("Course:",data.course);
// }

// fetchStudentData(101,displayStudent);



// Car Service //

// function serviceVehicle(cardModel,phoneNumber) {
//     console.log("Received",cardModel,"for service");
//     console.log("Customer can leave now");

//     setTimeout(() => {
//         console.log("Service complete!");
//         phoneNumber();
//     },3000);
// }

// function customerCallback() {
//     console.log("Ring ring! Your car is ready");
//     console.log("Customer returns to pick up car");
// }

// serviceVehicle("Hond City",customerCallback);



// Callback Hell //

// function changeColor(color, delay, callback) {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         console.log("Changed to", color);
//         if (callback) callback();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000, () => {
//                 console.log("All colors done!");
//             });
//         });
//     });
// });



// User Registration Flow //

// function registerUser(username, callback) {
//     setTimeout(() => {
//         console.log("User registered: ", username);
//         callback();
//     }, 1000);
// }

// function sendVerificationEmail(callback) {
//     setTimeout(() => {
//         console.log("Verification email sent");
//         callback();
//     }, 1000);
// }

// function updateDatabase(callback) {
//     setTimeout(() => {
//         console.log("Database updated");
//         callback();
//     }, 1000);
// }

// function sendWelcomeSMS(callback) {
//     setTimeout(() => {
//         console.log("Welcome SMS Sent");
//         callback();
//     }, 1000);
// }

// registerUser("John Doe", () => {
//     sendVerificationEmail(() => {
//         updateDatabase(() => {
//             sendWelcomeSMS(() => {
//                 console.log("Registration complete!");
//             });
//         });
//     });
// });



// Promises: The Solution //

// let myPromise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Operation Successful!");
//     } else {
//         reject("Opeartion failed!")
//     }
// });



// Fast Food Order //

// let internetSpeed = "fast";

// let downloadFile = new Promise ((resolve,reject) => {
//     console.log("Download started...");

//     setTimeout(() => {
//         if (internetSpeed === "fast") {
//             resolve ("File downloaded successfully!");
//         } else {
//             reject ("Download failed: Slow Internet");
//         }
//     },2000);
// });

// console.log("Download initiated");
// console.log(downloadFile);



// Databse Operation //

// function saveToDatabase (data) {
//     return new Promise ((resolve,reject) => {
//         console.log("Saving to database...");

//         setTimeout(() => {
//             let dbAvailable = true;

//             if(dbAvailable) {
//                 resolve({
//                     message: "Data Saved successfully",
//                     id: 12345,
//                     timestamp: new Date()
//                 });
//             } else {
//                 reject ("Database connection failed");
//             }
//         },1500);
//     });
// }

// let savePromise = saveToDatabase({name: "John",age:25});
// console.log(savePromise);