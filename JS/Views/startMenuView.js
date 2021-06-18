class StartMenuView {
  _parentElement = document.querySelector(".start-menu");

  startClickHandler(handler) {
    this._parentElement
      .querySelector(".btn")
      .addEventListener("click", function () {
        this.parentElement.classList.add("u-hidden");
        this.parentElement.classList.remove("u-mt-large");
        handler();
      });
  }
}

export default new StartMenuView();
