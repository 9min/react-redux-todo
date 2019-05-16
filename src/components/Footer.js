import React from 'react';
import Filter from './Filter';
import { VisibilityFilters } from '../store/modules/visibilityFilter';

const Footer = () => {
  const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;

  return (
    <div>
      <span>Show: </span>
      <Filter filter={SHOW_ALL}>All</Filter>
      <Filter filter={SHOW_ACTIVE}>Active</Filter>
      <Filter filter={SHOW_COMPLETED}>Completed</Filter>
    </div>
  );
};

export default Footer;
