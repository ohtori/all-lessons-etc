interface IMenuItem {
  name: string
  submenu: Array<IMenuItem> | null
}

interface IMenuItemExit {
  name: string
  exit: Function
}

const menu: Array<IMenuItem | IMenuItemExit> = [
  {name: 'Home', submenu: [{name: 'subhome', submenu: [{name: 'subsubhome', submenu: null}]}]},
  {name: 'Exit', exit: () => console.log('exit')},
];

type MenuItem<T, U> = {a: T, b: U};
type MenuItemExtended<T> = {menu: MenuItem<string, string>, submenu?: T};

const b: MenuItemExtended<MenuItem<string, string>> = {} as MenuItemExtended<MenuItem<string, string>>;

type Point = { x: number; y: number };
type P = keyof Point;
const p: P = 'x';

interface Iabx {
  [a: string]: number;
}

type ABX = keyof Iabx;
const abx = 'as';

function f(arg: new(str: string) => {}) {
  return new arg('a');
}

class Func {
  constructor(public params:string) {
    this.params = params;
  }

}

f(Func);