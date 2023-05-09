"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉Correct Number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.again').addEventListener("click",function (){
  
})

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // If there is not an input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️No number!";
  }
  // When a player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // If the guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector('.message').textContent = "💥You lost the game!";
      document.querySelector('.score').textContent = 0;
    }
  }
  // If the guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
    document.querySelector(".message").textContent = "📉Too low!";
    score--;
    document.querySelector(".score").textContent = score;
    } else {
      document.querySelector('.message').textContent = "💥You lost the game!";
      document.querySelector('.score').textContent = 0;
  } }
  else {
    document.querySelector(".message").textContent = "🤷‍";
  }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    });
