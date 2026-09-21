for (let i = 0; i <100; i++) {
    console.log(i);
    console.log("Hello");
}



for (let i=1; i<=5; i++) {
    console.log(i);
}



for (let i=1;i<=15;i+=2) {
    console.log(i);
}



for (let i=2;i<=10;i+=2) {
    console.log(i);
}



for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5*i}`);
}



// for (let i=10;i>=1;i++) {
//     console.log(i);
// }
// console.log("Blast Off");




for (let i=1;i<=5;i++) {
    console.log(i);
}



for (let i=10;i<=0;i++) {
    console.log(i);
}



let count = 0;
while (count<5) {
    console.log(count);
    count++;
}



for (let i=1; i<=3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j=1; j<=3 ;j++) {
        console.log(`Inner Loop: ${j}`);
    }
}



for (let i=1; i<=5; i++) {
    let row = "";
    for (let j=1; j<=5; j++) {
        row +=(i*j)+"\t";
    }
    console.log(row);
}



for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j=1;j<=i;j++) {
        pattern += "*";
    }
    console.log(pattern);
}



for (let row = 1; row <=4; row++) {
    let line = "";
    for (let col = 1; col <=4; col++) {
        line += `(${row},${col})`;
    }
    console.log(line);
}



// for (let i = 5; i >= 1; i++) {
//     let pattern = "";
//     for (let j=1;j<=i;j++) {
//         pattern += "*";
//     }
//     console.log(pattern);
// }



let i = 1;
while (i<=5) {
    console.log(i);
    i++;
}



let sum = 0;
let num = 1;

while (sum<50) {
    sum += num;
    console.log(`Added ${num}, sum is now ${sum}`);
    num++;
}
console.log(`Final Sum: ${sum}`);



let password = "";
let attempts = 0;

while (password !=='secret123' && attempts <3) {
    password = prompt ("Enter password:");
    attempts++;

    if (password === "secret123") {
        console.log("Acecss granted");
    } else if (attempts <3) {
        console.log(`Wrong password,${3 - attempts} attempts remaining.`)
    } else {
        console.log("Access denied.Too many attempts,");
    }
}



let number = 1000;

while (number > 1) {
    number = number / 2;
    console.log(number);
}



let target = 1000;
let power = 1;
let exponent = 0;

while (power <= target) {
    exponent++;
    power = 2** exponent;
}

console.log(`2^${exponent} = ${power} is the first power of 2 greater than ${target}`);



let choice; 

do {
    console.log("Menu:");
    console.log("1.Play");
    console.log("2.Settings");
    console.log("3.Exit");
    choice = prompt ("Enter your Choice:");

    if (choice === "1") {
        console.log("Starting Game...");
    } else if (choice === "2") {
        console.log ("Opening settings...");
    }

} while (choice !== "3");

console.log("Goodbye!");



let roll;
let attempts = 0;

do {
    roll = Math.floor(Math.random()*6)+1;
    attempts++;
    console.log(`Roll ${attempts} : ${roll}`);
} while (roll !==6);

console.log(`Got a 6 after ${attempts} attempts! `);



let number;

do {
    number = prompt ("Enter a positive number: ");
    number = Number(number);

    if(number<=0 || isNaN(number) ) {
        console.log("Invalid input.Please enter a positive number,");
    }
} while (number <= 0 || isNaN(number));

console.log(`You Entered: ${number}`);



let count1 = 0;

do {
    console.log(`Count: ${count1}`);
    count1++;
} while (count < 0);











