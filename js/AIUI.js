class AIUI extends PlayerUI {
  constructor(name) {
    super(name);
    this.initializeUI();
  }
  displayChoice(choice) {
    const choiceBox = document.querySelector(`#${this.name}-choice-box`);
    choiceBox.innerHTML = choice;
  }
  clearChoice() {
    const choiceBox = document.querySelector(`#${this.name}-choice-box`);
    choiceBox.innerHTML = '<div class="load"></div>';

  }
  _choiceBox() {
    const choiceBox = document.createElement("div");
    choiceBox.setAttribute("id", `${this.name}-choice-box`);
    choiceBox.setAttribute("class", `choice-box`);
    choiceBox.innerHTML = '<div class="load"></div>';

    return choiceBox;
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
