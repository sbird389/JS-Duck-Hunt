export const state = {
  score: 0,
  roundScore: 0,
  roundNum: 0,
  ducksLeft: 3,
  remainingRounds: 3,
  minimumDucks: 4,
  ducksKilled: 0,
  speed: 0,
  highScore: 0,
};

export const minimumDucksValue = function () {
  const ducks = Math.ceil(state.roundNum / 10) + 3;
  return ducks < 10 ? ducks : 10;
};

export const highScoreCheck = function () {
  if (state.highScore < state.score) {
    state.highScore = state.score;
    localStorage.setItem("highScore", state.highScore);
  }
};

export const resetState = function () {
  state.score = 0;
  state.roundNum = 0;
  state.ducksleft = 0;
  state.remainingRounds = 3;
  state.ducksKilled = 0;
  state.speed = 0;
  state.highScore = localStorage.getItem("highScore");
};
