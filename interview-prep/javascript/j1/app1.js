let str = "Hello World";
let result = "";
let word = "";

// reverse the string

for (let i = str.length - 1; i >= 0; i--) {
  if (str[i] === " ") {
    result += word + " ";
    word = "";
  } else {
    word = str[i] + word;
  }
}
result += word
console.log(result)
