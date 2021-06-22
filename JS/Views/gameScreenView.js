import View from "./View.js";

class GamesScreenView extends View {
  _parentElement = document.querySelector(".game-screen");

  addClickHandler(handler) {
    this._parentElement.addEventListener("click", handler);
  }
}

export default new GamesScreenView();
