import View from "./View.js";

class StartMenuView extends View {
  _parentElement = document.querySelector(".start-menu");

  startClickHandler(handler) {
    this._parentElement
      .querySelector(".btn")
      .addEventListener("click", function () {
        handler();
      });
  }
}

export default new StartMenuView();
