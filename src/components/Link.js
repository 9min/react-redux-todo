import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setVisibilityFilter } from '../store/modules/visibilityFilter';

const Link = React.memo(({ filter, children }) => {
  const { visibilityFilter } = useSelector(state => state, []);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const onClick = useCallback(() => dispatch(setVisibilityFilter(filter)), []);

  useEffect(() => {
    setActive(filter === visibilityFilter);
  }, [visibilityFilter]);

  return (
    <button
      onClick={onClick}
      disabled={active}
    >
      {children}
    </button>
  );
});

Link.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
