import View from "./View.js";

class GamesScreenView extends View {
  _parentElement = document.querySelector(".game-screen");

  addClickHandler(handler) {
    this._parentElement.addEventListener("click", handler);
  }
  removeClickHandler(handler) {
    this._parentElement.removeEventListener("click", handler);
  }

  addShotSoundEffect() {
    const sound = document.querySelector(".gun-shot");
    sound.play();
  }
}

export default new GamesScreenView();
