import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edeting: false
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		let title = this.refs.title.value;
		let id = this.props.id;
		this.props.onEdit(title, id);
		this.setState({
			edeting: false
		})
	}

	render() {
		return(this.state.edeting ?
			<form className="todo-edit-from" onSubmit={this.handleSubmit}>
				<input type="text" ref="title" defaultValue={this.props.title} />
				<Button className="save" type="submit" />
			</form>
			:
			<div className={`todo${this.props.completed ? ' completed' : ''}`} >
				<Checkbox 
					className={`checkbox${this.props.completed ? ' checkbox_comp' : ''}`} 
					checked={this.props.completed} 
					onChange={ () => this.props.onStatusChange(this.props.id) }
				/>
				<span className="todo-title">{this.props.title}</span>
				<Button className="edit" onClick={()=>this.setState({ edeting: true})}/>
				<Button 
					className={'delete'} 
					onClick={ () => this.props.onClickDel(this.props.id) }
				/>
			</div>
			
		)
	}
}
Todo.propTypes = {
	title: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
}
export default Todo;