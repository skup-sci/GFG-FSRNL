//Print star in JS

//1. Print 5 stars

const symbol = "* ";

console.log(symbol.repeat(1));
console.log(symbol.repeat(2));
console.log(symbol.repeat(3));
console.log(symbol.repeat(4));
console.log(symbol.repeat(5));
console.log("");

//2. Print 5 stars in reverse order

console.log(symbol.repeat(5));
console.log(symbol.repeat(4));
console.log(symbol.repeat(3));
console.log(symbol.repeat(2));
console.log(symbol.repeat(1));

//Use for loop instead

for (let i = 5; i <= 1; i--) {
    console.log(symbol.repeat(i));
    }

console.log("");

//3. Print 5 stars in reverse order using while loop

let i = 5;
while (i >= 1) {
    console.log(symbol.repeat(i));
    i--;
    }
console.log(""); 

//4. Print 5 stars in reverse order using do while loop

do {
    console.log(symbol.repeat(i));
    i--;
    } while (i >= 1);

//Use for loop instead

for (let i = 1; i <= 5; i++) {
    console.log(symbol.repeat(i));
    }


//Vowel in a string

const inputString = "Hello, run this code please !!";
const vowels = "aeiouAEIOU";

for(let i=0; i<inputString.length; i++){
    if(vowels.includes(inputString[i])){
        console.log(`${inputString[i]} is a vowel`);
    }else{
        console.log(`${inputString[i]} is not a vowel`);
    }
}


