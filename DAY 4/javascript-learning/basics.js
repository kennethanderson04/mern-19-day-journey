//OPERATORS in javascript

//arithmetic operators
const sum = 10 + 5; //addition
const difference = 10 - 5;
const product = 10 * 5; //multiplication
const quotient = 10 / 5;

console.log(sum, difference, product, quotient);

//comparison operators
const isEqual = 10 == 10;
const isNotEqual = 10 != 5;
const isGreater = 10 > 5;
const isLess = 10 < 5;

console.log(isEqual, isNotEqual, isGreater, isLess);

//assignment operators
let x = 10;
x += 5; // x = x + 5
x -= 5;
x *= 5;
x /= 5;

console.log(x);

//CONTROL FLOW STATEMENTS
//if statement
const age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}   

//for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}           

//while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}   

//do while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);    

//ternary operator
const isEven = (num) => (num % 2 === 0 ? "Even" : "Odd");
console.log(isEven(4));
console.log(isEven(5));