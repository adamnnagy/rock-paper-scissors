class Player {
    constructor(name){
        this.name = name;
        this.hand = null;
        this.score = 0;
    }
    displayScore() {
        console.log(this.score);
    }
    set hand(hand) {
        this.hand = hand;
    }
    get hand() {
        return this.hand
    }
    clearHand() {
        this.hand = null;
    }
    addScore() {
        this.score++;
    }
    get score() {
        return this.score
    }
}

