import React, { Component } from 'react';
import Button from '../components/Button';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return (
			<form className="todo-form">
				<input type="text" placeholder="Что нужно сделать?" />
				<Button type="Subit">Добавить</Button>
			</form>
		)
	}
}
export default Form;