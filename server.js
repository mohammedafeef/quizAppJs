//selecting the elements form the dom
let quizQuestion = document.querySelector(".quizQuestion span");
let quizAnswers = document.querySelectorAll(".quizAnswers label");
let quizSubmitionButton = document.querySelector(".quizAnswers button");
let quizgameOverSection = document.querySelector(".gameOver");
let quizGameSection = document.querySelector(".game");
let quizPoint = document.querySelector(".correct")
let quizLossPoint = documet.querySelector(".wrong");
//question for the quiz 
const questions = [
    {
        qus:"Most wealthiest person in the woorld ?",
        ans1:"Bill gates",
        ans2:"Elon musk",
        ans3:"jef besos",
        ans4:"sundhar biche",
        ans:"ans2"
    },
    {
        qus:"who is invented c++ ?",
        ans1:"Bijan strone strump",
        ans2:"Charles babbage",
        ans3:"Brendan eich",
        ans4:"Rasmus lerdorf",
        ans:"ans1"
    },
    {
        qus:"who is the first programmer ?",
        ans1:"steve jobs",
        ans2:"lari page",
        ans3:"john wick",
        ans4:"Ada lovelace",
        ans:"ans4"
    }
];
//private global variables for the game
let currentQusIndex = points = 0;
//essetial methods for the game
//for showing the next question
const nextQustion = () =>{
    let currentQus = questions[currentQusIndex];
    quizQuestion.innerHTML = currentQus.qus ;
    quizAnswers.forEach((answer) => {
        answer.innerHtML = currentQus[answer.value];
    })
    currentQusIndex == questions.length - 1 ?quizSubmitionButton.innerHTML = "submit" : null ;
    

    
}
//for ending the game
const gameOver = () =>{
    quizPoint.innerHTML = point;
    quizLossPoint.innerHTML = questions.length - 1 - point ;
    quizGameSection.style.display = "none";
    quizgameOverSection.style.transform = "translateX(0%)";
    currentQusIndex = points = 0;

}
//for validting the answer which is the user selected
const answerValidation = (userAnswer) =>{
    let userSelectedAns = userAnswer.value;
    let correctAns = questions[currentQusIndex].ans;
    if ( correctAns == userSelectedAns){
        point++;
    }
    if (!(questions.length() > currentQusIndex)){
        currentQusIndex++;
        nextQustion();
    }else{
        gameOver()
    }
}
//for listing to the click event and find the selected option
const answerSubmition = () =>{
    if (questions.length() > currentQusIndex){
        quizAnswers.forEach((answer)=>{
            if (answer.checked == true){
                answerValidation(answer);
                break;
            }
        })
    }
}