var timerCount = 120
var timerEl = document.querySelector("#timer")
var questionsPointer = 0
var question = document.querySelector("#question")
var optionA = document.querySelector("#optionA")
var optionB = document.querySelector("#optionB")
var optionC = document.querySelector("#optionC")
var optionD= document.querySelector("optionD")
var questions = [ 
    {
        q: "Kobe Bryant also known as the greatest player that ever walked the planet played for",
        choices: ["Los Angeles Clippers", "Boston Celtics", " Los Angeles Lakers", "Chicago Bulls"],
        answer: "C"
    },   
    {
        q: "From 2000 - 2020, who won the most NBA championships",
        pick: ["Golden State Warriors", "San Antonio Spurs", "Miami Heat", "Los Angeles Lakers"],
        answer: "D",
    },
    {
        q: "Who won a NBA Championship during a pandemic",
        pick: ["Miami Heat", "Los Angeles Lakers", "Los Angeles Clippers", "Toronto Raptors"],
        answer: "B"
    },
    {
        q: "Whoever made this quiz favorite NBA team must be",
        pick: ["Los Angeles Lakers", "Los Angeles Clippers", "Portland Trailblazers", "Miami Heat"],
        answer: "A"
    }
];

timerEl.textContent = timerCount

var timer = window.setInterval(function () {
timerCount--;
timerEl.textContent = timerCount

if (timerCount === 0) {
    clearInterval(timer)
}
}, 1000)

