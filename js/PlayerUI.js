class PlayerUI {
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
  _createPlayerContainer() {
    const container = document.createElement("div");
    container.setAttribute("id", `${this.name}-container`);
    this.container = container;
  }
  _addContainerToGame(cont) {
    const gameContainer = document.querySelector(".players");
    gameContainer.appendChild(this.container);
  }
  _addElementToPlayerContainer(el) {
    this.container.appendChild(el);
  }
  _scoreTally() {
    const tally = document.createElement("div");
    tally.setAttribute("id", `${this.name}-score`);
    return tally;
  }
  _nameTag() {
    const nameTag = document.createElement("h1");
    nameTag.innerText = this.displayName;
    return nameTag;
  }
  displayScore(score) {
    const tally = document.querySelector(`#${this.name}-score`);
    tally.innerText = `${"* ".repeat(score)}`;
  }
  initializeUI() {}
}
