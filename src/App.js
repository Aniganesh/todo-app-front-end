import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Checkbox, Input, FormControlLabel, Button } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';


function App() {
  const [todos, setTodos] = useState([{}]);
  // Setting up hooks
  function createTodoAtIndex(index) {
    const newTodos = [...todos];
    newTodos.splice(index + 1, 0, {
      content: '',
      isCompleted: false,
      toDisplay: true
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[2 * index + 3].focus();
      // 2 * index + 3 since there are two elements to each todo. A checkbox and a text-input
    }, 0);
  }

  function removeTodoAtIndex(index) {
    if (index === 0 && todos.length === 1) {
      return;
    }
    setTodos(todos => todos.slice(0, index).concat(todos.slice(index + 1, todos.length)));
    setTimeout(() => {
      if (index === 0) {
        document.forms[0].elements[index].focus();
        return;
      }
      document.forms[0].elements[2 * index - 1].focus();
    }, 0);
  }

  function handleKeyDown(event, index) {
    if (event.key === 'Enter') {
      event.preventDefault();
      createTodoAtIndex(index);
    }

    if (event.key === 'Backspace' && event.target.value === '') {
      event.preventDefault();
      return removeTodoAtIndex(index);
    }
  }

  function updateTodoAtIndex(event, index) {
    const newTodos = [...todos];
    event.persist();
    newTodos[index].content = event.target.value;
    setTodos(newTodos);
  }

  function toggleTodoAtIndex(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }

  function clearAllTodos() {
    if (todos.length > 0 || todos[0].content !== '')
      setTodos([{}]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Simple Todo App Create and delete tasks</h1>
      </header>
      <div className="container">
        <form className="todo-list">
          <ul>

            {
              [...todos].map((todo, i) => {
                return (
                  <FormControlLabel key={i}
                    label={<Input type="text" className={`${todo.isCompleted && 'todo-is-complete'}`} value={todo.content || ''}
                      onChange={(event) => updateTodoAtIndex(event, i)}
                      placeholder="Add task here" onKeyDown={e => handleKeyDown(e, i)} />}
                    control={<Checkbox onClick={() => toggleTodoAtIndex(i)} checked={todo.isCompleted || false} />} labelPlacement="end" />
                );
              })
            }
          </ul>
          <Button style={{ marginLeft: 'auto', marginRight: '80px' }}>
            <DeleteOutlined onClick={() => clearAllTodos()} />
          </Button>
        </form>

      </div>
    </div>

  );
}

export default App;
