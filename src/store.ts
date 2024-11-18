import { configureStore } from '@reduxjs/toolkit';
import { tasksSliceName, tasksReducer } from 'tasksSlice';

export const store = configureStore({
    reducer: {
        [tasksSliceName]: tasksReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
