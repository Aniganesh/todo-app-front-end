import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';



function App() {
  function createTodoAtIndex(event, index) {
    const newTodos = [...todos];
    newTodos.splice(index + 1, 0, {
      content: '',
      isCompleted: false
    })
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[index + 1].focus();
    }, 0);
  }

  function updateTodoAtIndex(event, index) {
    const newTodos = [...todos];
    newTodos[index].content = event.target.value;
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[index].focus();
    }, 0);
  }

  function removeTodoAtIndex(index) {
    if (index === 0 && todos.length === 1) {
      return;
    }
    setTodos(todos => todos.slice(0, index).concat(todos.slice(index + 1, todos.length)));
    setTimeout(() => {
      if(index === 0){
        document.forms[0].elements[index].focus();
        return;
      }
      document.forms[0].elements[index - 1].focus();
    }, 0);
  }

  function handleKeyDown(event, index) {
    if (event.key === 'Enter') {
      createTodoAtIndex(event, index);
    }

    if (event.key === 'Backspace' && event.target.value === '') {
      event.preventDefault();
      return removeTodoAtIndex(index);
    }
  }

  function toggleTodoAtIndex(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }

  const [todos, setTodos] = useState([{}]);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Simple Todo App Create and delete tasks</h1>
      </header>
      <div className="container">
        <form className="todo-list">
          <ul>
            {[...todos].map((todo, i) => (
              <div key={Date.now() + i} className={`todo ${todo.isCompleted && 'todo-is-complete'}`}>
                <div className="checkbox" onClick={()=>toggleTodoAtIndex(i)}>{todo.isCompleted && (
                  <span>&#x2714;</span>
                )}</div>
                <input type="text" onChange={e => updateTodoAtIndex(e, i)} value={todo.content} onKeyDown={e => handleKeyDown(e, i)} />
              </div>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
}

export default App;
