"use strict";

let player = 1;
const switchAudio = new Audio("negative_beeps-6008.mp3");
const oneBeep = new Audio("one_beep-99630.mp3");
const dice = document.querySelector(".dice");
const score1Node = document.querySelector(".score-1");
const score2Node = document.querySelector(".score-2");
const currentScore1 = document.querySelector(".currentScore-1");
const currentScore2 = document.querySelector(".currentScore-2");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");

const activatePlayer = playerNumber => {
  if (playerNumber === 2) {
    left.style.backgroundColor = "#e599f7";
    right.style.backgroundColor = "#faa2c1";
    player1.classList.remove("active-player");
    player2.classList.add("active-player");
  } else {
    right.style.backgroundColor = "#e599f7";
    left.style.backgroundColor = "#faa2c1";
    player2.classList.remove("active-player");
    player1.classList.add("active-player");
  }
};

document.querySelector(".roll-dice").addEventListener("click", function () {
  oneBeep.play();
  const score = Math.ceil(Math.random() * 6);
  dice.textContent = score;

  if (score === 1) {
    switchAudio.play();

    if (player === 1) {
      player = 2;
      activatePlayer(2);
      currentScore1.textContent = 0;
    } else {
      player = 1;
      activatePlayer(1);
      currentScore2.textContent = 0;
    }
  } else {
    if (player === 1) {
      currentScore1.textContent = Number(currentScore1.textContent) + score;
    } else {
      currentScore2.textContent = Number(currentScore2.textContent) + score;
    }
  }
});

document.querySelector(".hold").addEventListener("click", function () {
  if (player === 1) {
    score1Node.textContent =
      Number(score1Node.textContent) + Number(currentScore1.textContent);

    if (Number(score1Node.textContent) >= 100) {
      // user 1 wins
      const burst = new mojs.Burst({
        parent: player1,
        count: 30
      });

      burst.replay();
    } else {
      switchAudio.play();
      player = 2;
      activatePlayer(2);
      currentScore1.textContent = 0;
    }
  } else {
    score2Node.textContent =
      Number(score2Node.textContent) + Number(currentScore2.textContent);

    if (Number(score2Node.textContent) >= 100) {
      // user 2 wins
      const burst = new mojs.Burst({
        parent: player2,
        count: 30
      });

      burst.replay();
    } else {
      switchAudio.play();
      player = 1;
      activatePlayer(1);
      currentScore2.textContent = 0;
    }
  }
});
