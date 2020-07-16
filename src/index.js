import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Todolist from "./todolist.js"

const destination = document.querySelector("#container");

ReactDOM.render(
	<div>
		<Todolist></Todolist>
	</div>
	, destination);