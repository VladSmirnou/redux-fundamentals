import { useAppDispatch } from './hooks/use-app-dispatch';
import { markAllTasksAsCompleted, removeCompletedTasks } from './tasksSlice';

export const TasksActions = () => {
    const dispatch = useAppDispatch();

    const handleMarkAllTasksAsCompleted = () => {
        dispatch(markAllTasksAsCompleted());
    };

    const handleRemoveCompletedTasks = () => {
        dispatch(removeCompletedTasks());
    };

    return (
        <div>
            <button onClick={handleMarkAllTasksAsCompleted}>
                Complete all tasks
            </button>
            <button onClick={handleRemoveCompletedTasks}>
                Remove all completed tasks
            </button>
        </div>
    );
};
