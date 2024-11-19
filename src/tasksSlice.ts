import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Task } from './types';

const tasksFromApi = [
    { id: 1, title: 'first', colorTag: undefined, isDone: false },
    { id: 2, title: 'second', colorTag: undefined, isDone: false },
    { id: 3, title: 'third', colorTag: undefined, isDone: false },
    { id: 4, title: 'forth', colorTag: undefined, isDone: false },
];

export const tasksAdapter = createEntityAdapter<Task>();

const tasksState = tasksAdapter.getInitialState();

const initialState = tasksFromApi.reduce((acc, newVal) => {
    const { id } = newVal;
    acc.entities[id] = newVal;
    acc.ids.push(id);
    return acc;
}, tasksState);

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: (create) => ({
        // eslint-disable-next-line
        addTask: tasksAdapter.addOne,
        // eslint-disable-next-line
        removeTask: tasksAdapter.removeOne,
        // eslint-disable-next-line
        updateTaskStatus: tasksAdapter.updateOne,
        // eslint-disable-next-line
        setTaskColorTag: tasksAdapter.updateOne,
        markAllTasksAsCompleted: create.reducer((state) => {
            Object.values(state.entities).forEach((task) => {
                task.isDone = true;
            });
        }),
        removeCompletedTasks: create.reducer((state) => {
            const taskIdsToRemove = new Set();
            Object.entries(state.entities).forEach(([id, task]) => {
                if (task.isDone) {
                    const numericId = +id;
                    taskIdsToRemove.add(numericId);
                    delete state.entities[numericId];
                }
            });
            const remainingIds = state.ids.filter(
                (id) => !taskIdsToRemove.has(id),
            );
            state.ids = remainingIds;
        }),
    }),
});

export const { reducer: tasksReducer, name: tasksSliceName } = tasksSlice;
export const {
    addTask,
    removeTask,
    updateTaskStatus,
    markAllTasksAsCompleted,
    removeCompletedTasks,
    setTaskColorTag,
} = tasksSlice.actions;
