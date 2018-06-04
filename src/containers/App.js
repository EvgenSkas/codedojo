import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from '../components/Header';
import Todo from '../containers/Todo';
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
		this.handleAdd = this.handleAdd.bind(this);
		this.onEdit = this.onEdit.bind(this);
		
	}

	nextId() {
		this._nextId = this._nextId || 4;
		return this._nextId++
	}
	onEdit(title, id) {
		let todos = this.state.todos.map((todo)=> {
			if(todo.id === id) {
				todo.title = title;
			}
			return todo;
		})
		
		this.setState({
			todos
		})
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
	handleAdd(title) {
		let todo ={
			id: this.nextId(),
			title,
			completed: false
		}
		let todos = [...this.state.todos, todo];
		this.setState({ todos })
	}
	
	render() {
		return (
			<main>
				<Header title={this.props.title} todos={this.state.todos}/>
				<ReactCSSTransitionGroup 
					className="todo-list"
					component="section"
					transitionName="slide"
					transitionAppear={true}
					transitionAppearTimeout={500}
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
				>
					{this.state.todos.map((item) => {
						return <Todo 
							key={item.id}
							id={item.id}
							title={item.title} 
							completed={item.completed} 
							onStatusChange={this.handleStatusChange}
							onClickDel={this.handleChangeDel}
							onEdit={this.onEdit}
						/>
					}
				)}
				</ReactCSSTransitionGroup>	
				<Form onAdd={this.handleAdd}/>
			</main>
		)
	}
}

export default App;
