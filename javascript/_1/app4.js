const numbers = [5, 10, 15, 20, 25];

console.log(numbers[-1]); // undefined
console.log(numbers[0 - 1]); // undefined
console.log(numbers.at(-1)); // 25
console.log(numbers.at(-3)); // 15