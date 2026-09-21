//Event Listeners//

// let btn = document.querySelector("button");

// btn.addEventListener("click",function() {
//     console.log("Button was clicked!");
//     alert("You Clicked me!");
// });



// let button = document.querySelector("#myBtn");

// button.addEventListener("click",function() {
//     console.log("First Action");
// });

// button.addEventListener("click",function() {
//     console.log("Second action");
// });



// let para = document.querySelector("p");
// let count = 0;

// para.addEventListener("click",function() {
//     count++;
//     para.innerText = "You Clicked me ${count} times!";
// });



// let box = document.querySelector(".box");

// box.addEventListener("mouseenter",function() {
//     box.style.backgroundColor = "yellow";
//     console.log("Mouse entered!");
// })



// let hideBtn = document.querySelector("#hideBtn");
// let content = document.querySelector("#content");
// hideBtn.addEventListener("click", function() {
// if (content.style.display === "none") {
// content.style.display = "block";
// hideBtn.innerText = "Hide";
// } else {
// content.style.display = "none";
// hideBtn.innerText = "Show";
// }
// });



// let heading = document.querySelector("h1");
// heading.addEventListener("dblclick", function() {
// heading.innerText = "You double-clicked me!";
// heading.style.color = "red";
// });



// let card = document.querySelector(".card");
// card.addEventListener("mouseenter", function() {
// card.style.transform = "scale(1.1)";
// card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
// });
// card.addEventListener("mouseleave", function() {
// card.style.transform = "scale(1)";
// card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
// });



// this Keyword //

// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");
// let button = document.querySelector("button");
// function changeColor() {
// this.style.backgroundColor = "lightblue";
// console.log(this.innerText + " was clicked!");
// }
// h1.addEventListener("click", changeColor);
// h2.addEventListener("click", changeColor);
// button.addEventListener("click", changeColor);



// let boxes = document.querySelectorAll(".box");
// function toggleActive() {
// this.classList.toggle("active");
// }

// for (let box of boxes) {
// box.addEventListener("click", toggleActive);
// }



// let deleteButtons = document.querySelectorAll(".delete-btn");
// function removeItem() {
// this.parentElement.remove();
// console.log("Item deleted!");
// }
// for (let btn of deleteButtons) {
// btn.addEventListener("click", removeItem);
// }



// let menuItems = document.querySelectorAll(".menu-item");
// function highlight() {
// // Remove highlight from all items first
// for (let item of menuItems) {
// item.style.fontWeight = "normal";
// }
// // Highlight only the clicked one
// this.style.fontWeight = "bold";
// }
// for (let item of menuItems) {
// item.addEventListener("click", highlight);
// }



// Keyboard Events //

// let input = document.querySelector("input");
// input.addEventListener("keydown", function(event) {
// console.log("Key:", event.key);
// console.log("Code:", event.code);
// });



// let player = document.querySelector("#player");
// document.addEventListener("keydown", function(event) {
// if (event.code === "ArrowUp") {
// console.log("Move Up");
// player.style.top = (parseInt(player.style.top) - 10) + "px";
// } else if (event.code === "ArrowDown") {
// console.log("Move Down");
// player.style.top = (parseInt(player.style.top) + 10) + "px";
// } else if (event.code === "ArrowLeft") {
// console.log("Move Left");
// player.style.left = (parseInt(player.style.left) - 10) + "px";
// } else if (event.code === "ArrowRight") {
// console.log("Move Right");
// player.style.left = (parseInt(player.style.left) + 10) + "px";
// }
// });



// let searchBox = document.querySelector("#search");
// searchBox.addEventListener("keydown", function(event) {
// if (event.key === "Enter") {
// console.log("Searching for:", searchBox.value);
// alert("You searched for: " + searchBox.value);
// }
// });



// document.addEventListener("keydown", function(event) {
// if (event.ctrlKey && event.key === "s") {
// event.preventDefault(); 
// console.log("Custom save triggered!");
// alert("Content saved!");
// }
// });



// let textarea = document.querySelector("textarea");
// let counter = document.querySelector("#counter");
// textarea.addEventListener("keyup", function() {
// let length = textarea.value.length;
// counter.innerText = length + " / 100 characters";
// if (length > 100) {
// counter.style.color = "red";
// } else {
// counter.style.color = "black";
// }
// });



// form Events //

// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
// event.preventDefault(); // STOP the page reload!
// console.log("Form submitted!");
// });



// let loginForm = document.querySelector("#loginForm");
// loginForm.addEventListener("submit", function(event) {
// event.preventDefault();
// let username = document.querySelector("#username").value;
// let password = document.querySelector("#password").value;
// console.log("Username:", username);
// console.log("Password:", password);
// alert("Welcome, " + username + "!");
// });



// let signupForm = document.querySelector("#signup");
// signupForm.addEventListener("submit", function(event) {
// event.preventDefault();
// let email = document.querySelector("#email").value;
// let age = document.querySelector("#age").value;
// if (age < 18) {
// alert("You must be 18 or older to sign up!");
// } else if (!email.includes("@")) {
// alert("Please enter a valid email!");
// } else {
// alert("Signup successful!");
// console.log("User registered:", email);
// }
// });



// let searchForm = document.querySelector("#searchForm");
// let results = document.querySelector("#results");
// searchForm.addEventListener("submit", function(event) {
// event.preventDefault();
// let query = document.querySelector("#searchInput").value;
// results.innerText = `You searched for: "${query}"`;
// // Clear the input
// document.querySelector("#searchInput").value = "";
// });