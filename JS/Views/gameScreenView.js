import View from "./View.js";

class GameScreenView extends View {
  _parentElement = document.querySelector(".game-screen");

  //Temporary Toggle function finsihed Screen will be rendered on new game

  countdownTimer() {
    let i = 3;

    const updateTimer = function () {
      if (i == 1) {
        document.getElementById("message").textContent = "GO!";
        i = "GO!";
        return;
      }
      if (i == 3 || i == 2) {
        i--;
        document.getElementById("message").textContent = i;
        console.log(i);
      }
      if (i == "GO!") {
        document.getElementById("message").textContent = "";
        clearInterval(timer);
      }
    };
    const timer = setInterval(updateTimer, 1000);
  }

  timerRunDown() {
    const timer = setInterval(() => {
      this._parentElement.querySelector(".timer").textContent =
        this._parentElement.querySelector(".timer").textContent.slice(0, -1);

      if (this._parentElement.querySelector(".timer").textContent.length == 0) {
        clearInterval(timer);
      }
    }, 500);
  }
}
export default new GameScreenView();
