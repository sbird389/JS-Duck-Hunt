export default class View {
  toggleHidden() {
    this._parentElement.classList.toggle("u-hidden");
  }

  _clearTextContent() {
    this._parentElement.textContent = "";
  }
}
