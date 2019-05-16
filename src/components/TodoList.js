import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../store/modules/todos';
import { VisibilityFilters } from '../store/modules/visibilityFilter';
import Todo from './Todo';

const getVisibleTodos = (todos, visibilityFilter) => {
  const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

  switch (visibilityFilter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${visibilityFilter}`);
  }
};

const TodoList = () => {
  const { todos, visibilityFilter } = useSelector(state => state, []);
  const dispatch = useDispatch();
  const [visibleTodos, setVisibleTodos] = useState([]);
  const onClick = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);

  useEffect(() => {
    setVisibleTodos(getVisibleTodos(todos, visibilityFilter));
  }, [todos, visibilityFilter]);

  return (
    <ul>
      {
        visibleTodos.map(todo => (
          <Todo
            key={todo.id}
            onClick={() => onClick(todo.id)}
            {...todo}
          />
        ))
      }
    </ul>
  );
};

export default TodoList;
