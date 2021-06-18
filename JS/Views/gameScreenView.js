class GameScreenView {
  _parentElement = document.querySelector(".game-screen");

  //Temporary Toggle function finsihed Screen will be rendered on new game
  toggleHidden() {
    this._parentElement.classList.toggle("u-hidden");
  }
}

export default new GameScreenView();
