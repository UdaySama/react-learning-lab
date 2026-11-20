const fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits.at(-1));   //Orange
console.log(fruits.at(-fruits.length));  //Apple
console.log(fruits.at(-5)); // undefiend 
console.log(fruits[fruits.length - 1]);  // Orange
console.log(fruits.at(1)); //Banana