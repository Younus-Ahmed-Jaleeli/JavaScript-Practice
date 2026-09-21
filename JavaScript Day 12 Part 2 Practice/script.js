// Extracting Form Data //

// let nameInput = document.querySelector("#name");
// let btn = document.querySelector("#submitBtn");
// btn.addEventListener("click", function() {
// let userName = nameInput.value; 
// console.log("Name entered:", userName);
// });



// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
// event.preventDefault();
// let firstName = document.querySelector("#firstName").value;
// let lastName = document.querySelector("#lastName").value;
// let email = document.querySelector("#email").value;
// console.log("Full Name:", firstName + " " + lastName);
// console.log("Email:", email);
// });



// let dropdown = document.querySelector("#country");
// let btn = document.querySelector("#selectBtn");
// btn.addEventListener("click", function() {
// let selected = dropdown.value;
// console.log("Selected country:", selected);
// alert("You selected: " + selected);
// });



// Change vs Input Events 

// let textArea = document.querySelector("textarea");
// let counter = document.querySelector("#charCount");
// textArea.addEventListener("input", function() {
// let count = textArea.value.length;
// counter.innerText = count + " characters";
// });



// let textArea = document.querySelector("#message");
// let counter = document.querySelector("#charCount");

// textArea.addEventListener("input", function () {
//     let count = textArea.value.length;
//     counter.innerText = count + " characters";
// });



// let nameField = document.querySelector("#name");
// nameField.addEventListener("change", function() {
// console.log("Final name:", nameField.value);
// alert("Name saved: " + nameField.value);
// });



// let searchBox = document.querySelector("#search");
// let suggestions = document.querySelector("#suggestions");
// searchBox.addEventListener("input", function() {
// let query = searchBox.value;
// if (query.length > 0) {
// suggestions.innerHTML = `
// <p>Searching for: ${query}</p>
// <p>Result 1: ${query} tutorial</p>
// <p>Result 2: ${query} guide</p>
// `;
// } else {
// suggestions.innerHTML = "";
// }
// });



// let password = document.querySelector("#password");
// let strength = document.querySelector("#strength");
// password.addEventListener("input", function() {
// let length = password.value.length;
// if (length < 4) {
// strength.innerText = "Weak";
// strength.style.color = "red";
// } else if (length < 8) {
// strength.innerText = "Medium";
// strength.style.color = "orange";
// } else {
// strength.innerText = "Strong";
// strength.style.color = "green";
// }
// });


// let input = document.querySelector("#myInput");
// input.addEventListener("input", function() {
// console.log("Typing...", input.value);
// });
// input.addEventListener("change", function() {
// console.log("Final value:", input.value);
// alert("You entered:" + input.value);
// });



// let input = document.querySelector("#textInput");
// let display = document.querySelector("#display");

// input.addEventListener("input", function() {
//     display.innerText = input.Value;
// });



// let input = document.querySelector("#textInput");
// let display = document.querySelector("#display");
// let clearBtn = document.querySelector("#clearBtn");
// let boldBtn = document.querySelector("#boldBtn");
// input.addEventListener("input", function() {
// display.innerText = input.value;
// });
// clearBtn.addEventListener("click", function() {
// input.value = "";
// display.innerText = "Your text will appear here...";
// });
// boldBtn.addEventListener("click", function() {
// if (display.style.fontWeight === "bold") {
// display.style.fontWeight = "normal";
// } else {
// display.style.fontWeight = "bold";
// }
// });