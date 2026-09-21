for (let i=1; i<=3; i++) {
    for (let j=1; j<=3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}



for (let i = 1; i <=5; i++) {
    for (let j = 1; j <=5; j++) {
        console.log(`${i} X ${j} = ${i*j}`);
    }
}



for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j=1; j<=1; j++) {
        row += "*";
    }
    console.log(row);
}



for (let row = 1; row <=4; row++) {
    let line = "";
    for (let col = 1;col <=4;col++) {
        line += col + "";
    }
    console.log(line);
}



let size = 5;
for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j=1;j<=size;j++) {
        row += "#";
    }
    console.log(row);
}


let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for (let i=0; i<matrix.length;i++) {
    for (let j=0; j<matrix[i].length;j++) {
        console.log(matrix[i][j]);
    }
}



let teams = [
    ["Alice","Bob"],
    ["Charlie","David"],
    ["Eve","Frank"]
];

for (let i=0; i < teams.length;i++) {
    console.log(`Team ${i+1}:`);
    for (let j=0; j<teams[i.length];j++){
        console.log(` -${teams[i][j]}`);
    }
}



let numbers = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let total=0;
for(let i=0; i<numbers.length;i++) {
    for (let j=0;j <numbers[i].length;j++) {
        total +=numbers[i][j];
    }
}
console.log(`Total Sum: ${total}`);