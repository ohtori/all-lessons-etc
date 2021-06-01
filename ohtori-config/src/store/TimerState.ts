import { makeAutoObservable } from "mobx";

class TimerState {
  secondPassed = 0;
  timer!: NodeJS.Timeout;
  constructor() {
    makeAutoObservable(this);
  }

  timerIncrease() {
    this.secondPassed++;
  }

  timerDecrease() {
    this.secondPassed--;
  }

  setTimer(timerId: NodeJS.Timeout) {
    this.timer = timerId;
  }

  clearTimer() {
    clearInterval(this.timer);
  }
}

export default new TimerState();