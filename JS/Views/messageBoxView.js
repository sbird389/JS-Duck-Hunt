import View from "./View.js";

class MessageBoxView extends View {
  _parentElement = document.querySelector(".game-screen__message-box");

  addbuttonClickHandler(handler) {
    this._parentElement.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn");
      handler(btn);
    });
  }

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
    this._clearTextContent();
    this._parentElement.classList.remove("u-hidden");
    this._parentElement.textContent = "OUT OF AMMO!!";
    setTimeout(() => {
      document
        .querySelector(".game-screen__message-box")
        .classList.add("u-hidden");
    }, 500);
  }

  renderGameOver() {
    this._clearTextContent();
    const markup = `<div class="game-screen__message-box--newGame">
        <h2>GAME OVER !</h2>
        <p>Start a New Game?</p>
          <a href="#" id="yes" class="btn btn--clear">Yes</a>
          <a href="#" id="no" class="btn btn--clear">No</a>
      </div>`;
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    this._parentElement.classList.remove("u-hidden");
  }

  renderNextRound(roundNumber) {
    this._parentElement.textContent = `Round ${roundNumber}`;
    this._parentElement.classList.remove("u-hidden");
    setTimeout(() => {
      document
        .querySelector(".game-screen__message-box")
        .classList.add("u-hidden");
    }, 500);
  }

  //Refactor Display Message functions into one function

  renderMessage(message, timeDisplayed = 500) {
    this._parentElement.textContent = `${message}`;
    this._parentElement.classList.remove("u-hidden");
    setTimeout(() => {
      document
        .querySelector(".game-screen__message-box")
        .classList.add("u-hidden");
    }, timeDisplayed);
  }
}

export default new MessageBoxView();
