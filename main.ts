import { reverseString, countCharacters, compose } from "./stringUtils";

const inputString = "Node.js enables JavaScript to be run on the server.";

const reversedString = reverseString(inputString);
const characterCount = countCharacters(inputString);

console.log("Reversed String: ",  reversedString);
console.log("Character Count: ", characterCount);