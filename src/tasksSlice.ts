import { createSlice } from '@reduxjs/toolkit';
import { Task } from './types';

const getNextTaskId = (tasks: Array<number>) => {
    return (tasks.at(0) ?? 0) + 1;
};

const tasksFromApi = [
    { id: 1, title: 'first', colorTag: undefined, isDone: false },
    { id: 2, title: 'second', colorTag: undefined, isDone: false },
    { id: 3, title: 'third', colorTag: undefined, isDone: false },
    { id: 4, title: 'forth', colorTag: undefined, isDone: false },
];

type initialStateType = {
    tasks: {
        byId: {
            [key: string]: Task;
        };
        allIds: Array<number>;
    };
};

const initialState = tasksFromApi.reverse().reduce(
    (acc, newVal) => {
        const { id, ...rest } = newVal;
        acc.tasks.byId[id] = rest;
        acc.tasks.allIds.push(id);
        return acc;
    },
    {
        tasks: { byId: {}, allIds: [] },
    } as initialStateType,
);

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: (create) => ({
        addTask: create.reducer<string>((state, action) => {
            const nextTaskId = getNextTaskId(state.tasks.allIds);
            state.tasks.byId[nextTaskId] = {
                title: action.payload,
                colorTag: undefined,
                isDone: false,
            };
            state.tasks.allIds.unshift(nextTaskId);
        }),
        removeTask: create.reducer<number>((state, action) => {
            delete state.tasks.byId[action.payload];
            const taskId = state.tasks.allIds.findIndex(
                (taskId) => action.payload === taskId,
            );
            state.tasks.allIds.splice(taskId, 1);
        }),
        updateTaskStatus: create.reducer<{
            taskId: number;
            nextTaskStatus: boolean;
        }>((state, action) => {
            const { taskId, nextTaskStatus } = action.payload;
            state.tasks.byId[taskId].isDone = nextTaskStatus;
        }),
    }),
    selectors: {
        selectTaskIds: (state) => state.tasks.allIds,
        selectTaskById: (state, taskId: number) => state.tasks.byId[taskId],
        selectTasks: (state) => state.tasks.byId,
    },
});

export const { reducer: tasksReducer, name: tasksSliceName } = tasksSlice;
export const { addTask, removeTask, updateTaskStatus } = tasksSlice.actions;
export const { selectTaskIds, selectTaskById, selectTasks } =
    tasksSlice.selectors;
