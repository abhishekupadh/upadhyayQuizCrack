const questions = [
{
question: "which is largest  river?",
answers: [
{text: "ganga", correct: true},
{text: "satluj", correct: false},
{text: "yamuna", correct: false},
{text: "saraswati", correct: false},
]
},

{
question: "which is not the memory type?",
answers: [
	{text: "sram", correct: false},
	{text: "dram", correct: false},
	{text: "harddisk", correct: false},
	{text: "adc", correct: true},
]
},
{
question: "who is genius among following?",
answers: [
	{text: "A. Upadhyay", correct: true},
	{text: "A. Einstein", correct: false},
	{text: "newton", correct: false},
	{text: "faraday", correct: false},
]
},
{
question: "Which institution developed India's first Farmland price index ?",
answers: [
	{text: "IIT Madras", correct: false},
	{text: "IIM Ahmadabad", correct: true},
	{text: "IIM Bengaluru", correct: false},
	{text: "IISC Bengaluru", correct: false},
]
},
{
question: "Panna Tiger Reserve is located in which state/UT?",
answers: [
	{text: "Madhyay Pradesh", correct: true},
	{text: "Maharashtra", correct: false},
	{text: "Gujarat", correct: false},
	{text: "Rajasthan", correct: false},
]
},
{
question: "Which company recently announced to launch AMBER alerts to find missing children?",
answers: [
	{text: "Microsoft", correct: false},
	{text: "Google", correct: false},
	{text: "Meta", correct: true},
	{text: "Apple", correct: false},
]
},
{
question: "India first liquid-mirror telescope has been commissioned in which state/UT?",
answers: [
	{text: "Sikkim", correct: false},
	{text: "Jammu and Kashmir", correct: false},
	{text: "Uttarakhand", correct: true},
	{text: "Himachal Pradesh", correct: false},
]
},
{
question: "is it going to happen?",
answers: [
	{text: "ab ki baar 400 paar", correct: true},
	{text: "less than 400", correct: false},
	{text: "congress", correct: false},
	{text: "mili juli government", correct: false},
	]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML ="Next";
showQuestion();
}

function showQuestion(){
resetState();
let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex+1;
questionElement.innerHTML = questionNo + ". "+currentQuestion.question;

currentQuestion.answers.forEach(answer => {
const button = document.createElement("button");
button.innerHTML = answer.text;
button.classList.add("btn");
answerButtons.appendChild(button);  
if(answer.correct){
button.dataset.correct = answer.correct;
}
button.addEventListener("click", selectAnswer);
});
}


function resetState(){
nextButton.style.display = "none";
while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
}
}

function selectAnswer(e){
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if(isCorrect){
selectedBtn.classList.add("correct");
score++;
} else {
selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button => {
if(button.dataset.correct === "true"){
button.classList.add("correct");
}
button.disabled = true;
});
nextButton.style.display = "block";
}

function showScore(){
resetState();
questionElement.innerHTML = `You scored ${score} out of ${questions.
length}!`;
nextButton.innerHTML = "Play Again";
nextButton.style.display = "block";
}


function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
showQuestion();
}else{
showScore();
}
}


nextButton.addEventListener("click", ()=>{
if(currentQuestionIndex < questions.length){
handleNextButton();
}else{
startQuiz();
}
});


startQuiz();