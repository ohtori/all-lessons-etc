import { CHANGE_THEME, DEC, INC } from "./types";

export function createINC() {
  return { type: INC };
}

export function createDEC() {
  return { type: DEC };
}

export function changeTheme(payload) {
  return { type: CHANGE_THEME, payload };
}

export function createAsyncINC() {
  return function(dispatch) {
    setTimeout(() => {
      dispatch(createINC());
    }, 2000)
  }
}