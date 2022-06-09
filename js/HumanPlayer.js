import { Player } from "./Player.js";

class HumanPlayer extends Player {
	constructor(name = "Rando") {
		super(name);
	}
	_addControls() {
		document.querySelector(".controls").style.display = "flex";
	}
	_changeName() {
		const nameHeading = document.querySelector(".name");
		nameHeading.innerHTML = this.name || "Rando";
	}
}

export { HumanPlayer };
