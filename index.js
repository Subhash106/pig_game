"use strict";

let player = 1;
const dice = document.querySelector(".dice");
const currentScore1 = document.querySelector(".currentScore-1");
const currentScore2 = document.querySelector(".currentScore-2");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");

document.querySelector(".roll-dice").addEventListener("click", function () {
  const score = Math.ceil(Math.random() * 6);
  dice.textContent = score;

  if (score === 1) {
    const audio = new Audio("negative_beeps-6008.mp3");
    audio.play();

    if (player === 1) {
      player = 2;
    } else {
      player = 1;
    }

    if (player === 1) {
      left.style.backgroundColor = "#faa2c1";
      right.style.backgroundColor = "#e599f7";
      player1.classList.add("active-player");
      player2.classList.remove("active-player");
    } else {
      left.style.backgroundColor = "#e599f7";
      right.style.backgroundColor = "#faa2c1";
      player2.classList.add("active-player");
      player1.classList.remove("active-player");
    }
  } else {
    if (player === 1) {
      currentScore1.textContent = Number(currentScore1.textContent) + score;
    } else {
      currentScore2.textContent = Number(currentScore2.textContent) + score;
    }
  }
});
