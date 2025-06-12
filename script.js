"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let tempHighScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// document.querySelector(".number").textContent = secretNumber;  // For testing
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess, typeof guess);
  // When no input
  if (!guess) {
    displayMessage("⛔ No Number!");
  }
  // When player wins
  else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🥳 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#FF0000";
      document.querySelector(".number").style.width = "30rem";
    }
  }
});
// Again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".number").textContent = secretNumber;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
