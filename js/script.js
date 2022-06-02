"use strict";

class Player {
  constructor(name = "P1") {
    this.name = name;
    this.hand = null;
    this.score = 0;
  }
  displayScore() {
    console.log(this.score);
  }
  set hand(h) {
    this._hand = h;
  }
  get hand() {
    return this._hand;
  }
  get score() {
    return this._score;
  }
  set score(s) {
    this._score = s;
  }
  clearHand() {
    this.hand = null;
  }
  addScore() {
    this.score++;
  }
}

class HumanPlayer extends Player {
  constructor(name) {
    super(name);
    this._addControls();
    this._changeName();
  }
  _addControls() {
    document.querySelector(".controls").style.display = 'block';
  }
  _changeName() {
    const nameHeading = document.querySelector(".name");
    nameHeading.innerHTML = this.name;
  }
}

class AIPlayer extends Player {
  constructor(name) {
    super(name);
  }
  randomHand = () => {
    const options = ["rock", "paper", "scissors"];
    const randomPick = Math.floor(Math.random() * 3);
    return options[randomPick];
  };
}

const evalRound = (P1, P2) => {
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

class Game {
  constructor(finalScore) {
    this.finalScore = finalScore;

    const introScreen = document.querySelector(".intro");
    const startGameButton = document.querySelector(".intro button");
    console.log(startGameButton);
  }
  playRound(p1, p2) {
    if (!this.isGameOver(p1, p2)) {
      this.evalRound(p1, p2);
      console.log(
        `${p1.name}: ${p1.hand}`,
        `${p2.name}: ${p2.hand}`,
        `score: ${p1.score}:${p2.score}`
      );
      p1.clearHand();
      p2.clearHand();
    } else {
      console.log("game over");
    }
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
}

const finalScore = 3;



const computer = new AIPlayer("computer");
const p1 = new HumanPlayer();
const myGame = new Game(finalScore);

const options = document.querySelector(".controls");

options.addEventListener("click", (e) => {
  p1.hand = e.target.attributes.type.value.toLowerCase();
  computer.hand = computer.randomHand();
  myGame.playRound(p1, computer);
});
