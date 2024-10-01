import { reverseString, countCharacters, compose } from "./stringUtils";
import fs from "fs";
import path from "path";

const inputString = "Node.js enables JavaScript to be run on the server.";

const reversedInputString = reverseString(inputString);
const characterCount = countCharacters(inputString);

console.log("Reversed String: ",  reversedInputString);
console.log("Character Count: ", characterCount);

fs.writeFileSync('reversed.txt', reversedInputString);

const filePath = path.join(__dirname, 'reversed.txt');
console.log("Reversed string saved to: ", filePath);



const toUpperCase = (str: string) => str.toUpperCase();
const addExclamation = (str: string) => str + "!";
const trim = (str: string) => str.trim();

const processString = compose(addExclamation, toUpperCase, trim);