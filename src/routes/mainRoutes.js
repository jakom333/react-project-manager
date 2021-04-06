import { lazy } from 'react';

const mainRoutes = [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('../pages/registerPage/RegistrationPage')),
    private: false,
    restricted: true,
  },
  {
    path: '/registration',
    label: 'Registration',
    exact: true,
    component: lazy(() => import('../pages/registerPage/RegistrationPage')),
    private: false,
    restricted: true,
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
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
    exact: true,
    component: lazy(() => import('../pages/tasksPage/TasksPage')),
    private: true,
    restricted: false,
  },
];

export default mainRoutes;
