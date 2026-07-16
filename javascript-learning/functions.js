//FUNCTIONS IN JAVASCRIPT

//Function Declaration
function add(a, b) {
    return a + b;
}

//Function Expression
const subtract = function(a, b) {
    return a - b;
}

//Arrow Function
const multiply = (a, b) => {
    return a * b;
}

//Function with default parameters
function divide(a, b = 1) {
    return a / b;
}

//RECURSION
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }   
    return n * factorial(n - 1);
}

const result1 = add(5, 3);
const result2 = subtract(10, 4);
const result3 = multiply(6, 7);
const result4 = divide(20, 4);
const result5 = divide(20);