"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myCars = void 0;
const cars = ['mersedes', 'audi'];
const cars2 = [{ model: 'mersedes' }, 22];
function mergeObjects(a, b) {
    return Object.assign(a, b);
}
const merged = mergeObjects({ name: 'Vladilen' }, { age: 26 });
function withCount(value) {
    return {
        value,
        count: `In this object ${value.length} symbols`
    };
}
function getObjectValue(obj, key) {
    return obj[key];
}
const myPerson = {
    name: 'Ilia',
    age: 26,
    job: 'Javascript'
};
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(['I', 'am', 'strings']);
strings.add('!');
strings.remove('am');
const numbers = new Collection([3, 2, 1]);
numbers.add(1);
numbers.remove(2);
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
exports.myCars = ['Ford', 'BMW'];
const ford = {
    model: 'Ford',
    year: 2222
};
//# sourceMappingURL=generic.js.map