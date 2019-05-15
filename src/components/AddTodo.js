import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync} from '../store/modules/todos';

const AddTodo = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const onSubmit = useCallback((evt) => {
    const inputEl = inputRef.current;
    
    if (!inputEl.value.trim()) return;

    dispatch(addTodoAsync(inputEl.value));
    inputEl.value = '';
    evt.preventDefault();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
