import React, {useState, useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'

function Counter(props) {
    return (<div>
        <p>Кликнуто {props.count} раз</p>
        <button data-type="increment" onClick={props.stateReducer}>+</button>
        <button data-type="decrement" onClick={props.stateReducer}>-</button>
    </div>)
}

export default Counter