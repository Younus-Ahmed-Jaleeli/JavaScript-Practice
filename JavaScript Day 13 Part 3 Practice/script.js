// changeColorPromise("red", 1000)
//     .then(() => {
//         console.log("Red Done");
//         return changeColorPromise("Orange", 1000);
//     })
//     .then(() => {
//         console.log("Orange Done");
//         return changeColorPromise("Green", 1000);
//     })
//     .then(() => {
//         console.log("Green Done");
//         return changeColorPromise("blue", 1000);
//     })
//     .then(() => {
//         console.log("All Colors Completed");
//     });



// let internetspeed = "good";

// const saveData = new Promise ((resolve,reject) => {
//     if (internetspeed == "good") {
//         resolve ("Success: Data send to CGC Databse");
//     } else {
//         reject ("Failure: Connection Work");
//     }
// });



// User Registration //

// function registerUser(username) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("✔️ User Registered:", username);
//             resolve(username);
//         }, 1000);
//     });
// }

// function sendVerificationEmail(username) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("✔️ Verification email sent to", username);
//             resolve(username);
//         }, 1000);
//     });

// }

// function updateDatabse(username) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("✔️ Database updated for", username);
//             resolve(username);
//         }, 1000);
//     });
// }

// function sendWelcomeSMS(username) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("✔️ Welcome SMS sent to", username);
//             resolve(username);
//         }, 1000);
//     });
// }

// registerUser("John_Doe")
//     .then(sendVerificationEmail)
//     .then(updateDatabse)
//     .then(sendWelcomeSMS)
//     .then((username) => {
//         console.log("🎉 Registration Complete for", username);
//     })
//     .catch((error) => {
//         console.log("❌ Registration Failed", error);
//     });



// Promise Chaining //

// function login(username) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Logged in as", username);
//         }, 1000);
//     });
// }

// function fetchProfile(username) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ username: username, bio: "Web Developer " });
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

// login("Alice_Dev")
//     .then(fetchProfile)
//     .then(fetchPosts)
//     .then((data) => {
//         console.log("Profile:", data.profile);
//         console.log("Posts:", data.posts);
//     })
//     .catch((error) => console.log("Error:", error));