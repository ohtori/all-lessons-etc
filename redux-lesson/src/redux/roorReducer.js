import { combineReducers } from "redux";
import { CHANGE_THEME, DEC, INC } from "./types";

function counterReducer(state = 0, action) {
  switch(action.type) {
    case INC: return ++state;
    case DEC: return --state;
    default: return state;
  }
}

function themeReducer(state = 'light', action) {
  switch(action.type) {
    case CHANGE_THEME: return action.payload;
    //case 'DEC': return { ...state, counter: state.counter - 1 };
    default: return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
});

export default rootReducer;