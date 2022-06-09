class PlayerInterface {
	constructor(name) {
		this.displayName = name;
		this.name = name.toLowerCase().replace(" ", "-");

		this.container = null;
	}
	get container() {
		return this._container;
	}
	set container(c) {
		this._container = c;
	}
	createControlBox = () => {
		const controls = document.createElement("div");
		controls.setAttribute("class", "controls");
		return controls;
	};
	_createPlayerContainer() {
		const container = document.createElement("div");
		container.setAttribute("id", `${this.name}-container`);
		container.setAttribute("class", `player`);
		this.container = container;
	}
	_addContainerToGame() {
		const gameContainer = document.querySelector(".players");
		gameContainer.appendChild(this.container);
	}
	_addElementToPlayerContainer(el) {
		this.container.appendChild(el);
	}
	_scoreTally() {
		const tally = document.createElement("div");
		tally.setAttribute("class", `score`);
		tally.setAttribute("id", `${this.name}-score`);
		tally.innerText = "∅";
		return tally;
	}

	_nameTag() {
		const nameTag = document.createElement("h1");
		nameTag.innerText = this.displayName;
		return nameTag;
	}
	displayScore(score) {
		const tally = document.querySelector(`#${this.name}-score`);
		tally.innerText = score ? `${"X ".repeat(score)}` : "∅";
	}
	clearScore() {
		const tally = document.querySelector(`#${this.name}-score`);
		tally.innerText = ``;
	}
	initializeUI() {}
}

export { PlayerInterface };
