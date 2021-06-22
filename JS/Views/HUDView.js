import View from "./View.js";

class HUDView extends View {
  _parentElement = document.querySelector(".game-screen__hud");

  removeRound() {
    console.log(
      this._parentElement
        .querySelector(".game-screen__hud--shot-imgs")
        .lastChild.remove()
    );
  }
}

export default new HUDView();
