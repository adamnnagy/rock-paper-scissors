class Player {
	constructor(name) {
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

export { Player };
