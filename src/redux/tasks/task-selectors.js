import { createSelector } from 'reselect';

const getTasks = state => state.tasks.tasks;
const getFilter = state => state.tasks.filter;

const getVisibleTasks = createSelector(
  [getTasks, getFilter],
  (tasks, filter) => {
    const normalizedFilter = filter.toLowerCase();
    console.log(filter);
    // console.log(tasks);
    return tasks.filter(item =>
      item.title.toLowerCase().includes(normalizedFilter),
    );
  },
);

export { getTasks, getFilter, getVisibleTasks };
