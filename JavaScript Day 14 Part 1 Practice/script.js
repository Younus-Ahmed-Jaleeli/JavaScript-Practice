// Async $ Await Function //

// async function getUserContent() {
//     try { 

//         const user = await fetchUserData();
//         console.log("User:",user);

//         const posts = await fetchUserPosts(user.id);
//         console.log("posts:",posts);

//         const comments = await fetchPostComments(posts[0].id);
//         console.log("Comments:",comments);
        
//     } catch (error) {
//         console.log("Error:",error);
//     }
// }

// getUserContent();



// Await Keyword //

// async function orderCoffee() {
//     console.log("Order placed");
//     await makeCoffee();
//     console.log("Coffee received,now I can drink it");
// }

// orderCoffee();



// function checkNumber(num) {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             if (num>10) {
//                 resolve(`Success! ${num} is greater than 10`);
//             } else {
//                 reject (`Error! ${num} is not greater than 10`);
//             }
//         }, 1000);
//     });
// }

// async function testNumber() {
//     try {
//         console.log("Starting async test...");
//         const result = await checkNumber(15);
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// testNumber();



// User Authentication Simulation //

// function authenticateUser (username,password) {
//     return new Promise((resolve, reject) => {
//         console.log("Authenticating user...");

//         setTimeout(() => {
//             if (username === "admin" && password === "1234") {
//                 resolve ({
//                     username: username,
//                     token: "abc123xyz",
//                     message:"Authentication Successful"
//                 });

//             } else {
//                 reject ("Inavlid username or password");
                
//             }
//         }, 2000);
//     });
// }

// async function loginUser() {
//     try {
//         console.log("Login attempt...");
//         const userData = await authenticateUser("admin","1234");
//         console.log("Success:",userData.message);
//         console.log("Token:",userData.token);
//         console.log("Welcome:",userData.username);
//     } catch (error) {
//         console.log("Authentication Failed:",error);
//     }
// }

// loginUser();



// async function fetchAllUserData (username) {

//     try {

//         console.log("=== Starting Async Function ===");

//         const userId = await getUserId(username);
//         console.log("User ID received:",userId);

//         const userDetails = await getUserDetails(userId);
//         console.log("User Details:",userDetails);

//         const posts = await getUserPosts(userDetails.id);
//         console.log("user Posts:",posts);

//         console.log("=== All data fetched successfully ===");

//     } catch (error) {

//         console.log("Error Occurred:",error);

//     }
// }

// fetchAllUserData("John_Doe");



