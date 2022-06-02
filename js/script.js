"use strict";

class Game {
  constructor(finalScore) {
    this.finalScore = finalScore;
    this.scoreBoard = document.querySelector("#score-board");
    this.roundCount = null;

    this.player = null;
    this.computer = null;

    this.controlsCreated = false;

    this.introScreen = document.querySelector(".intro");

    const startGameButton = document.querySelector(".intro button");

    startGameButton.addEventListener("click", () => {
      this.startGame();
    });
  }
  startGame() {
    this.clearResult();
    this.roundCount = 0;
    this.createPlayers("You", "HAL 9000");
    this.hideIntroScreen();
    if (!this.controlsCreated) {
      this.createControls();
      this.initControls();
    } else {
      this.showPlayers();
    }
    this.cUI.clearChoice();
    this.controlsCreated = true;
  }
  initControls() {
    this.controls = this.pUI.container || null;

    this.controls.addEventListener("click", (e) => {
      this.player.hand = e.target.attributes.type.value.toLowerCase();
      this.computer.hand = this.computer.randomHand();

      this.mainGame();
    });
  }
  mainGame = () => {
    this.cUI.clearChoice();

    this.startRound();

    this.cUI.displayChoice(this.computer.hand);
    this.player.clearHand();
    this.computer.clearHand();
  };
  startRound() {
    this.playRound();
    if (this.isGameOver(this.player, this.computer)) {
      this.gameOver();
    }
  }
  playRound = () => {
    this.roundCount++;
    this.getPoints(this.player, this.computer);
    this.displayResult(this.resultText(this.player, this.computer));
  };
  gameOver = () => {
    this.displayResult(this.gameOverText());
    this.displayIntroScreen();
    this.hidePlayers();
    this.cUI.clearScore();
    this.pUI.clearScore();
    
  };
  resultText(p1, p2) {
    return `${this.roundCount}. ${p1.name}: ${p1.hand} ${p2.name}: ${p2.hand} score: ${p1.score}:${p2.score}`;
  }
  gameOverText() {
    return `Final result: ${this.getWinner()} won!`;
  }
  displayResult(result) {
    this.pUI.displayScore(this.player.score);
    this.cUI.displayScore(this.computer.score);
    this.scoreBoard.innerHTML = `<p>${result}</p>`;
  }
  clearResult = () => {
    this.scoreBoard.innerHTML = "";
  };
  getWinner() {
    if (this.player.score > this.computer.score) {
      return this.player.name;
    } else return this.computer.name;
  }
  getPoints = (P1, P2) => {
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
  createPlayers(namePlayer, nameComputer) {
    this.player = new HumanPlayer(namePlayer);
    this.computer = new AIPlayer(nameComputer);
  }
  createControls() {
    this.pUI = new HumanPlayerUI(this.player.name);
    this.cUI = new AIUI(this.computer.name);
  }
  showPlayers() {
    document.querySelector(".players").style.display = "flex";
  }
  hidePlayers() {
    document.querySelector(".players").style.display = "none";
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
