// User enters a number, if the number is greater than 50 then ask the user to enter a number less than 50 again

let readlineSync = require("readline-sync");
let number = readlineSync.question("Enter a number: ");

// if (number > 50) {
//     console.log("The number is greater than 50");
// } else {
//         console.log("The number is less than 50");
//     }

while(number >= 50){
    number = readlineSync.question("Enter a number less than 50: ");
}
console.log("The number is less than 50. Please enter a number greater than 50");

