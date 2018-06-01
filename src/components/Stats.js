import React from 'react';

function Stats(props) {
	return (
		<table className="stats">
			<tbody>
				<tr>
					<th>Всего задач:</th>
					<td>{props.todos.length}</td>
				</tr>
				<tr>
					<th>Выполнено:</th>
					<td>{props.todos.filter((todo) => todo.completed).length}</td>
				</tr>
				<tr>
					<th>Осталось:</th>
					<td>{props.todos.filter((todo) => todo.completed === false).length}</td>
				</tr>
			</tbody>
		</table>
	)
}

export default Stats;