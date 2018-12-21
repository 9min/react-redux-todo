import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as visibilityFilterActions from '../store/modules/visibilityFilter';
import Link from '../components/Link';

const mapStateToProps = (state, props) => ({
  active: props.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  VisibilityFilterActions: bindActionCreators(visibilityFilterActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
