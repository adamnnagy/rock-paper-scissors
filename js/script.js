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

const finalScore = 3;

const isGameOver = (p1, p2) => {
  return !(p1.score < finalScore && p2.score < finalScore);
};

const playRound = () => {
  if (!isGameOver(p1, computer)) {
    evalRound(p1, computer);
    console.log(
      `${p1.name}: ${p1.hand}`,
      `${computer.name}: ${computer.hand}`,
      `score: ${p1.score}:${computer.score}`
    );
    p1.clearHand();
    computer.clearHand();
  } else {
    console.log("game over");
  }
};

const computer = new AIPlayer("computer");
const p1 = new HumanPlayer();

class Game {
  constructor(finalScore) {
    this.finalScore = finalScore;
  }
}

myGame = new Game(finalScore);

options = document.querySelector(".options");

options.addEventListener("click", (e) => {
  p1.hand = e.target.attributes.type.value.toLowerCase();
  computer.hand = computer.randomHand();
  playRound();
});
