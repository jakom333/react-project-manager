import { createSelector } from 'reselect';

const getTasks = state => state.tasks;
const getFilter = state => state.filter;

const getVisibleTasks = createSelector(
  [getTasks, getFilter],
  (tasks, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return tasks.filter(item =>
      item.title.toLowerCase().includes(normalizedFilter),
    );
  },
);

export { getTasks, getFilter, getVisibleTasks };
