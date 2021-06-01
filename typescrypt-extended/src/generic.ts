
const cars: string[] = ['mersedes', 'audi'];
const cars2: any[] = [{model: 'mersedes'}, 22];

// const promise = new Promise<string>(resolve => {
//   setTimeout(() => {
//     resolve('Promise Resolved');
//   }, 1000);
// });

// promise.then(data => {
//   console.log(data.trim()); 
// });

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
  return Object.assign(a, b);
}

const merged = mergeObjects({name: 'Vladilen'}, {age: 26});
//const merged3 = mergeObjects('aaa', 'bbb');
//console.log(merged3);

//============
interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
  return {
    value,
    count: `In this object ${value.length} symbols`
  }
}

// console.log(withCount('Ghbdtn typescript'));
// console.log(withCount([1, 2]));
//console.log(withCount(20));

//=======
function getObjectValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

const myPerson = {
  name: 'Ilia',
  age: 26,
  job: 'Javascript'
}

// console.log(getObjectValue(myPerson, 'name'));
// console.log(getObjectValue(myPerson, 'age'));
// console.log(getObjectValue(myPerson, 'job'));

//===========
class Collection<T extends number | string | boolean> {
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item);
  }

  remove(item: T) {
    this._items = this._items.filter(i => i !== item);
  }

  get items(): T[] {
    return this._items;
  }
}

const strings = new Collection<string>(['I', 'am', 'strings']);
strings.add('!');
strings.remove('am');
// console.log(strings.items);

const numbers = new Collection<number >([3, 2, 1]);
numbers.add(1);
numbers.remove(2);
// console.log(strings.items);

// const objs = new Collection([{a: 1}, {b: 2}]);

//=================
interface Car {
  model: string,
  year: number
}

function createAndValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {};

  if (model.length > 3) {
    car.model = model;
  }

  if (year > 2000) {
    car.year = year;
  }

  return car as Car;
}

//==========
export const myCars:  Readonly<string[]> = ['Ford', 'BMW'];
//myCars.shift();

const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2222
}




//ford.model = 'Ferrari';