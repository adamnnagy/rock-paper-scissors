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
