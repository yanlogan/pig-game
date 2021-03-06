'use strict';

const players = document.querySelectorAll('.player');
const playerScores = document.querySelectorAll('.score');
const playerScoresCurrent = document.querySelectorAll('.current-score');
const diceImg = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let activePlayer = 0;
const scores = [0, 0];
let currentScore = 0;

const showActivePlayer = () => {
  for (let i = 0; i < players.length; i++) {
    players[i].classList.remove('player--active');
  }
  players[activePlayer].classList.add('player--active');
};

const updateCurrentScore = () => {
  playerScoresCurrent[activePlayer].textContent = currentScore;
};

const updateScore = () => {
  playerScores[activePlayer].textContent = scores[activePlayer];
};

const switchPlayer = () => {
  activePlayer = activePlayer === 0 ? 1 : 0;
};

const resetGame = () => {
  for (let i = 0; i < players.length; i++) {
    playerScores[i].textContent = 0;
    playerScoresCurrent[i].textContent = 0;
  }
  diceImg.classList.add('hidden');
  btnRoll.disabled = false;
  btnHold.disabled = false;
  players[activePlayer].classList.remove('player--winner');
  for (let i = 0; i < scores.length; i++) scores[i] = 0;
  currentScore = 0;
  activePlayer = 0;
  showActivePlayer();
};

resetGame();

btnNew.addEventListener('click', resetGame);

btnRoll.addEventListener('click', () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  if (diceImg.classList.contains('hidden')) diceImg.classList.remove('hidden');
  diceImg.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    updateCurrentScore();
  } else {
    currentScore = 0;
    updateCurrentScore();
    switchPlayer();
    showActivePlayer();
  }
});

btnHold.addEventListener('click', () => {
  scores[activePlayer] += currentScore;
  if (scores[activePlayer] < 100) {
    currentScore = 0;
    updateCurrentScore();
    updateScore();
    switchPlayer();
    showActivePlayer();
  } else {
    players[activePlayer].classList.remove('player--active');
    players[activePlayer].classList.add('player--winner');
    btnRoll.disabled = true;
    btnHold.disabled = true;
  }
});
