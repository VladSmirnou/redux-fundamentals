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

type Tasks = {
    byId: {
        [key: string]: Task;
    };
    allIds: Array<number>;
};

const initialState = tasksFromApi.reverse().reduce(
    (acc, newVal) => {
        const { id, ...rest } = newVal;
        acc.byId[id] = rest;
        acc.allIds.push(id);
        return acc;
    },
    { byId: {}, allIds: [] } as Tasks,
);

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: (create) => ({
        addTask: create.reducer<string>((state, action) => {
            const nextTaskId = getNextTaskId(state.allIds);
            state.byId[nextTaskId] = {
                title: action.payload,
                colorTag: undefined,
                isDone: false,
            };
            state.allIds.unshift(nextTaskId);
        }),
        removeTask: create.reducer<number>((state, action) => {
            delete state.byId[action.payload];
            const taskId = state.allIds.findIndex(
                (taskId) => action.payload === taskId,
            );
            state.allIds.splice(taskId, 1);
        }),
        updateTaskStatus: create.reducer<{
            taskId: number;
            nextTaskStatus: boolean;
        }>((state, action) => {
            const { taskId, nextTaskStatus } = action.payload;
            state.byId[taskId].isDone = nextTaskStatus;
        }),
        markAllTasksAsCompleted: create.reducer((state) => {
            Object.values(state.byId).forEach((task) => {
                task.isDone = true;
            });
        }),
        removeCompletedTasks: create.reducer((state) => {
            const taskIdsToRemove = new Set();
            Object.entries(state.byId).forEach(([id, task]) => {
                if (task.isDone) {
                    taskIdsToRemove.add(+id);
                    delete state.byId[id];
                }
            });
            const remainingIds = state.allIds.filter(
                (id) => !taskIdsToRemove.has(id),
            );
            state.allIds = remainingIds;
        }),
        setTaskColorTag: create.reducer<{ taskId: number; colorTag: string }>(
            (state, action) => {
                const { taskId, colorTag } = action.payload;
                state.byId[taskId].colorTag = colorTag;
            },
        ),
    }),
    selectors: {
        selectTasks: (state) => state.byId,
    },
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
export const { selectTasks } = tasksSlice.selectors;
