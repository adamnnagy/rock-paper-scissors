"use strict";

class Game {
  constructor(finalScore) {
    this.finalScore = finalScore;
    this.scoreBoard = document.querySelector("#score-board");
    this.roundCount = null;

    this.player = null;
    this.computer = null;

    this.introScreen = document.querySelector(".intro");
    this.controls = document.querySelector(".controls");

    const startGameButton = document.querySelector(".intro button");

    this.nameInput = document.querySelector("#name");
    startGameButton.addEventListener("click", (e) => {
      this.startGame();
    });

    this.controls.addEventListener("click", (e) => {
      this.player.hand = e.target.attributes.type.value.toLowerCase();
      this.computer.hand = this.computer.randomHand();
      this.playRound();
    });
  }
  startGame() {
    this.roundCount = 0;
    this.createPlayers(this.nameInput.value || "You");
    this.hideIntroScreen();
  }
  playRound() {
    if (!this.isGameOver(this.player, this.computer)) {
      this.roundCount++;
      this.evalRound(this.player, this.computer);
      this.displayResult(this.resultText(this.player, this.computer));
      this.player.clearHand();
      this.computer.clearHand();
    } else {
      this.displayResult(this.gameOverText());
      this.disableControls();
      this.displayIntroScreen();
    }
  }
  resultText(p1, p2) {
    return `${this.roundCount}. ${p1.name}: ${p1.hand} ${p2.name}: ${p2.hand} score: ${p1.score}:${p2.score}`;
  }
  gameOverText() {
    return `Final result: ${this.getWinner()} won!`;
  }
  displayResult(result) {
    this.scoreBoard.innerHTML += `<p>${result}</p>`;
  }
  getWinner() {
    if (this.player.score > this.computer.score) {
      return this.player.name;
    } else return this.computer.name;
  }
  evalRound = (P1, P2) => {
    if (P1.hand === P2.hand) return;
    if (P1.hand === "rock" && P2.hand === "scissors") {
      P1.addScore();
    } else if (P1.hand === "paper" && P2.hand === "rock") {
      P1.addScore();
    } else if (P1.hand === "scissors" && P2.hand === "paper") {
      P1.addScore();
    } else {
      P2.addScore();
    }
  };
  isGameOver = (p1, p2) => {
    return !(p1.score < finalScore && p2.score < finalScore);
  };
  createPlayers(namePlayer) {
    this.player = new HumanPlayer(namePlayer);
    this.computer = new AIPlayer("HAL 9000");
  }
  disableControls() {
    this.controls.style.display = "none";
  }
  displayIntroScreen() {
    this.introScreen.style.display = "block";
  }
  hideIntroScreen() {
    this.introScreen.style.display = "none";
  }
}

const finalScore = 3;

const myGame = new Game(finalScore);
