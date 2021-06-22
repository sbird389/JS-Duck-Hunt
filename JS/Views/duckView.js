import View from "./View.js";
class DuckView extends View {
  //Renders New Duck
  renderDuck() {
    const markUp = `<div class="duck-box duck--fly"><div class="duck duck--flap"></div></div>`;
    document
      .querySelector(".game-screen")
      .insertAdjacentHTML("beforeend", markUp);
  }
  removeDuck() {
    document.querySelectorAll(".duck-box").remove();
  }

  duckAnimationHandler(handler) {
    document
      .querySelector(".duck-box")
      .addEventListener("animationend", function () {
        console.log("animationEnded");
        this.remove();
        handler();
      });
  }

  //Function controls Animation of Duck once shot animation end is still listened to by event handler
  shotDuck(e) {
    const duckBox = document.querySelector(".duck-box");
    const duck = document.querySelector(".duck");
    duckBox.style.top = e.target.parentElement.offsetTop + "px";
    duckBox.style.left = e.target.parentElement.offsetLeft + "px";
    duck.classList.remove("duck--flap");
    duckBox.classList.remove("duck--fly");
    duck.classList.add("duck--shot");
    setTimeout(() => {
      console.log("animation Start");
      duck.classList.remove("duck--shot");
      duckBox.classList.add("duck--fall");
      duck.classList.add("duck--fallImg");
    }, 500);
  }
}

export default new DuckView();
