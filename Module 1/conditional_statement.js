//conditional statements
//if else
//if else if else
//switch case

// if(false){
//     console.log("this is an example of if else");
// }
// else {
//     console.log("This one is true.");
// }


const readlinesync = require("readline-sync");
const age = readlinesync.question("May I know your age: ");

if(age >= 18){
    console.log("You can vote and drink");
    }
    else if(age >= 16){
        console.log("You can drive");
        }
        else if(age >= 13){
            console.log("You can get a job");
            }
            else {
                console.log("You can do nothing");
                }

