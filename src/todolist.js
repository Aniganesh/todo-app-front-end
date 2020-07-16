import React, { Component } from 'react';
import TodoItems from './todoitems.js';


class Todolist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
		};

		this.addItem = this.addItem.bind(this);
	}

	addItem = (event) => {
		event.preventDefault();
		if (this._inputElement.value !== "") {
			const newItem = {
				text: this._inputElement.value,
				key: Date.now(),
			};

			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem),
				}
			});

			this._inputElement.value = "";

		}

	}

	delete = (key) => {
		let filteredItems = this.state.items.filter((item) => {
			return (item.key !== key)
		});

		this.setState({items: filteredItems});
	}

	render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input ref={(a) => this._inputElement = a} placeholder="Enter task" />
						<button type="submit" className="submit-button" >Add task</button>
					</form>
				</div>
				<TodoItems entries={this.state.items} delete={this.delete} />
			</div>
		)
	}
}

export default Todolist;