class HumanPlayer extends Player {
  constructor(name = "Rando") {
    super(name);
    // this._addControls();
    // this._changeName();
  }
  _addControls() {
    document.querySelector(".controls").style.display = "flex";
  }
  _changeName() {
    const nameHeading = document.querySelector(".name");
    nameHeading.innerHTML = this.name || "Rando";
  }
}
