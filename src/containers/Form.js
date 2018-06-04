import React, { Component } from 'react';
import Button from '../components/Button';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	render() {
		return (
			<form className="todo-form" onSubmit={this.handleSubmit}>
				<input 
					type="text" 
					onChange={this.handleChange} 
					value={this.state.value} 
					placeholder="Что нужно сделать?"
				/>
				<Button type="Subit">Добавить</Button>
			</form>
		)
	}
	handleSubmit(e) {
		e.preventDefault();
		if(this.state.value) this.props.onAdd(this.state.value);
		this.setState({
			value: ''
		})
	}
	handleChange(e){
		this.setState({
			value: e.target.value
		})
	}
}
export default Form;