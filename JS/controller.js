import startMenuView from "./Views/startMenuView.js";
import gameScreenView from "./Views/gameScreenView.js";
import messageBoxView from "./Views/messageBoxView.js";
import duckView from "./Views/duckView.js";

import * as model from "./model.js";
import HUDView from "./Views/HUDView.js";
const startClickHandler = function () {
  startMenuView.toggleHidden();
  gameScreenView.toggleHidden();
  gameScreenView.addClickHandler(ShotHandler);
  messageBoxView.roundStartTimer();
  setTimeout(() => {
    startNewRound();
  }, 3000);
};

const ShotHandler = function (e) {
  //Check Any Ammo Left render message if not
  if (model.state.remainingRounds === 0) {
    messageBoxView.renderOutofAmmo();
    return;
  }
  //remove rounds from both state and hud
  model.state.remainingRounds -= 1;
  HUDView.removeRound();
  console.log(model.state.remainingRounds);
  if (e.target == document.querySelector(".duck")) {
    duckView.shotDuck(e);
  }
};

//renders duck while ducksLeft in round removes duck from state
const nextDuck = function () {
  if (model.state.ducksLeft > 0) {
    duckView.renderDuck();
    model.state.ducksLeft -= 1;
    duckView.duckAnimationHandler(nextDuck);
  }
};
const startNewRound = function () {
  nextDuck();
};

startMenuView.startClickHandler(startClickHandler);
