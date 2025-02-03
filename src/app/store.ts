import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from '@/features/model/tasksSlice';

export const store = configureStore({
    reducer: tasksReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
