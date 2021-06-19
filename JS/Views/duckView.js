import View from "./View.js";

class DuckView extends View {
  _parentElement = document.querySelector(".duck");

  addShotHandler(handler) {
    this._parentElement.addEventListener("click", function () {
      console.log("BANG");
    });
  }

  cycleDuckImg() {
    const _parentElement = this._parentElement;
    let i = 3;
    const changeImg = function () {
      _parentElement.classList.remove(`duck--img-${i}`);
      if (i == 1) {
        i = 3;
        _parentElement.classList.add(`duck--img-${i}`);
      } else {
        i--;
        _parentElement.classList.add(`duck--img-${i}`);
      }
    };

    const intTimer = setInterval(() => {
      changeImg();
    }, 300);
  }
}

export default new DuckView();
