import React, { Dispatch, useReducer, useEffect } from 'react';
import ReactDom from 'react-dom';
import MainPage from './components/MainPage';
import SecondPage from './components/SecondPage';
import popupMenuReducer from './reducers/popupMenuReducer';
import Navigation from './components/Navigation/Navigation';
import './index.scss';

export const mockNavItems = [
  { id: 0, value: "Projects", subitems: [{ id: 0 , value: 'Subitem1'}, { id: 1 , value: 'Subitem2'}] },
  { id: 1, value: "Groups", subitems: [{ id: 0 , value: 'Subitem3'}, { id: 1 , value: 'Subitem4'}]  },
  { id: 2, value: "More", subitems: [{ id: 0 , value: 'Subitem5'}, { id: 1 , value: 'Subitem6'}]  }
];

export const initialState = {submenu: mockNavItems.map(_ => false)};
export const PopupMenuContext = React.createContext({} as { popupMenuState: typeof initialState, popupMenudispatch: Dispatch<any>});

export default function App(): JSX.Element {
  const [popupMenuState, popupMenudispatch] = useReducer(popupMenuReducer, initialState);

  function hidePopup(e: MouseEvent) {
      !(e.target as any).closest('.popup') && popupMenudispatch({ type: 'HIDE_ALL' });
    }

  useEffect(() => {
    document.addEventListener('click', hidePopup);
    return () => document.removeEventListener('click', hidePopup);
  });

  return(
    <React.StrictMode>
      <PopupMenuContext.Provider value={{ popupMenuState, popupMenudispatch }}>
        <Navigation />
        <fieldset className="col">
          <legend>Info</legend>
          <input list="country" type="text"/>
          <datalist id="country">
            <option value="Russia"></option>
            <option value="Usa"></option>
            <option value="Japan"></option>
          </datalist>
          <input type="text" name="" placeholder="Name" id=""/>
          <input type="text" name="" placeholder="Age" id=""/>
        </fieldset>
        <MainPage />
        <SecondPage />
      </PopupMenuContext.Provider>
    </React.StrictMode>
  );
}

ReactDom.render(<App />, document.getElementById('root'));