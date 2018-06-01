import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './containers/App';
import todos from './todos';


ReactDOM.render(
	<App title="TODO LIST" todos={todos}/>,
	document.getElementById('root')
)
App.propTypes = {
	title: PropTypes.string.isRequired
}
module.hot.accept();