import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../store/modules/todos';

const AddTodo = (props) => {
  const { TodoActions } = props;
  let input = null;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          TodoActions.addTodoAsync(input.value);
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
    TodoActions: bindActionCreators(todoActions, dispatch),
  })
)(AddTodo);