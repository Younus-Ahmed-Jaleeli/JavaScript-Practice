const car = {
    brand: "Toyota",
    model: "Camry",
    price: 25000,

    displayInfo: function() {
        console.log(
            `Brand: ${this.brand}, Model: ${this.model}, Price: $${this.price}`
        );
    },

    applyDiscount: function(percentage) {
        this.price = this.price - (this.price * percentage / 100);
        console.log(`New Price: $${this.price}`);
    }
};

// Test
car.displayInfo();
car.applyDiscount(10);
car.displayInfo();
  


const student = {
    name: "John",

    subjects: [
        { name: "Math", marks: 85 },
        { name: "Science", marks: 90 },
        { name: "English", marks: 88 }
    ],

    calculateAverage: function() {
        let total = 0;

        for (let subject of this.subjects) {
            total += subject.marks;
        }

        return total / this.subjects.length;
    },

    displayReport: function() {
        let average = this.calculateAverage();

        console.log(`Student Name: ${this.name}`);
        console.log(`Average Marks: ${average}`);
    }
};

// Test
student.displayReport();



function safeDivide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero!");
        }

        return a / b;
    } catch (error) {
        console.log(error.message);
    }
}

// Test
console.log(safeDivide(10, 2));
console.log(safeDivide(20, 4));
console.log(safeDivide(10, 0));



function getElement(arr, index) {
    try {
        if (index < 0) {
            throw new Error("Index cannot be negative!");
        }

        if (index >= arr.length) {
            throw new Error("Index out of bounds!");
        }

        return arr[index];

    } catch (error) {
        console.log(error.message);
    }
}

// Test
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(getElement(fruits, 1));
console.log(getElement(fruits, 3));
console.log(getElement(fruits, -1));
console.log(getElement(fruits, 5));



let temperatures = [0, 10, 20, 30, 40];

let fahrenheit = temperatures.map(celsiusToFahrenheit);

console.log(fahrenheit);



let count = 10;

let countdown = setInterval(() => {
    console.log(count);

    if (count === 0) {
        console.log("Time's up!");
        clearInterval(countdown);
    }

    count--;
}, 1000);




const timer = {
    seconds: 0,
    intervalId: null,

    start: function() {
        this.intervalId = setInterval(() => {
            this.seconds++;
            console.log(this.seconds);
        }, 1000);
    },

    stop: function() {
        clearInterval(this.intervalId);
        console.log("Timer stopped");
    },

    reset: function() {
        this.seconds = 0;
        console.log("Timer reset");
    }
};

// Test
timer.start();

// After some time:
// timer.stop();
// timer.reset();


