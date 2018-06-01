import React from 'react';

function Button(props) {
	return (
		<button onClick={props.onChangeDel} className={props.className}>{props.children}</button>
	)
}
export default Button;