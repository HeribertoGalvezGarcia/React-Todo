import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <form>
        <label>
          <input type="text" placeholder="...todo" onChange={this.props.changeText} />
        </label>
        <input type="submit" onClick={this.props.addTodo} value="Add Todo" />
        <input type="submit" onClick={this.props.removeCompleted} value="Clear Completed" />
      </form>
    );
  }
}

export default TodoForm;
