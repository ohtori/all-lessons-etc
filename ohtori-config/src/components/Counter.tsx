import React from 'react';
import { observer } from 'mobx-react-lite';
import CounterState from '../store/CounterState';

const Counter = observer(() => {
  return (
    <div className="counter-wrap">
      <h3>Counter: {CounterState.count}</h3>
      <button onClick={ () => CounterState.increment() }>Increment +</button>
      <button onClick={ () => CounterState.decrement() }>Decrement -</button>
    </div>
  );
});

export default Counter;