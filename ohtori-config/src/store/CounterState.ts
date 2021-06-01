import { makeAutoObservable } from 'mobx';

class CounterState {
  count = 0
  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
    console.log(this.count);
  }

  decrement() {
    this.count--;
  }
}

export default new CounterState();