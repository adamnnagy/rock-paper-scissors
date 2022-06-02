class AIUI extends PlayerUI {
  constructor(name) {
    super(name);
    this.initializeUI();
  }
  displayChoice(choice) {
    const choiceBox = document.querySelector(`.${this.name}-choicebox`);
    choiceBox.innerText = choice;
  }
  clearChoice() {
    const choiceBox = document.querySelector(`.${this.name}-choicebox`);
    choiceBox.innerText = '';
  }
  _choiceBox() {
      const choiceBox = document.createElement('h3');
      choiceBox.setAttribute('class', `${this.name}-choicebox`);
      return choiceBox
  }
  initializeUI() {
    this._createPlayerContainer();

    const controlsBox = this.createControlBox();

    controlsBox.appendChild(this._choiceBox());



    this._addContainerToGame(this.container);
    this._addElementToPlayerContainer(this._nameTag());
    this._addElementToPlayerContainer(controlsBox);
    this._addElementToPlayerContainer(this._scoreTally());
  }
}
