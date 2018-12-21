import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as addTodo from '../store/modules/todos';

const AddTodo = (props) => {
  const { addTodo } = props;
  let input = null;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          addTodo(input.value);
          input.value = '';
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect(
  (state) => ({}),
  (dispatch) => ({
    addTodo: bindActionCreators(addTodo, dispatch).addTodo,
  })
)(AddTodo);