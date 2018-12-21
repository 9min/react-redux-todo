import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, filter, children, setVisibilityFilter }) => (
  <button
    onClick={() => setVisibilityFilter(filter)}
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
  setVisibilityFilter: PropTypes.func.isRequired,
};

export default Link;
