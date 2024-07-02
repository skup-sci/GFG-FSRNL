// A program that reads three string and print the smallest string in JS


const readsync = require("readline-sync");
const string1 = readsync.question("Enter the first string: ")
const string2 = readsync.question("Enter the second string: ")
const string3 = readsync.question("Enter the third string: ")
if(string1.length < string2.length && string1.length < string3.length)
    {
        console.log("The smallest string is: "+string1);
        }
        else if(string2.length < string1.length && string2.length < string3.length)
            {
                console.log("The smallest string is: "+string2);
                }
                else
                {
                    console.log("The smallest string is: "+string3);
                    }
                    