import React, {useState, useEffect, useRef, useReducer} from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter.jsx'
import FollowInput from './follow-input.jsx'
import WebpackLogo from './assets/logo-with-title.png'
import './css/styles.css'

const initialState = {
	count: 0,
    error: false
}

function App(props) {

    function stateReducer(e) {
    	if (e.target.dataset.type === 'increment') {
            setState({error: false, count: state.count + 1});
        } else if (e.target.dataset.type === 'decrement') {
        	setState({error: false, count: state.count - 1});
        } else {
        	if (isNaN(+e.target.value)) {
                setState({count: state.count, error: true})
        } else {
        	     setState({error: false, count: +e.target.value});
            }
        }
    }

	const [state, setState] = useState(initialState);
	return (<React.Fragment>
		<img src={WebpackLogo}/>
		<h1>Hello React!</h1>
		<Counter stateReducer={stateReducer} count={state.count}/>
		<FollowInput error={state.error} value={state.count} stateReducer={stateReducer} />
	</React.Fragment>)
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)