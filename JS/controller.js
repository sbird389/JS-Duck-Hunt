import gameScreenView from "./Views/gameScreenView.js";
import startMenuView from "./Views/startMenuView.js";

const controlGameStart = function () {
  console.log("Game Start");
  gameScreenView.toggleHidden();
  //gameScreenView.timerRunDown();
  gameScreenView.countdownTimer();
};

startMenuView.startClickHandler(controlGameStart);
