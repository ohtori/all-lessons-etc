import React, {useState, useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'

function FollowInput(props) {
	const errorColor = props.error ? 'red': '';
	return (<>
	<p>Введите начальное значение</p>
	<input 
	    style={{borderColor: errorColor, borderWidth: '1px', borderStyle: 'solid'}}
	    data-type="text" 
	    value={props.value} 
	    onChange={props.stateReducer} 
	    type="text"
	/>
	</>	)
}

export default FollowInput