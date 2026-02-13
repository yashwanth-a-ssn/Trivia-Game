const SAVE_KEY = "TRIVIA_STATE_PERSISTENT";

function saveState(state) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

function loadState() {
  const s = localStorage.getItem(SAVE_KEY);
  return s ? JSON.parse(s) : null;
}

function clearState() {
  localStorage.removeItem(SAVE_KEY);
}