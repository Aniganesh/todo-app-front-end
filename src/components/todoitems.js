import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import "./todoitems.css"

class TodoItems extends Component {
	constructor(props) {
		super(props);
		this.setState = "";
	}

	createTasks = (item) => {
		return <li key={item.key} onClick={() => this.delete(item.key)}
			className="task"><pre>{item.text}</pre></li>;
	}

	delete(key) {
		this.props.delete(key);
	}

	render() {
		const entries = this.props.entries;
		let tasks = entries.map(this.createTasks);
		return (
			<ul className="listArea">
				<FlipMove duration={250} easing="ease-out">
					{tasks}
				</FlipMove>

			</ul>

		)
	}
}

export default TodoItems;