import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as setVisibilityFilter from '../store/modules/visibilityFilter';
import Link from '../components/Link';

const mapStateToProps = (state, props) => ({
  active: props.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  setVisibilityFilter: bindActionCreators(setVisibilityFilter, dispatch).setVisibilityFilter,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
