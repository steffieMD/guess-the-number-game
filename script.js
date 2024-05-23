'use strict';

// Random number generator
const secretNumGen = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNum;
secretNum = secretNumGen();
let score = 20;
let highscore = 0;

const setScore = () => {
  document.querySelector('.score').textContent = score;
};

const setBgColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const displayMessage = str => {
  document.querySelector('.message').textContent = str;
};

// Get User's guess, onclick check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.input-number').value);

  if (!guess) {
    displayMessage('🚫 No number!');
  } else if (guess <= 0 || guess > 20) {
    displayMessage('🚫 Input a number between 1 and 20');
  } else if (guess === secretNum) {
    document.querySelector('.number').textContent = secretNum;
    displayMessage('✅ You must be psychic! 🧙🏾‍♂️');
    // score++;
    setScore();
    setBgColor('#60b374');
    document.querySelector('.number').style.width = '200px';
    document.querySelector('.number').style.fontSize = '90px';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != secretNum) {
    if (score > 1) {
      score--;
      setScore();
      guess > secretNum
        ? displayMessage(`📈 Too high`)
        : displayMessage(`📉 Too low`);
    }
  } else {
    displayMessage('🚫 You lost! 🚫 Try again!');
    document.querySelector('.score').textContent = 0;
  }
});

// Reset Game
document.querySelector('.reset-btn').addEventListener('click', function () {
  score = 20;
  document.querySelector('.input-number').value = '';
  setScore();
  secretNum = secretNumGen();
  document.querySelector('.number').textContent = '?';

  displayMessage('Start guessing...');
  setBgColor('#222222');
  document.querySelector('.number').style.fontSize = '60px';
});
