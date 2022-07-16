'use strict';

const players = document.querySelectorAll('.player');
const playerScores = document.querySelectorAll('.score');
const playerScoresCurrent = document.querySelectorAll('.current-score');
const dice = document.querySelector('.dice');

const resetGame = () => {
  for (let i = 0; i < players.length; i++) {
    playerScores[i].textContent = 0;
    playerScoresCurrent[i].textContent = 0;
  }
  dice.classList.add('hidden');
  if (!players[0].classList.contains('player--active'))
    players[0].classList.add('player--active');
};

resetGame();
