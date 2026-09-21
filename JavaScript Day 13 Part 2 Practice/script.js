// Consuming Promises : .then() and .catch()

// let promise = new Promise ((resolve,reject) => {
//     setTimeout(() => {
//         resolve("Success! Data is here.");
//     }, 1000);
// });

// promise.then ((message) => {
//     console.log(message);
// });



// let promise = new promise ((resolve,reject) => {
//     setTimeout(() => {
//         reject("Error! Something went wrong.");
//     },1000);
// });

// promise.catch ((error) => {
//     console.log(error);
// });



// let loginStatus = "success";

// let loginPromise = new Promise ((resolve,reject) => {
//     setTimeout(() => {
//         if(loginStatus == "Success") {
//             resolve("Login successfull! Welcome back.");
//         } else {
//             reject ("Login Successfull! Invalid Credentials.")
//         }
//     },1500);
// });

// loginPromise
// .then ((message) => {
//     console.log("✔️",message);
//     console.log("Redirected to dashboard...");
// })
// .catch((error) => {
//     console.log("❌",error);
//     console.log("Please try again.");
// });



// Real API Example //

// function fetchUserProfile(userId) {
//     return new Promise((resolve, reject) => {
//         console.log("Fetching user profile...");

//         setTimeout(() => {
//             if (userId > 0) {
//                 resolve({
//                     id: userId,
//                     name: "Priya Sharma",
//                     email: "priya@example.com",
//                     role: "Student"
//                 });
//             } else {
//                 reject("Invalid user ID");
//             }
//         }, 2000);
//     });
// };

// fetchUserProfile(101)
//     .then((user) => {
//         console.log("user found!");
//         console.log("Name", user.name);
//         console.log("Email:", user.email);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });

// fetchUserProfile(-1)
//     .then((user) => {
//         console.log("user Found!", user);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });



// Finally Method //

// let loadingSpinner = true;

// fetchData()
//     .then((data) => {
//         console.log("Data:".data);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     })
//     .finally(() => {
//         loadingSpinner = false;
//         console.log("Loading complete - hide spinner");
//     });



// Promise Chaining //

// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Step 1 complete");
//             resolve("Data from step 1");
//         }, 1000);
//     });
// }

// function step2(previousData) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Step 2 complete");
//             console.log("Received:", previousData);
//             resolve("Data from step 2");
//         }, 1000);
//     });
// }

// function step3(previousData) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Step 3 complete");
//             console.log("Received:", previousData);
//             resolve("Final result");
//         }, 1000);
//     });
// };



// // Clean Promise Chain //

// step1()
//     .then((result1) => {
//         return step2(result1);
//     })
//     .then((result2) => {
//         return step3(result2);
//     })
//     .then((finalResult) => {
//         console.log("All Done!", finalResult);
//     })
//     .catch((error) => {
//         console.log("Error at some step:", error);
//     });



// Simple Promise //

// function checkResult(marks) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (marks >= 40) {
//                 resolve("Passed! Congratulations!");
//             } else {
//                 reject("Failed, Better luck next time.");
//             }
//         }, 1000);
//     });
// };

// checkResult(75)
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error));



// function login(username) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Logged in as", username);
//             resolve(username);
//         }, 1000);
//     });
// }

// function fetchProfile(username) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ username: username, bio: "Web Developer" });
//         }, 1000);
//     });
// }

// function fetchPosts(profile) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 profile: profile,
//                 posts: ["Post 1", "Post 2", "Post 3"]
//             });
//         }, 1000);
//     });
// }

// login("alice_dev")
//     .then(fetchProfile)
//     .then(fetchPosts)
//     .then((data) => {
//         console.log("Profile:", data.profile);
//         console.log("Posts:", data.posts);
//     })
//     .catch((error) => console.log("Error:", error));