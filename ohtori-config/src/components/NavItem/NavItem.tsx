import React, { useContext } from 'react';
import { PopupMenuContext } from '../../index';
import { INavItem } from '../Navigation/Navigation';
import style from './navitem.module.scss';

export default function NavItem({navItem}: {navItem: INavItem}): JSX.Element {
  const { popupMenuState, popupMenudispatch } = useContext(PopupMenuContext);
  return (
    <li>
      <button className="popup" onClick={() => popupMenudispatch({type: 'SUBMENU', payload: navItem.id})}>{navItem.value}</button>
      {popupMenuState.submenu[navItem.id] 
        ?  <ul className={style.submenu}>
            {navItem.subitems.map(elem => <li key={elem.id}><a href={elem.value}>{elem.value}</a></li>)}
          </ul>
        : null
      }
    </li>
  );
}