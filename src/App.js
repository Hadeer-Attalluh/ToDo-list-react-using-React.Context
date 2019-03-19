import React, { Component } from 'react';
import './App.css';
import ToDoHome from './Home/home';

export const appContext = React.createContext({ todos: [{}] });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "00", id: "1236", complete: false, deleted: false }],
    }
    this.addTodo = this.addTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.uncompleteTodo = this.uncompleteTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.undeleteTodo = this.undeleteTodo.bind(this);
  }
  addTodo(task) {
    // debugger
    const { todos } = this.state;
    this.setState({ todos: [...todos.concat(task)] });
  }
  completeTodo(id) {
    debugger
    const { todos } = this.state;
    const newTodos = todos.slice();
    const taskIndex = newTodos.findIndex((task) => task.id === id);
    newTodos[taskIndex].complete = true;
    this.setState({ todos: [...newTodos] });
  }
  uncompleteTodo(id) {
    debugger
    const { todos } = this.state;
    const newTodos = todos.slice;
    const taskIndex = newTodos.findIndex(task => task.id === id);
    newTodos[taskIndex].complete = false;
    this.setState({ todos: [...newTodos] });
  }
  deleteTodo(id) {
    const { todos } = this.state;
    const newTodos = todos.slice;
    const taskIndex = newTodos.findIndex(task => task.id === id);
    newTodos[taskIndex].deleted = true;
    this.setState({ todos: [...newTodos] });
  }
  undeleteTodo(id) {
    const { todos } = this.state;
    const newTodos = todos.slice;
    const taskIndex = newTodos.findIndex(task => task.id === id);
    newTodos[taskIndex].deleted = false;
    this.setState({ todos: [...newTodos] });
  }
  render() {
    const value = {
      todos: this.state.todos,
      addTodo: this.addTodo,
      completeTodo: this.completeTodo,
      uncompleteTodo: this.uncompleteTodo,
      deleteTodo: this.deleteTodo,
      undeleteTodo: this.undeleteTodo,
    }
    return (
      <appContext.Provider value={value}>
        <ToDoHome />
      </appContext.Provider>
    );
  }
}

export default App;
