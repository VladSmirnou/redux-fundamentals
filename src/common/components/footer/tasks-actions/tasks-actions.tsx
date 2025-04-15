import { useAppDispatch } from '../../../hooks/use-app-dispatch';
import {
    markAllTasksAsCompleted,
    removeCompletedTasks,
} from '../../../../features/model/tasksSlice';
import { Button } from '../../button/button';
import styles from './task-actions.module.css';

export const TasksActions = () => {
    const dispatch = useAppDispatch();

    const handleMarkAllTasksAsCompleted = () => {
        dispatch(markAllTasksAsCompleted());
    };

    const handleRemoveCompletedTasks = () => {
        dispatch(removeCompletedTasks());
    };

    return (
        <div className={styles.buttons_wrapper}>
            <Button
                className={styles.complete_all_button}
                onClick={handleMarkAllTasksAsCompleted}
            >
                Complete all
            </Button>
            <Button onClick={handleRemoveCompletedTasks}>
                Remove completed
            </Button>
        </div>
    );
};
