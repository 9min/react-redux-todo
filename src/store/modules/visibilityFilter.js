import { createAction, handleActions } from 'redux-actions';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

// action types
const SET_VISIBILITY_FILTER = 'todo/SET_VISIBILITY_FILTER';

// action creators
export const setVisibilityFilter = createAction(SET_VISIBILITY_FILTER);

// initial state
const initialState = VisibilityFilters.SHOW_ALL;

export default handleActions({
  [SET_VISIBILITY_FILTER]: (state, action) => action.payload,
}, initialState);
