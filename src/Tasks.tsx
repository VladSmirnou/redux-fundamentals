import { shallowEqual } from 'react-redux';
import { useAppSelector } from './hooks/use-app-selector';
import { Task } from './Task';
import { selectTaskIds } from './tasksSlice';

export const Tasks = () => {
    const taskIds = useAppSelector(selectTaskIds, shallowEqual);

    const JSXTasks = taskIds.map((taskId) => {
        return <Task key={taskId} taskId={taskId} />;
    });

    return <ul>{JSXTasks}</ul>;
};
