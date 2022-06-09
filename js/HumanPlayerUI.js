import { PlayerUI } from "./PlayerUI.js";

class HumanPlayerUI extends PlayerUI {
	constructor(name) {
		super(name);
		this.initializeUI();
	}

	_createButton(type) {
		const button = document.createElement("button");
		button.setAttribute("type", type);
		button.innerText = type.slice(0, 1).toUpperCase() + type.slice(1);
		return button;
	}

	initializeUI() {
		this._createPlayerContainer();
		this._addContainerToGame(this.container);
		this._addElementToPlayerContainer(this._nameTag());

		const controlsBox = this.createControlBox();

		controlsBox.appendChild(this._createButton("rock"));
		controlsBox.appendChild(this._createButton("paper"));
		controlsBox.appendChild(this._createButton("scissors"));

		this._addElementToPlayerContainer(controlsBox);

		this._addElementToPlayerContainer(this._scoreTally());
	}
}

export { HumanPlayerUI };
