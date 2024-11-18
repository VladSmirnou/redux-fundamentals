import { ChangeEvent } from 'react';
import { useAppDispatch } from './hooks/use-app-dispatch';
import { useAppSelector } from './hooks/use-app-selector';
import { removeTask, setTaskColorTag, updateTaskStatus } from './tasksSlice';
import { RootState } from './store';
import { ColorSelector } from './ColorSelector';
import { singleSelectorWrapper } from './singleSelectorWrapper';

type Props = {
    taskId: number;
    colorTags: Array<string>;
};

const selectTaskById = (state: RootState, taskId: number) =>
    state.tasks.byId[taskId];

export const Task = (props: Props) => {
    const { taskId, colorTags } = props;

    const dispatch = useAppDispatch();

    const task = useAppSelector((state) => selectTaskById(state, taskId));

    const deleteTask = () => {
        dispatch(removeTask(taskId));
    };

    const handleUpdateTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            updateTaskStatus({ taskId, nextTaskStatus: e.target.checked }),
        );
    };

    const setColorTag = (colorTag: string) => {
        dispatch(setTaskColorTag({ taskId, colorTag }));
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={task.isDone}
                onChange={handleUpdateTaskStatus}
            />
            <span>{task.title}</span>
            <button onClick={deleteTask}>X</button>
            <ColorSelector
                colorTags={colorTags}
                render={singleSelectorWrapper({
                    selectedColorTag: task.colorTag,
                    onSetColorTag: setColorTag,
                })}
            />
        </li>
    );
};
