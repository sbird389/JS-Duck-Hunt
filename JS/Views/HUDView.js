import View from "./View.js";

class HUDView extends View {
  _parentElement = document.querySelector(".game-screen__hud");

  removeRound() {
    this._parentElement
      .querySelector(".game-screen__hud--shot-imgs")
      .lastChild.remove();
  }
  reloadRounds(roundsLeft = 0) {
    const markUp = `<img src="./IMAGES/favicon.ico" alt="Bullet Image" class="bullet-img">`;
    const roundsNeeded = 3 - roundsLeft;
    for (let i = roundsNeeded; i > 0; i--) {
      document
        .querySelector(".game-screen__hud--shot-imgs")
        .insertAdjacentHTML("afterbegin", markUp);
    }
  }

  updateScore(score) {
    document.getElementById("score").textContent = score;
  }

  updateRound(round) {
    document.getElementById("roundNumber").textContent = round;
  }

  updateHitDuck(duckNumber) {
    document.getElementById(`hitDuck${duckNumber}`).style.backgroundColor =
      "red";
  }
  updateHitDuckReset() {
    const hitDucks = Array.from(document.querySelectorAll(".hitDuck"));
    hitDucks.forEach((el) => (el.style.backgroundColor = "white"));
  }
}

export default new HUDView();
