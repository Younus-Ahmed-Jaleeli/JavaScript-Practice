//Global Space //

function one() 
{
    return 1;
}

function two() 
{
    return one() + one();
}

function three()
 {
    let ans = two() + one();
    console.log(ans);
}

three();



var n = 2;

function square(num) 
{
    var ans = num*num;
    return ans;
}

var square2 = square(n);

var square4 = square(4);

console.log(square2);

console.log(square4);




var n = 2;

function add(num) 
{
    var ans = num + num;
    return ans;
}

var add2 = add(n);

var add4 = add(4);

console.log(add2);

console.log(add4);