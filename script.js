'use strict';
// Logic of the game!

let score = 20;
let highscore = 0;

const createNumber = function () {
    return Math.trunc(Math.random() * 20 + 1);
}
let secretNumber = createNumber();

// Reused functions
const input = function (value) {
    return document.querySelector('.input-number').value;
}

const message = function (message) {
    document.querySelector('.guess').textContent = message;
}

const result = function (number) {
    document.querySelector('.number').textContent = number;
}

const updateHighscore = function (score) {
    document.querySelector('.highscore').textContent = score;
}

const updateScore = function (score) {
    document.querySelector('.score').textContent = score;
}

const bodyColor = function (color) {
    document.querySelector('body').style.backgroundColor = color;
}

const inputColor = function (color) {
    document.querySelector('.input-number').style.backgroundColor = color;
}

const btnColor = function (className, color) {
    document.querySelector(className).style.color = color;
}

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(input());
    if (!guess || guess > 20) {
        message("Oops! You haven't entered valid number.");
    } else if (guess === secretNumber) {
        message("Wohoo! Correct number.");
        result(secretNumber);
        if (score > highscore) {
            updateHighscore(score);
            highscore = score;
        }
        bodyColor('green');
        inputColor('green');
        btnColor('.btn1', 'green');
        btnColor('.btn2', 'green');
    } else if (guess !== secretNumber) {
        message(guess > secretNumber ? 'Too high!' : 'Too low!');
        if (score > 1) {
            score--;
            updateScore(score);
        } else {
            updateScore(0);
            message("You lost the game! Try again!");
            bodyColor('red');
            inputColor('red');
            btnColor('.btn1', 'red');
            btnColor('.btn2', 'red');
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.input-number').value = '';
    result('?');
    updateScore(20);
    score = 20;
    message("Start guessing..");
    secretNumber = createNumber();
    bodyColor('black');
    inputColor('black');
    btnColor('.btn1', 'black');
    btnColor('.btn2', 'black');
})