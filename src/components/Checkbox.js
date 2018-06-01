import React from 'react';

function Checkbox(props) {
	return (
		<button onClick={props.onChange} className={props.className}></button>
	)
}
export default Checkbox;