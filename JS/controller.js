import duckView from "./Views/duckView.js";
import gameScreenView from "./Views/gameScreenView.js";
import startMenuView from "./Views/startMenuView.js";

const controlGameStart = function () {
  console.log("Game Start");
  gameScreenView.toggleHidden();
  // gameScreenView.countdownTimer();
  // setTimeout(() => {
  //   gameScreenView.timerRunDown();
  // }, 4000);
  duckView.cycleDuckImg();
};

startMenuView.startClickHandler(controlGameStart);
console.log(gameScreenView);
