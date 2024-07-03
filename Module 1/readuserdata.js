// Read data from user

const readlinesync = require("readline-sync");
const name = readlinesync.question("Enter your name: ");
const age = readlinesync.question("Enter your age: ");
console.log(name, age);
console.log(typeof name, typeof age);

