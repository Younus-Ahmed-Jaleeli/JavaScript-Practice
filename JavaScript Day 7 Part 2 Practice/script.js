const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

console.log(add(10, 5));
console.log(subtract(10, 5));



function repeatTask(func, n) {
    for (let i = 0; i <= n; i++) {
        func();
    }
}

const alertUser = () => {
    console.log("Alert");
};

repeatTask(alertUser, 3);



function applyDiscount(price, discountFunc) {
    return discountFunc(price);
}

const tenPercent = (price) => price * 0.9;
const twentyPercent = (price) => price * 0.8;

console.log(applyDiscount(100, tenPercent));
console.log(applyDiscount(100, twentyPercent));



function calculate(a, b, operation) {
    return operation(a, b);
}

const add_ = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(5, 3, add_));
console.log(5, 3, multiply);



function processArray(arr, processor) {
    for (let i = 0; i < arr.length; i++) {
        processor(arr[i]);
    }
}

const printDouble = (num) => {
    console.log(num * 2);
};

processArray([1, 2, 3], printDouble);



const car = {
    brand: "Tesla",
    start: function () {
        console.log("Engine on");
    },
    stop: function () {
        console.log("Engine off");
    }
};

car.start();
car.stop();



const mathtools = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};

console.log(mathtools.add(5, 3));
console.log(mathtools.subtract(10, 4));



const calculator = {
    add(a, b) {
        return a + b;
    },

    multiply(a, b) {
        return a * b;
    }
};

console.log(calculator.add(10, 5));
console.log(calculator.multiply(4, 7));



const person = {
    name: "Alice",
    greet() {
        console.log("Hello,I am " + this.name);
    },
    sayAge(age) {
        console.log("I am " + age + " years old");
    }
};

person.greet();
person.sayAge(25);



const account = {
    balance: 1000,
    deposit(amount) {
        this.balance = this.balance + amount;
        console.log("New balance: " + this.balance);

    },
    withdraw(amount) {
        this.balance = this.balance - amount;
        console.log("New Balance: " + this.balance);
    }
};

account.deposit(500);
account.withdraw(200);



const formatter = {
    toUpper(str) {
        return str.toUpperCase();
    },
    toLower(str) {
        return str.toLowerCase();
    },
    trim(str) {
        return str.trim();
    }
};

console.log(formatter.toUpper("hello"));
console.log(formatter.toLower("WORLD"));
console.log(formatter.trim(" Spaces "));



const counter = {
    count: 0,
    increement() {
        this.count++;
        console.log("Count: "+ this.count);
    },
    reset() {
        this.count = 0;
        console.log("Counter reset");
    }
};

counter.increement();
counter.increement();
counter.reset();