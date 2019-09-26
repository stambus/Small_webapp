var fact = ['some facts 1', 'some facts 2', 'some facts 3', 'some facts 4', ' some facts 6 ', 'facts 7', 'facts 8', 'fact 9', 'fact 10'];
var myth = ['myth1', 'myht2', 'myht3', 'myht4', 'myht5', 'myth6', 'myth 7', 'myth 8', 'myth 9', 'myth 10'];
var unansweredQuestions = myth.concat(fact);
var answer = '';
var question = '';
var gcount = 5;
var points = 0;
let gameOver = false;
var attempts = 0;
let startWasInitiated = false;

function randomGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// function to generate random but not same numbers
function getRandomQuestion() {
    var randInt = randomGenerator(0, unansweredQuestions.length - 1);
    question = unansweredQuestions[randInt];
    unansweredQuestions = unansweredQuestions.filter(x => x !== question); // unanswered question array, deletes the  answered question

    const questionElement = document.getElementById("p1");
    questionElement.innerHTML = question;
}
// starts the game
function start() {
    if (!startWasInitiated) {
        startWasInitiated = true
        getRandomQuestion();
    }
    return
}

// checks if answer is correct
function isAnswerCorrect() {
    if ((fact.includes(question) && answer === 'fact') || (myth.includes(question) && answer === 'myth')) {
        points++;
        alert("CORRECT ANSWER. You have " + points + "points!!");
    } else {
        attempts++;
        gcount--;
        alert("Answer is not correct. You have " + gcount + " guesses left");
    }
}

//function to check wethear game is complete or not
function isGameOver() {
    if (attempts === 5 || points === 10) {

        document.getElementById("p1").innerHTML = "Game is over. Thank You for participating"
        return true;
    }
}

//When pressed checks if question is a fact and if it is, addes 1 pts and if it's not gcount-1
// after all the if() chekcs, it will produce new random question. 

function factB() {
    if (isGameOver() === true) {
        return;
    } else {
        answer = 'fact';
        isAnswerCorrect();
        getRandomQuestion();
    }
}


//When pressed checks if question is a myth and if it is, addes 1 pts and if it's not gcount-1
//after all the if() chekcs, it will check if points do not exceed 10 and gcount<0
//then it will produce new random question. 

function mythB() {
    if (isGameOver() === true) {
        return;
    } else {
        answer = 'myth';
        isAnswerCorrect();
        getRandomQuestion();
    }
}