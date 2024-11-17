import { ChangeEvent } from 'react';
import { useAppDispatch } from './hooks/use-app-dispatch';
import { useAppSelector } from './hooks/use-app-selector';
import { removeTask, selectTaskById, updateTaskStatus } from './tasksSlice';

type Props = {
    taskId: number;
};

export const Task = (props: Props) => {
    const { taskId } = props;
    const dispatch = useAppDispatch();

    const task = useAppSelector((state) => selectTaskById(state, taskId));

    const deleteTask = () => {
        dispatch(removeTask(taskId));
    };

    const updateTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            updateTaskStatus({ taskId, nextTaskStatus: e.target.checked }),
        );
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={task.isDone}
                onChange={updateTaskStatusHandler}
            />
            <span>{task.title}</span>
            <button onClick={deleteTask}>X</button>
            <select name="" id="">
                <option value="">color</option>
            </select>
        </li>
    );
};
