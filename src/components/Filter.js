import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setVisibilityFilter } from '../store/modules/visibilityFilter';

const Filter = React.memo(({ filter, children }) => {
  const { visibilityFilter } = useSelector(state => state, []);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const onClick = useCallback(() => dispatch(
    setVisibilityFilter(filter),
  ), [dispatch, filter]);

  useEffect(() => {
    setActive(filter === visibilityFilter);
  }, [filter, visibilityFilter]);

  return (
    <button
      type="button"
      onClick={onClick}
      onKeyDown={onClick}
      disabled={active}
    >
      {children}
    </button>
  );
});

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Filter;
