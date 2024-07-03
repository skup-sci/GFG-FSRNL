// Logical Operator with conditional statements
// 1.OR ||
// 2.AND &&
// 3.NOT !
// 4.Nullish Coalesting ??

const physics = 80;
const chemistry = 90;
const biology = 70;
const maths = 60;
const english = 80;

//AND
if(physics > 75 && chemistry > 80  && maths > 70){
    console.log("You are eligible for admission in engineering field");
}
else{
    console.log("You are not eligible for admission in medical field");
}

//OR
if(physics > 75 || chemistry > 80  || maths > 70 || english > 70){
    console.log("You are eligible for admission in engineering field");
    }
    else if (physics > 75 || chemistry > 80 || biology > 75 || english > 70){
        console.log("You are  eligible for admission in medical field");
        }
        else{
            console.log("You are not eligible for admission in any field");
            }

const firstname = ""
const lastname = "Upadhyay"
const fullname = firstname || lastname;
console.log(`Name - ${fullname}`);

console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false

let a = 12;
let b;

console.log(a+ (b || 0));

//what will be the output of below AND Operation
console.log(3 && 2 && 1);
console.log("" && 0 && 2);
console.log("undefined" || "null" || "");



//what will be the output of below OR Operation
console.log(3 || 2 || 1);
console.log("" || 0 || 2)
console.log("" || 0 || undefined)
console.log("" || "null" || 2)

