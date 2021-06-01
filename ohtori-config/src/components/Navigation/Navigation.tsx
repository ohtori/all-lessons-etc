import React from 'react';
import NavItem from '../NavItem/NavItem';
import { mockNavItems } from '../../index';
import style from './nav.module.scss';

export interface INavItem {
  id: number
  value: string
  subitems: Array<{ id: number, value: string }>
}


export default function Navigation(): JSX.Element {
  return (
    <nav className={style.navigation}>
      <ul>
        {mockNavItems.map((elem: INavItem) => <NavItem navItem={elem} key={elem.id}></NavItem>)}
      </ul>
    </nav>
  );
}
