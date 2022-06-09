"use strict";

import { HumanPlayerInterface } from "./HumanPlayerInterface.js";
import { ComputerInterface } from "./ComputerInterface.js";
import { AIPlayer } from "./AIPlayer.js";
import { HumanPlayer } from "./HumanPlayer.js";

class Game {
	constructor(finalScore) {
		this.scoreBoard = document.querySelector("#score-board");
		const startGameButton = document.querySelector(".intro button");
		this.introScreen = document.querySelector(".intro");

		startGameButton.addEventListener("click", () => {
			this.startGame();
		});

		this.player = null;
		this.computer = null;

		this.finalScore = finalScore;
		this.roundCount = null;
		this.controlsCreated = false;
	}
	startGame() {
		this.clearResult();
		this.roundCount = 0;
		this.createPlayers("You", "HAL 9000");
		this.showPlayers();
		this.hideIntroScreen();
		if (!this.controlsCreated) {
			this.createControls();
			this.initPlayerControls();
		} else {
			this.showPlayers();
		}
		this.computerInterface.clearChoice();
		this.controlsCreated = true;
	}

	mainGame = () => {
		this.computerInterface.clearChoice();
		this.hideFinalResult();
		this.startRound();

		this.computerInterface.displayChoice(this.computer.hand);
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
		// this.clearResult();
		this.displayIntroScreen();
		this.hidePlayers();
		this.computerInterface.clearScore();
		this.playerUserInterface.clearScore();
		this.displayFinalResult();
		this.restartButton();
	};
	restartButton = () => {
		document.querySelector(".start-button").innerText = "Restart?";
	};
	resultText(p1, p2) {
		return `${this.roundCount}. ${p1.name}: ${p1.hand} ${p2.name}: ${p2.hand} score: ${p1.score}:${p2.score}`;
	}
	gameOverText() {
		return `${this.getWinner()} won!`;
	}
	hideFinalResult() {
		const finalResultHeading = document.querySelector("#final-result");
		finalResultHeading.style.display = "none";
	}
	displayFinalResult() {
		const finalResultHeading = document.querySelector("#final-result");

		finalResultHeading.innerText = this.gameOverText();
		finalResultHeading.style.display = "block";
	}
	displayResult(result) {
		this.playerUserInterface.displayScore(this.player.score);
		this.computerInterface.displayScore(this.computer.score);
		this.scoreBoard.innerHTML += `<p>${result}</p>`;
	}
	clearResult = () => {
		this.scoreBoard.innerHTML = `<p></p>`;
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
	initPlayerControls() {
		this.controls = this.playerUserInterface.container || null;

		this.controls.addEventListener("click", (e) => {
			this.player.hand = e.target.attributes.type.value.toLowerCase();
			this.computer.hand = this.computer.randomHand();

			this.mainGame();
		});
	}
	createPlayers(namePlayer, nameComputer) {
		this.player = new HumanPlayer(namePlayer);
		this.computer = new AIPlayer(nameComputer);
	}
	createControls() {
		this.playerUserInterface = new HumanPlayerInterface(this.player.name);
		this.computerInterface = new ComputerInterface(this.computer.name);
	}
	showPlayers() {
		document.querySelector(".players").style.display = "flex";
	}
	hidePlayers() {
		document.querySelector(".players").style.display = "none";
	}
	displayIntroScreen() {
		this.introScreen.style.display = "flex";
	}
	hideIntroScreen() {
		this.introScreen.style.display = "none";
	}
}

const finalScore = 3;

const myGame = new Game(finalScore);
