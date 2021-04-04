import { createSelector } from '@reduxjs/toolkit';

const getTasks = state => state.tasks;
const getFilter = state => state.filter;

const getVisibleTssks = createSelector(
  [getTasks, getFilter],
  (tasks, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return tasks.filter(item =>
      item.title.toLowerCase().includes(normalizedFilter),
    );
  },
);

export { getTasks, getFilter, getVisibleTssks };
