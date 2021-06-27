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

//handler for new game buttons at game over
const gameRestartHandler = function (pressedButton) {
  if (pressedButton.id == "yes") {
    console.log("yes");
    //reset score and ducks and Launch Start new Round
  }

  if (pressedButton.id == "no") {
    //RESET EVERYTHING Hide Game Screen unhide start menu
  } else {
    return;
  }
};
//adds speed to duck animation
const speedHandler = function (element) {
  element.style.animationDuration = `${model.state.speed}ms`;
};

//IDEALLY SHOULD BE IN MODEL AND CALLED BY CONTROLLER
const speedCalc = function (data) {
  //changes animation timne depending on round number for each rendered duck
  data.state.speed = Math.ceil((100 / (10 + model.state.roundNum)) * 1000);
};

const ShotHandler = function (e) {
  //Check Any Ammo Left render message if not
  if (model.state.remainingRounds === 0) {
    messageBoxView.renderOutofAmmo();

    return;
  }
  //remove rounds from both state and hud
  gameScreenView.addShotSoundEffect();
  model.state.remainingRounds -= 1;
  HUDView.removeRound();
  if (e.target == document.querySelector(".duck")) {
    duckView.shotDuck(e);
    model.state.score += 1000;
    model.state.ducksKilled += 1;
    HUDView.updateScore(model.state.score);
    console.log(model.state.score);
    HUDView.updateHitDuck(model.state.ducksLeft + 1);
  }
};

//renders duck while ducksLeft in round removes duck from state
const nextDuck = function () {
  if (model.state.ducksLeft > 0) {
    speedCalc(model);
    duckView.renderDuck(speedHandler);
    model.state.ducksLeft -= 1;
    duckView.duckAnimationHandler(nextDuck);
    HUDView.reloadRounds(model.state.remainingRounds);
    model.state.remainingRounds = 3;
    return;
  }
  if (model.state.ducksLeft == 0) {
    startNewRound();
  }
};

//Function initialises next round using Model.stateData called by NextDuck essentially in a while loop
const startNewRound = function () {
  if (
    model.state.ducksKilled < model.minimumDucksValue() &&
    model.state.roundNum != 0
  ) {
    gameScreenView.removeClickHandler(ShotHandler);
    messageBoxView.renderGameOver();
    messageBoxView.addbuttonClickHandler(gameRestartHandler);
  }
  if (
    model.state.ducksKilled >= model.minimumDucksValue() ||
    model.state.roundNum == 0
  ) {
    console.log("nextRound");
    model.state.ducksKilled = 0;
    model.state.ducksLeft = 1;
    model.state.roundNum += 1;
    model.state.score += model.state.roundScore;
    model.state.roundScore = 0;
    HUDView.updateRound(model.state.roundNum);
    HUDView.updateHitDuckReset();
    if (model.state.roundNum != 1) {
      messageBoxView.renderMessage(`Start Round ${model.state.roundNum}`, 700);
      messageBoxView.roundStartTimer();
    }
    setTimeout(() => {
      nextDuck();
    }, 3000);
  }
};

startMenuView.startClickHandler(startClickHandler);
