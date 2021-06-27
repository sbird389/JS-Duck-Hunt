export const state = {
  score: 0,
  roundScore: 0,
  roundNum: 0,
  ducksLeft: 3,
  remainingRounds: 3,
  minimumDucks: 4,
  ducksKilled: 0,
  speed: 0,
};

export const minimumDucksValue = function () {
  const ducks = Math.ceil(state.roundNum / 10) + 3;
  return ducks < 10 ? ducks : 10;
};
