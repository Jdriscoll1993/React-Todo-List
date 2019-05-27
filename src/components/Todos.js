import React, {Component} from 'react';
import TodoItem from "./TodoItem"
import PropTypes from "prop-types";
class Todos extends Component {

  render() {
    //   comes from state of app.js and passed down so we can access the props like so:
    // we have an array of todos and we need to loop through them and output something with the Map() high order array method.-can return an array from an array, but we're using it to loop through and output JSX
      console.log(this.props.todos)
      //for each todo that we map through, what do we want to display as JSX?
    return this.props.todos.map((todo)=>(
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default Todos;
