export default class View {
  toggleHidden() {
    console.log(this);
    this._parentElement.classList.toggle("u-hidden");
  }

  clearTextContent() {
    this._parentElement.textContent = "";
  }

  clearInnerHTML() {
    this._parentElement.innerHTML = "";
  }
}
