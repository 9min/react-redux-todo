import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

let nextTodoId = 1;

// action types
const ADD_TODO = 'todo/ADD_TODO';
const TOGGLE_TODO = 'todo/TOGGLE_TODO';

// action creators
export const addTodo = createAction(ADD_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);

export const addTodoAsync = text => dispatch => dispatch(addTodo(text));

// initial state
const initialState = [
  {
    id: nextTodoId,
    text: 'First Todo',
    completed: false,
  },
];

export default handleActions({
  [ADD_TODO]: (state, action) => (
    produce(state, (draft) => {
      draft.push({
        id: nextTodoId += 1,
        text: action.payload,
        completed: false,
      });
    })
  ),
  [TOGGLE_TODO]: (state, action) => (
    produce(state, (draft) => {
      draft.forEach((todo) => {
        const newTodo = todo;

        if (newTodo.id === action.payload) {
          newTodo.completed = !newTodo.completed;
        }
      });
    })
  ),
}, initialState);
