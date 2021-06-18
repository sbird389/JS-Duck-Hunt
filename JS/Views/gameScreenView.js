class GameScreenView {
  _parentElement = document.querySelector(".game-screen");

  //Temporary Toggle function finsihed Screen will be rendered on new game
  toggleHidden() {
    this._parentElement.classList.toggle("u-hidden");
  }

  countdownTimer() {
    let i = 3;
    const updateTimer = function () {
      if (i == 1) {
        document.getElementById("message").textContent = "GO!";
        clearInterval(timer);
        return;
      }
      i--;
      document.getElementById("message").textContent = i;
      console.log(i);
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
    }, 200);
  }
}
export default new GameScreenView();
