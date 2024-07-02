var readlinesync = require("readline-sync");
var score = 0;
var questionBank = [
    {
        question: "What is the capital of India?",
        options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        answer: "Delhi"
    },
    {
        question: "Who is the Prime Minister of India?",
        options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Arvind Kejriwal"],
        answer: "Narendra Modi"
    },
    {
        question: "Who is the President of India?",
        options: ["Droupadi Murmu", "Narendra Modi", "Rahul Gandhi", "Sonia Gandhi"],
        answer: "Droupadi Murmu"
    }
];

var playGame = function(questionBank) {
    for (var i = 0; i < questionBank.length; i++) {
        
        var currentQuestion = questionBank[i];
        console.log(currentQuestion.question);
        console.log("Options:");

        for (var j = 0; j < currentQuestion.options.length; j++) {
            console.log((j + 1) + ". " + currentQuestion.options[j]);
        }

        var answer = readlinesync.question("Enter your answer: ");

        if (answer.toUpperCase() === currentQuestion.answer.toUpperCase()) {
            console.log("Correct answer! You got it right!");
            score++;
        } else {
            console.log("Wrong answer! The correct answer is " + currentQuestion.answer);
        }
        console.log("Current Score: " + score);
    }
    console.log("Final Score: " + score);
};

playGame(questionBank);