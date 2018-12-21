import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../store/modules/visibilityFilter';
import * as todoActions from '../store/modules/todos';

const getVisibleTodos = (todos, filter) => {
  const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = ({ todos, visibilityFilter }) => ({
  todos: getVisibleTodos(todos, visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  TodoActions: bindActionCreators(todoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
