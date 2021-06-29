import startMenuView from "./Views/startMenuView.js";
import gameScreenView from "./Views/gameScreenView.js";
import messageBoxView from "./Views/messageBoxView.js";
import duckView from "./Views/duckView.js";
import * as model from "./model.js";
import HUDView from "./Views/HUDView.js";
import { NUMBER_OF_DUCKS } from "./config.js";
const startClickHandler = function () {
  startMenuView.toggleHidden();
  gameScreenView.toggleHidden();
  gameScreenView.addClickHandler(shotHandler);
  messageBoxView.roundStartTimer();
  setTimeout(() => {
    startNewRound();
  }, 3000);
};

const startNewRound = function () {
  model.state.ducksKilled = 0;
  model.state.ducksLeft = NUMBER_OF_DUCKS;
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
    gameOverCheck() === true ? gameOver() : startNewRound();
    console.log(gameOverCheck());
  }
};

//Checks State for ducksshot vs minimum requirement to progress and returns true or false
const gameOverCheck = function () {
  return model.state.ducksKilled < model.minimumDucksValue() ? true : false;
};

// if game is lost runs game over scenarios
const gameOver = function () {
  messageBoxView.showGameOver();
  model.highScoreCheck();
  setHighScore(model.state.highScore);
};

//handler for new game buttons at game over
const gameRestartHandler = function (pressedButton) {
  console.log(pressedButton);
  if (pressedButton.id == "yes") {
    HUDView.reloadRounds(model.state.remainingRounds);
    model.resetState();
    messageBoxView.hideGameOver();
    HUDView.updateScore();
    HUDView.updateHitDuckReset();
    messageBoxView.roundStartTimer();
    setTimeout(() => {
      startNewRound();
    }, 3000);
  }

  if (pressedButton.id == "no") {
    HUDView.reloadRounds(model.state.remainingRounds);
    model.resetState();
    startMenuView.toggleHidden();
    gameScreenView.toggleHidden();
    messageBoxView.hideGameOver();
    HUDView.updateScore();
    HUDView.updateHitDuckReset();
  }
};
//adds speed to duck animation
const speedHandler = function (element) {
  element.style.animationDuration = `${model.state.speed}ms`;
};

//IDEALLY SHOULD BE IN MODEL AND CALLED BY CONTROLLER
const speedCalc = function (data) {
  //changes animation time depending on round number for each rendered duck
  data.state.speed = Math.ceil((100 / (10 + model.state.roundNum)) * 1000);
};

const shotHandler = function (e) {
  console.log(e.target.classList);
  if (e.target.classList.contains("noShoot")) {
    return;
  }
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

startMenuView.startClickHandler(startClickHandler);
startMenuView.setHighScore(localStorage.getItem("highScore"));
messageBoxView.addbuttonClickHandler(gameRestartHandler);
