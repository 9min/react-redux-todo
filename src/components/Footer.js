import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../store/modules/visibilityFilter';

const Footer = () => {
  const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;

  return (
    <div>
      <span>Show: </span>
      <FilterLink filter={SHOW_ALL}>All</FilterLink>
      <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
    </div>
  );
};

export default Footer;