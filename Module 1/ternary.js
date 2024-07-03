//ternary yes:no
let age = 18;
let message = (age >= 18) ? "You can vote" : "You can't vote";
console.log(message); //You can vote


//ternary part 2

const totalmarks = 100

if(totalmarks >= 80){
    console.log("A");
}
else if(totalmarks >= 60){
    console.log("B");
    }
    else if(totalmarks >= 40){
        console.log("C");
        }
        else if(totalmarks >= 20){
            console.log("D");
            }
            else{
                console.log("F");
                }

const percentage = (totalmarks >= 80) ? "A" : (totalmarks >= 60) ? "B" : (totalmarks >= 40) ? "C" : "D"; //A
console.log(percentage); //A


