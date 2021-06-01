import { initialState } from '../index';

export default function popupMenuReducer(state: any, action: any) {
  switch (action.type) {
    case 'SUBMENU':
      return {...state, submenu: state.submenu.map((_: unknown, i: number) => {
        return i === action.payload ? true : false
      })};
    case 'HIDE_ALL':
      return initialState;
    default:
      return state;
  }
}