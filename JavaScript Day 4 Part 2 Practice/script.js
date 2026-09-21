let fruit = "I love Apple Pie";
console.log(fruit.replace("apple","cherry"));



let text = "I love Apple Pie and Apple Juice";
console.log(text.replace("apple","orange"));



let message = "Hello hello Hello";
console.log(message.replace("hello","hi"));



let sentence = "Hello World";
console.log(sentence.replace(" ","_"));



let str = "   javascript   "
let result = str.trim().replace("java","type");
console.log(result);



let colors = ["red","green","blue"];
console.log(colors);



let fruits = ["Apple","Banana","Mango"];
console.log(fruits[0]);
console.log(fruits[2]);



let mixed = ["hello",42,true,3.14];
console.log(mixed[1]);
console.log(mixed[3]);



let numbers = [10,20,30,40];
console.log(numbers.length);



let items = ["first","second","third","fourth"];
let lastIndex = items.length -1;
console.log(items[lastIndex]);



let fruits1 = ["mango","apple","Litchi"];
fruits1[0] = "banana";
console.log(fruits1);



let numbers1 = [1,2,3,4];
numbers1[0] = 10;
numbers1[3] = 40;
console.log(numbers1);



let colors1 = ["red","green","blue"];
colors1[colors1.length -1] = "yellow";
console.log(colors1);



let arr = ["a","b","c"];
arr[0] = "z";
console.log(arr);



let str1 = "abc";
str1[0] = "z"; 
console.log(str1); 




let scores = [85, 90, 75, 88];
if (scores[2] < 80) {
scores[2] = 80; }
console.log(scores); 



let fruits2 = ["aaple","banana"];
fruits2.push("mango");
console.log(fruits2);



let colors2 = ["red","blue","green"];
let removed = colors2.pop();
console.log(removed);
console.log(colors2);



let numbers2= [2,3,4];
numbers2.unshift(1);
console.log(numbers2);



let items1 = ["first","second","third"];
let firstItem = items1.shift();
console.log(firstItem);
console.log(items1);



let stack = [1,2,3];
stack.push(4);
stack.push(5);
stack.pop();
stack.unshift(0);
console.log(stack);



let fruits3 = ["apple","banana","mango"];
console.log(fruits3.indexOf("banana"));
console.log(fruits3.indexOf ("grape"));



let colors3 = ["red","green","blue"];
console.log(colors.includes("green"));
console.log(colors.includes("yellow"));



let arr1 = [1,2,3];
let arr2 = [4,5,6];
let combined = arr1.concat(arr2);
console.log(combined);



let numbers3 = [1,2,3,4,5];
numbers3.reverse();
console.log(numbers3);



let item2 = ["a","b","c"];
let moreItems = ["d","e"];
let all = item2.concat(moreItems);
console.log(all.includes("c"));
console.log(all.indexOf ("d"));



let months = ["jan","march","april"];
months.splice(1,0,"feb");
console.log(months);



let colors4 = ["red","green","yellow"];
colors4.splice(2,1);
console.log(colors4);



let fruits4 = ["apple","banana","mango"];
fruits4.splice(1,1,"orange");
console.log(fruits4);



let numbers4 = [1,2,5,6];
numbers4.splice(2,0,3,4);
console.log(numbers);



let items2 = ["a","b","c","d","e"];
items2.splice(1,3);
console.log(items2);



console.log[1,2] == [1,2];
console.log[1,2] === [1,2];



let arr3 = [1,2,3];
let arr4 = arr3;
arr4[0] = 99;
console.log(arr3);
console.log(arr2);



let colors5 = ["red","green"];
let palette = colors5;
palette.push("blue");
console.log(colors5);
console.log(palette);



let a = [1,2,3];
let b = a;
console.log(a===b);




let original = [1,2,3];
let copy = [1,2,3];
copy[0] = 99;
console.log(original);
console.log(copy);



let grid = [[1,2],[3,4]];
console.log(grid[0]);
console.log(grid[0][1]);



let board =[
    ["x","o","x"],
    ["o","x","o"], 
    ["o","x","x"] 
]

console.log(board[0][0]);
console.log(board[2][2]);



let grades = [
    ["Alice",85,90,92],
    ["Bob",78,88,84],
    ["Charlie",92,95,88]
]

console.log(grades[0][0]);
console.log(grades[1][2]);



let matrix = [[1,2],[3,4]];
matrix[0][1] = 20;
console.log(matrix);



let data = [[1,2,3], [4,5,6], [7,8,9]];
console.log(data[1][1]);
console.log(data[2][0]);

