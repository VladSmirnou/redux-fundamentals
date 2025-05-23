import { useAppSelector } from '@/common/hooks/use-app-selector';
import { FilterByStatusValues, type Task as TaskType } from '@/common/types';
import { shallowEqual } from 'react-redux';
import { Task } from './task/Task';
import type { TodolistProps } from './types';

import styles from './todolist.module.css';

const selectTaskIds = (
    tasksObj: { [key: string]: TaskType },
    filterValue: FilterByStatusValues,
    selectedColorTags: Array<string>,
) => {
    let tasks = Object.entries(tasksObj);
    if (filterValue !== 'all') {
        tasks = tasks.filter(([, task]) => {
            if (task.isDone && filterValue === 'completed') {
                return true;
            }
            if (!task.isDone && filterValue === 'active') {
                return true;
            }
            return false;
        });
    }
    if (selectedColorTags.length) {
        tasks = tasks.filter(([, task]) => {
            const colorTag = task.colorTag;
            if (colorTag) {
                return selectedColorTags.includes(colorTag);
            }
            return;
        });
    }
    return tasks.map(([taskId]) => +taskId).reverse();
};

export const Todolist = (props: TodolistProps) => {
    const { filterByStatusValue, colorTags, filterByColorTagValues } = props;
    const taskIds = useAppSelector(
        (state) =>
            selectTaskIds(
                state.entities,
                filterByStatusValue,
                filterByColorTagValues,
            ),
        shallowEqual,
    );

    const JSXTasks = taskIds.map((taskId) => {
        return <Task key={taskId} taskId={taskId} colorTags={colorTags} />;
    });

    return (
        <div className={styles.tasks}>
            {JSXTasks.length ?
                <ul>{JSXTasks}</ul>
            :   <p className={styles.no_tasks_hint}>You dont have any tasks!</p>
            }
        </div>
    );
};
