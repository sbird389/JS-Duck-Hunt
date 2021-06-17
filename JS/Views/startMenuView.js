class StartMenuView {
  _parentElement = document.querySelector(".start-menu");

  startClickHandler(handler) {
    this._parentElement
      .querySelector(".btn")
      .addEventListener("click", function () {
        this.parentElement.classList.toggle("u-hidden");
        console.log(this.parentElement.classList);
      });
  }
}

export default new StartMenuView();
