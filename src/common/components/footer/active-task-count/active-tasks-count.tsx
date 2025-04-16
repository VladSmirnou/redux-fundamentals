import { createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from '../../../hooks/use-app-selector';
import { allTasks } from '../../../../app/selectors';

import styles from './active-task-count.module.css';

const selectActiveTasksCount = createSelector(allTasks, (tasks) => {
    return Object.values(tasks).reduce((activeTasksCount, task) => {
        return !task.isDone ? activeTasksCount + 1 : activeTasksCount;
    }, 0);
});

export const ActiveTasksCount = () => {
    const activeTasksCount = useAppSelector(selectActiveTasksCount);
    const singularOrPlural = activeTasksCount === 1 ? 'task' : 'tasks';
    return (
        <p className={styles.content}>
            <span className={styles.tasks_count}>{activeTasksCount}</span>{' '}
            {singularOrPlural} left
        </p>
    );
};
