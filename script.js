'use strict';

const MAX_NUM = 20;
const MIN_NUM = 1;
let secretNumber = Math.trunc(Math.random() * MAX_NUM) + 1;
let score = MAX_NUM;
let highScore = 0;

const displayMessage = function (i_message) {
  document.querySelector('.message').textContent = i_message;
};

const applyWin = function () {
  displayMessage('🎉 Correct Number!');
  document.querySelector('.hidden-number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.getElementById('check').disabled = true;
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
};

const applyLose = function () {
  displayMessage('💥 You lost the game!');
  document.querySelector('.score').textContent = 0;
  document.querySelector('body').style.backgroundColor = 'red';
  document.getElementById('check').disabled = true;
  document.querySelector('.hidden-number').textContent = secretNumber;
};

const checkNumber = function (i_number) {
  if (i_number > MAX_NUM || i_number < MIN_NUM) {
    displayMessage('⛔️ Invalid number!');
  } else if (i_number === secretNumber) {
    applyWin();
  } else {
    if (score > 16) {
      displayMessage(i_number > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      applyLose();
    }
  }
};

document.querySelector('.btn-check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  checkNumber(guess);
});

document.querySelector('.btn-again').addEventListener('click', function () {
  score = MAX_NUM;
  secretNumber = Math.trunc(Math.random() * MAX_NUM) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = 'black';
  document.getElementById('check').disabled = false;
  document.querySelector('.hidden-number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').textContent = '';
});
