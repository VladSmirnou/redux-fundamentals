import { ChangeEvent } from 'react';
import { ColorSelector } from './ColorSelector';
import { useAppDispatch } from './hooks/use-app-dispatch';
import { useAppSelector } from './hooks/use-app-selector';
import { selectById } from './selectors';
import { singleSelectorWrapper } from './singleSelectorWrapper';
import { removeTask, setTaskColorTag, updateTaskStatus } from './tasksSlice';

type Props = {
    taskId: number;
    colorTags: Array<string>;
};

export const Task = (props: Props) => {
    const { taskId, colorTags } = props;

    const dispatch = useAppDispatch();

    const { title, isDone, colorTag } = useAppSelector((state) =>
        selectById(state, taskId),
    );

    const deleteTask = () => {
        dispatch(removeTask(taskId));
    };

    const handleUpdateTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(
            updateTaskStatus({
                id: taskId,
                changes: { isDone: e.target.checked },
            }),
        );
    };

    const setColorTag = (colorTag: string | undefined) => {
        dispatch(setTaskColorTag({ id: taskId, changes: { colorTag } }));
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={isDone}
                onChange={handleUpdateTaskStatus}
            />
            <span>{title}</span>
            <button onClick={deleteTask}>X</button>
            <ColorSelector
                colorTags={colorTags}
                defaulOptionText={'color tag (None)'}
                render={singleSelectorWrapper({
                    selectedColorTag: colorTag,
                    onSetColorTag: setColorTag,
                })}
            />
        </li>
    );
};
