import { Button } from '@/common/components/button/button';
import { ChangeEvent } from 'react';
import { singleSelectorWrapper } from './single-selector/single-selector-wrapper';
import { selectById } from '@/app/selectors';
import { useAppDispatch } from '@/common/hooks/use-app-dispatch';
import { useAppSelector } from '@/common/hooks/use-app-selector';
import {
    removeTask,
    updateTaskStatus,
    setTaskColorTag,
} from '@/features/model/tasksSlice';
import { ColorSelector } from './color-selector/color-selector';
import type { TaskProps } from './types';

import styles from './task.module.css';

export const Task = (props: TaskProps) => {
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
        <li className={styles.task}>
            <input
                className={styles.toggle_active_checkbox}
                type="checkbox"
                checked={isDone}
                onChange={handleUpdateTaskStatus}
            />
            <span className={styles.title}>{title}</span>
            <ColorSelector
                colorTags={colorTags}
                defaulOptionText={'color'}
                render={singleSelectorWrapper({
                    selectedColorTag: colorTag,
                    onSetColorTag: setColorTag,
                })}
            />
            <Button className={styles.delete_button} onClick={deleteTask}>
                X
            </Button>
        </li>
    );
};
