import gameScreenView from "./Views/gameScreenView.js";
import startMenuView from "./Views/startMenuView.js";

const controlGameStart = function () {
  console.log("Game Start");
  gameScreenView.toggleHidden();
};

startMenuView.startClickHandler(controlGameStart);
