//Data types

//string 

let userName = "Shashank";
console.log(typeof userName); //string
console.log(userName); //Shashank

//number
let my_age= 20;
console.log(typeof my_age); //number
console.log(my_age); //20

//boolean true/false --> yes/no
let isMarried = true;
console.log(typeof isMarried); //boolean
console.log(isMarried); //true

//undefined
let name;
console.log(typeof name); //undefined
console.log(name); //undefined

//null
let age = null;
console.log(typeof age); //object
console.log(age); //null

//object
// const personDetails = {name: "Shashank", age: 24, education: "Engineering"}
// console.log(typeof personDetails); //object

// console.log(personDetails); //{name: "Shashank", age: 24, education: "Engineering"}

//Array

const personDetails = ["Shashank", 24, "Engineering"];
console.log(typeof personDetails); //object
console.log(personDetails); //["Shashank", 24, "Engineering"]

//Concatenation and Template literal

let username = "shashank";
let age_2 = 24;
let education = "Engineering";
console.log("My name is " + username + " and I am " + age_2 + " years");
console.log(`My name is ${username} and I am ${age_2} years`);
