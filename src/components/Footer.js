import React from 'react';
import Link from './Link';
import { VisibilityFilters } from '../store/modules/visibilityFilter';

const Footer = () => {
  const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;

  return (
    <div>
      <span>Show: </span>
      <Link filter={SHOW_ALL}>All</Link>
      <Link filter={SHOW_ACTIVE}>Active</Link>
      <Link filter={SHOW_COMPLETED}>Completed</Link>
    </div>
  );
};

export default Footer;
