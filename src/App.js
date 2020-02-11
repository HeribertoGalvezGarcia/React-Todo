import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      text: ""
    };
  }

  handleClick = task_id => {
    this.setState(state => {
      const task = state.list.find(({id}) => id === task_id);
      task.completed = !task.completed;
      return state;
    });
  };

  removeCompleted = e => {
    e.preventDefault();
    this.setState(state => {
      state.list = state.list.filter(({completed}) => !completed);
      return state;
    });
  };

  changeText = ({target: {value}}) => {
    this.setState(state => {
      state.text = value;
      return state;
     });
  };

  addTodo = e => {
    e.preventDefault();
    this.setState(state => {
      state.list = [...state.list, {task: this.state.text, id: Date.now(), completed: false}];
      return state;
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todos={this.state.list} handleClick={this.handleClick} />
        <TodoForm removeCompleted={this.removeCompleted} addTodo={this.addTodo} changeText={this.changeText} />
      </div>
    );
  }
}

export default App;
