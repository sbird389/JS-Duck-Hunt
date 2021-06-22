import View from "./View.js";

class MessageBoxView extends View {
  _parentElement = document.querySelector(".game-screen__message-box");

  // Displays three second countdown timer
  roundStartTimer() {
    this._parentElement.classList.remove("u-hidden");
    let i = 0;
    const displayOutput = function () {
      const parentElement = document.querySelector(".game-screen__message-box");
      const arr = [3, 2, 1, "GO!"];
      if (!arr[i]) {
        clearInterval(intervalTimer);
        parentElement.classList.add("u-hidden");
      }
      parentElement.textContent = arr[i];
      i++;
    };
    const intervalTimer = setInterval(() => {
      displayOutput();
    }, 1000);
  }

  renderOutofAmmo() {
    this._parentElement.classList.remove("u-hidden");
    this._parentElement.textContent = "OUT OF AMMO!!";
    setTimeout(() => {
      document
        .querySelector(".game-screen__message-box")
        .classList.add("u-hidden");
    }, 500);
  }
}

export default new MessageBoxView();
