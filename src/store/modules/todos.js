import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

let nextTodoId = 1;

// action types
const ADD_TODO = 'todo/ADD_TODO';
const TOGGLE_TODO = 'todo/TOGGLE_TODO';

// action creators
export const addTodo = createAction(ADD_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);

export const addTodoAsync = (text) => (dispatch) => {
  console.log(`1초 후에 "${text}" 메시지가 등록됩니다.`);
  setTimeout(() => dispatch(addTodo(text)), 1000);
};

// initial state
let initialState = [
  {
    id: nextTodoId,
    text: 'First Todo',
    completed: false,
  }
];

export default handleActions({
  [ADD_TODO]: (state, action) => {
    return produce(state, (draft) => {
      draft.push({
        id: ++nextTodoId,
        text: action.payload,
        completed: false,
      });
    });
  },
  [TOGGLE_TODO]: (state, action) => {
    return produce(state, (draft) => {
      draft.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    });
  },
}, initialState);
