var a = 10; //function scoped variaable not used in modern JS
const b = "ken"; //constant fixed value - block scoped variable
let c = true; //can be changed later - block scoped variable
console.log(a);
console.log(b);
console.log(c);

//identifiers
let _name = "ken"; //valid identifier
const $age = 30; //valid identifier
//let 1name = "ken"; //invalid identifier - cannot start with a number
//var name@ = "ken"; //invalid identifier - cannot contain special characters except $ and _
//const class = "class"; //invalid identifier - cannot use reserved keywords

console.log(_name);
console.log($age);