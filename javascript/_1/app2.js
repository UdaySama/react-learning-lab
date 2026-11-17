const numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(1, 3));  // 20 30  
console.log(numbers.slice(-2)); // 40 50
console.log(numbers.at(-2));  // 40
console.log(numbers.length); //0 1 2 3 4 = 5
console.log(numbers.slice(0, -1));  //  10 - 40