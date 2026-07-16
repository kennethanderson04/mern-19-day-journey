let array = [1, 2, 3, 4, 5];
console.log("original array:", array);

//adding elements to the end of the array
array.push(6);
console.log("after push:", array);  

//adding elements to the beginning of the array
array.unshift(0);
console.log("after unshift:", array);

//removing elements from the end of the array
array.pop();
console.log("after pop:", array);   

//removing elements from the beginning of the array
array.shift();
console.log("after shift:", array);

//modifying the array elements
array[2] = 10;
console.log("after modifying 2nd place:", array);

//sorting the array in ascending order
array.sort((a, b) => a - b);
console.log("after sort:", array);  

//reversing the array
array.reverse();
console.log("after reverse:", array);

console.log("length of the array:", array.length);

let b = [9,6,7,8];

let concatarr = array.concat(b);
console.log("after concat:", concatarr);

