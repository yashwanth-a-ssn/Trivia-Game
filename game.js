let STATE = {
  phase: "welcome",     // welcome | playing | leaderboard | finished
  round: 1,
  teams: [],
  scores: {},
  pairs: [],
  currentPairIndex: 0,
  question: null,
  revealed: [],
};

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function pairTeams(list) {
  const pairs = [];
  for (let i = 0; i < list.length; i += 2) {
    if (list[i + 1]) pairs.push([list[i], list[i + 1]]);
  }
  return pairs;
}
