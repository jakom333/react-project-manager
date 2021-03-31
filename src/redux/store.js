import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-reducers';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    projects: () => [
      {
        members: ['ivan12345@example.com'],
        sprints: [
          {
            title: 'Sprint 1',
            startDate: '2020-12-30',
            endDate: '2020-12-31',
            duration: 1,
            tasks: [
              {
                title: 'Task 1',
                hoursPlanned: 1,
                hoursWasted: 0,
                hoursWastedPerDay: [
                  {
                    currentDay: '2020-12-31',
                    singleHoursWasted: 0,
                  },
                ],
                _id: '507f1f77bcf86cd799439011',
                __v: 0,
              },
              {
                title: 'Task 2',
                hoursPlanned: 1,
                hoursWasted: 0,
                hoursWastedPerDay: [
                  {
                    currentDay: '2020-12-31',
                    singleHoursWasted: 0,
                  },
                ],
                _id: '507f1f77bcf86cd799439011',
                __v: 0,
              },
            ],
            projectId: '507f1f77bcf86cd799439012',
            _id: '507f1f77bcf86cd799439013',
            __v: 0,
          },
          {
            title: 'Sprint 2',
            startDate: '2020-12-30',
            endDate: '2020-12-31',
            duration: 1,
            tasks: ['507f1f77bcf86cd799439011'],
            projectId: '507f1f77bcf86cd799439012',
            _id: '507f1f77bcf86cd799439013',
            __v: 0,
          },
        ],
        _id: '6062c86ec94bd96215a2029b',
        title: 'Project 1',
        description: 'Project 1 description',
        __v: 0,
      },
      {
        members: ['ivan12345@example.com'],
        sprints: [],
        _id: '6062c8d3c94bd96215a2029d',
        title: 'Project 2',
        description: 'Project 2 description',
        __v: 0,
      },
      {
        members: ['ivan12345@example.com'],
        sprints: [],
        _id: '6062c8d9c94bd96215a2029e',
        title: 'Project 3',
        description: 'Project 3 description',
        __v: 0,
      },
    ],
  },
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };
