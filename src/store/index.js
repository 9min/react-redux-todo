import { combineReducers } from 'redux';
import todos from './modules/todos';
import visibilityFilter from './modules/visibilityFilter';

export default combineReducers({
  todos,
  visibilityFilter,
});
