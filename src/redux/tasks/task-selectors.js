import { createSelector } from 'reselect';

const getTasks = state => state.tasks.tasks;
const getFilter = state => state.tasks.filter;
const getCurrentDay = state => state.tasks.currentDay;
const getLoading = state => state.tasks.loading;


const getVisibleTasks = createSelector(
  [getTasks, getFilter],
  (tasks, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return tasks.filter(item =>
      item.title.toLowerCase().includes(normalizedFilter),
    );
  },
);

export { getTasks, getFilter, getCurrentDay, getVisibleTasks, getLoading };
