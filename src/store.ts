import { configureStore } from '@reduxjs/toolkit';
import * as tasksSliceData from 'tasksSlice';

export const store = configureStore({
    reducer: {
        [tasksSliceData.tasksSliceName]: tasksSliceData.tasksReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
