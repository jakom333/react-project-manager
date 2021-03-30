import { lazy } from 'react';

const mainRoutes = [
  {
    path: '/registration',
    label: 'Registration',
    exact: false,
    component: lazy(() => import('../pages/registerPage/RegistrationPage')),
    private: false,
    restricted: true,
  },
  {
    path: '/login',
    label: 'Login',
    exact: false,
    component: lazy(() => import('../pages/registerPage/RegistrationPage')),
    private: false,
    restricted: true,
  },
  {
    path: '/projects',
    label: 'Projects',
    exact: true,
    component: lazy(() => import('../pages/projectsPage/ProjectsPage')),
    private: true,
    restricted: false,
  },
  {
    path: '/projects/:projectId',
    label: 'Sprints',
    exact: true,
    component: lazy(() => import('../pages/sprintsPage/SprintsPage')),
    private: true,
    restricted: false,
  },
  {
    path: '/projects/:projectId/sprints/:sprintId',
    label: 'Tasks',
    exact: false,
    component: lazy(() => import('../pages/tasksPage/TasksPage')),
    private: true,
    restricted: false,
  },
];

export default mainRoutes;
