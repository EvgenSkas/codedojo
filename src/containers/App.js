import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Todo from '../components/Todo';
import Form from '../containers/Form';


import todos from '../todos';
import '../styles.css';


class App extends Component{
	constructor(props) {
		super(props)
		this.state = {
			todos: this.props.todos
		}
		this.handleStatusChange = this.handleStatusChange.bind(this);
		this.handleChangeDel = this.handleChangeDel.bind(this);
	}
	handleStatusChange(id) {
		const todos = this.state.todos.map( (todo) => {
			if(todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		})
		this.setState({
			todos: todos
		})
	}
	handleChangeDel(id) {
		const todos = this.state.todos.filter( (todo) => todo.id !== id)
		this.setState({
			todos: todos
		})
	}
	
	render() {
		return (
			<main>
				<Header title={this.props.title} todos={this.state.todos}/>
				<section className="todo-list">
					{this.state.todos.map((item) => {
						return <Todo 
							key={item.id}
							id={item.id}
							title={item.title} 
							completed={item.completed} 
							onStatusChange={this.handleStatusChange}
							onClickDel={this.handleChangeDel}
						/>
					})}
				
				</section>	
				<Form />
			</main>
		)
	}
}

export default App;
