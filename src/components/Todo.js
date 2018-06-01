import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import Button from './Button';

function Todo(props) {
	return(
		<div className={`todo${props.completed ? ' completed' : ''}`} >
			<Checkbox 
				className={`checkbox${props.completed ? ' checkbox_comp' : ''}`} 
				checked={props.completed} 
				onChange={ () => props.onStatusChange(props.id) }
			/>
			<span className="todo-title">{props.title}</span>
			<Button className={'delete'} onChangeDel={ () => props.onClickDel(props.id) }/>
		</div>
	)
}
Todo.propTypes = {
	title: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
}
export default Todo;