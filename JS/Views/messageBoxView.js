import View from "./View.js";

class MessageBoxView extends View {
  _parentElement = document.getElementById("messageBox");

  addbuttonClickHandler(handler) {
    this._parentElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn")) {
        const btn = e.target.closest(".btn");
        handler(btn);
      }
    });
  }

  //Displays three second countdown timer
  roundStartTimer() {
    this._parentElement.classList.remove("u-hidden");
    //document.getElementById("message").classList.remove("u-hidden");

    let i = 0;
    const displayOutput = function () {
      const parentElement = document.getElementById("message");
      const arr = [3, 2, 1, "GO!"];
      if (!arr[i]) {
        clearInterval(intervalTimer);
        document.getElementById("messageBox").classList.add("u-hidden");
      }
      parentElement.innerText = arr[i];
      i++;
    };
    const intervalTimer = setInterval(() => {
      displayOutput();
    }, 1000);
  }

  renderOutofAmmo() {
    //this.clearTextContent();
    this._parentElement.classList.remove("u-hidden");
    document.getElementById("message").innerText = "OUT OF AMMO!!";
    setTimeout(() => {
      document
        .querySelector(".game-screen__message-box")
        .classList.add("u-hidden");
    }, 500);
  }

  showGameOver() {
    console.log(this._parentElement);
    document.getElementById("messageBox").classList.remove("u-hidden");
    document.getElementById("GAMEOVER").classList.remove("u-hidden");
  }

  //Should be combined as toggle but wasnt working??
  hideGameOver() {
    document.getElementById("GAMEOVER").classList.add("u-hidden");
    this._parentElement.classList.add("u-hidden");
  }

  renderNextRound(roundNumber) {
    document.getElementById("message").innerText = `Round ${roundNumber}`;
    this._parentElement.classList.remove("u-hidden");
    setTimeout(() => {
      document
        .querySelector(".game-screen__message-box")
        .classList.add("u-hidden");
    }, 500);
  }

  //Refactor Display Message functions into one function

  renderMessage(message, timeDisplayed = 500) {
    document.getElementById("message").innerText = `${message}`;
    this._parentElement.classList.remove("u-hidden");
    setTimeout(() => {
      document
        .querySelector(".game-screen__message-box")
        .classList.add("u-hidden");
    }, timeDisplayed);
  }
}

export default new MessageBoxView();
