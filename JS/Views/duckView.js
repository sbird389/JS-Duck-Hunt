import View from "./View.js";
class DuckView extends View {
  //Renders New Duck
  renderDuck(handler) {
    const markUp = `<div class="duck-box duck--fly"><div class="duck duck--flap"></div></div>`;
    document
      .querySelector(".game-screen")
      .insertAdjacentHTML("afterbegin", markUp);
    this.randomiseDuckMovement();
    handler(document.querySelector(".duck-box"));
  }
  removeDuck() {
    document.querySelectorAll(".duck-box").remove();
  }

  duckAnimationHandler(handler) {
    document
      .querySelector(".duck-box")
      .addEventListener("animationend", function () {
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
    duckBox.style.animationName = "";
    duckBox.style.animationDuration = "";
    setTimeout(() => {
      duck.classList.remove("duck--shot");
      duckBox.classList.add("duck--fall");
      duck.classList.add("duck--fallImg");
    }, 500);
  }

  //function randomly selects flight path animation applies it to the duck object
  randomiseDuckMovement() {
    const duckBox = document.querySelector(".duck-box");
    const flightPath = Math.ceil(Math.random() * 10);
    console.log(flightPath);
    duckBox.style.animationName = `duckFly${flightPath}`;
    console.log(duckBox.style.animation);
  }
}

export default new DuckView();
