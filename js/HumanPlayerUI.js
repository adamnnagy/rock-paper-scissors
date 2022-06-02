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

    const controls = document.createElement("div");
    controls.setAttribute("class", "controls");

    controls.appendChild(this._createButton("rock"));
    controls.appendChild(this._createButton("paper"));
    controls.appendChild(this._createButton("scissors"));
    
    this._addElementToPlayerContainer(controls);

    this._addElementToPlayerContainer(this._scoreTally());
  }
}
