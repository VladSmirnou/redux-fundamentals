import { createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from './hooks/use-app-selector';
import { selectTasks } from './tasksSlice';

const selectActiveTasksCount = createSelector(selectTasks, (tasks) => {
    return Object.values(tasks).reduce((activeTasksCount, task) => {
        return !task.isDone ? activeTasksCount + 1 : activeTasksCount;
    }, 0);
});

export const ActiveTasksCount = () => {
    const activeTasksCount = useAppSelector(selectActiveTasksCount);
    const singularOrPlural = activeTasksCount === 1 ? 'task' : 'tasks';
    return (
        <div>
            Active tasks count: {activeTasksCount} {singularOrPlural}
        </div>
    );
};
