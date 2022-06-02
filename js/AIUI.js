class AIUI extends PlayerUI {
  constructor(name) {
    super(name);
    this.initializeUI();
  }
  displayChoice(choice) {
    const choiceBox = document.querySelector(`.${this.name}-choicebox`);
    choiceBox.innerText = choice;
  }
  _choiceBox() {
      const choiceBox = document.createElement('h3');
      choiceBox.setAttribute('class', `${this.name}-choicebox`);
      return choiceBox
  }
  initializeUI() {
    this._createPlayerContainer();

    this._addContainerToGame(this.container);
    this._addElementToPlayerContainer(this._nameTag());
    this._addElementToPlayerContainer(this._choiceBox());
    this._addElementToPlayerContainer(this._scoreTally());
  }
}
