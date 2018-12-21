import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, TodoActions }) => (
  <ul>
    {
      todos.map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => TodoActions.toggleTodo(todo.id)} />
      ))
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  TodoActions: PropTypes.shape({
    toggleTodo: PropTypes.func.isRequired,
  }).isRequired,
}

export default TodoList;
