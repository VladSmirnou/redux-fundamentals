import { ChangeEvent } from 'react';
import { singleSelectorWrapper } from './single-selector/singleSelectorWrapper';
import { selectById } from '@/app/selectors';
import { useAppDispatch } from '@/common/hooks/use-app-dispatch';
import { useAppSelector } from '@/common/hooks/use-app-selector';
import {
    removeTask,
    updateTaskStatus,
    setTaskColorTag,
} from '@/features/model/tasksSlice';
import { ColorSelector } from './color-selector/color-selector';
import s from './task.module.css';

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
        <li className={s.task}>
            <input
                type="checkbox"
                checked={isDone}
                onChange={handleUpdateTaskStatus}
            />
            <span>{title}</span>
            <ColorSelector
                colorTags={colorTags}
                defaulOptionText={'color tag (None)'}
                render={singleSelectorWrapper({
                    selectedColorTag: colorTag,
                    onSetColorTag: setColorTag,
                })}
            />
            <button onClick={deleteTask}>X</button>
        </li>
    );
};
