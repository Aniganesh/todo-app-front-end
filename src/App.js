import React from 'react';
// import logo from './logo.svg';
import TodoList from './components/todolist';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="title"> Simple Todo App Create and delete tasks</h1>
      </header>
      <div id="container"><TodoList /></div>

    </div>
  );
}

export default App;
