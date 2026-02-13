const channel = new BroadcastChannel("TRIVIA_SYNC");

function broadcast(state) {
  channel.postMessage(state);
}

function listen(cb) {
  channel.onmessage = e => cb(e.data);
}