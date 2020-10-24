var timerCount = 120;
var timerEl = document.querySelector("#timer");
var questionsPointer = 0;
var question = document.querySelector("#question");
var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");
var startBtn = document.querySelector("#startBtn");

timerEl.textContent = timerCount;
startBtn.addEventListener("click", function () {
    startBtn.style.visibility = "false";
    var timer = window.setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;

    if (timerCount === 0) {
        clearInterval(timer);
    }}, 1000);
    askQuestions();
});

var questions = [
{
    q:
        "Kobe Bryant also known as the greatest player that ever walked the planet played for",
    choices: [
        "Los Angeles Clippers",
        "Boston Celtics",
        "Los Angeles Lakers",
        "Chicago Bulls"
    ],
    a: "C"
},
{
    q: 
        "From 2000 - 2020, who won the most NBA championships",
    choices: [
        "Golden State Warriors",
        "San Antonio Spurs",
        "Miami Heat",
        "Los Angeles Lakers"
    ],
    a: "D"
},
{
    q: 
        "Who won a NBA Championship during a pandemic",
    choices: [
        "Miami Heat",
        "Los Angeles Lakers",
        "Los Angeles Clippers",
        "Toronto Raptors"
    ],
        a: "B"
},
{
    q: "Whoever made this quiz favorite NBA team must be",
    choices: [
        "Los Angeles Lakers",
        "Los Angeles Clippers",
        "Portland Trailblazers",
        "Miami Heat"
    ],
    a: "A"
}
];

function askQuestions() {
    if (questionsPointer === questions.length) {
    clearInterval(timer);
    alert("You finished!");
    return;
}
    question.textContent = questions[questionsPointer].q;
    optionA.textContent = questions[questionsPointer].choices[0];
    optionB.textContent = questions[questionsPointer].choices[1];
    optionC.textContent = questions[questionsPointer].choices[2];
    optionD.textContent = questions[questionsPointer].choices[3];
}

optionA.addEventListener("click", function () {
    if (optionA.getAttribute("data-answer") === questions[questionsPointer].a) {
        alert("Correct!");
        questionsPointer++;
        askQuestions();
}    else {
    alert("Wrong!");
    timerCount -= 10;
}
});
optionB.addEventListener("click", function () {
    if (optionB.getAttribute("data-answer") === questions[questionsPointer].a) {
        alert("Correct!");
        questionsPointer++;
        askQuestions();
}   else {
        alert("Wrong!");
        timerCount -= 10;
}
});
optionC.addEventListener("click", function () {
    if (optionC.getAttribute("data-answer") === questions[questionsPointer].a) {
        alert("Correct!");
        questionsPointer++;
        askQuestions();
}   else {
        alert("Wrong!");
        timerCount -= 10;
}
optionD.addEventListener("click", function () {
    if (optionD.getAttribute("data-answer") === questions[questionsPointer].a) {
        alert("Correct!");
        questionsPointer++;
        askQuestions();
}   else {
        alert("Wrong!");
        timerCount -= 10;
}
});
});
