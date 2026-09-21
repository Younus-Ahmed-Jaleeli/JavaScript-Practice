function studentInfo( ) {
    console.log("Name: John Doe");
    console.log("Age: 20");
    console.log("Courses: JavaScript");
}

studentInfo();



function multiplyThree(a,b,c) {
    return a*b*c;
}

console.log(multiplyThree(2,3,4));



function isEligibleToVote (name,age) {
    if (age >= 18) {
        console.log("is eligible to vote");
    } else {
        console.log("is not eligible to vote");
    }
} 

isEligibleToVote('Alice',20);
isEligibleToVote('Bob',15);



function findLargest(a,b) {
    return a>b ? a:b;
}
let max = findLargest(10,20);
console.log(max);



function caclulateDiscount(price,discount) {
    return price - (price*discount/100);
}

let finalPrice = caclulateDiscount (100,20);
console.log(finalPrice);

let saleprice = caclulateDiscount(500,10);
console.log(saleprice);
