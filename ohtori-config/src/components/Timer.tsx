import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import TimerState from '../store/TimerState';
import Paragraph from './Paragraph';

const Timer = observer(() => {
  useEffect(() => {
    const interval = setInterval(() => {
      TimerState.timerIncrease();
    }, 1000);
    TimerState.setTimer(interval);
    setTimeout(() => {
      TimerState.clearTimer();
    }, 10000);
  }, []);

  return (
    <div className="row">
      <h2>Timer Component</h2>
      <p>Time passed: {TimerState.secondPassed}</p>
      <Paragraph />
    </div>
  );
});

export default Timer;