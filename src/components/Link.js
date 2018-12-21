import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, filter, children, VisibilityFilterActions }) => (
  <button
    onClick={() => VisibilityFilterActions.setVisibilityFilter(filter)}
    disabled={active}
    style={{
      marginLeft: '4px',
      color: active ? '#dddddd' : '#000000',
    }}
  >
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  VisibilityFilterActions: PropTypes.shape({
    setVisibilityFilter: PropTypes.func.isRequired,
  }).isRequired,
};

export default Link;
