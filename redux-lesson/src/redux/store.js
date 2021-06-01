export default function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, { type: '__INIT__' });
  const subscribers = [];

  return {
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach(s => s());
    },
    subscribe(cb) {
      subscribers.push(cb);
    },
    getState() {
      return state;
    }
  }
}