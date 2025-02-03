import { AddItemForm } from '@/common/components/add-item-form/add-item-form';
import { FilterByStatusValues } from '../../../common/types';
import { Tasks } from './tasks/tasks';
import { addTask } from '@/features/model/tasksSlice';
import { useAppDispatch } from '@/common/hooks/use-app-dispatch';
import s from './todolist.module.css';

type Props = {
    filterByStatusValue: FilterByStatusValues;
    colorTags: Array<string>;
    filterByColorTagValues: Array<string>;
};

export const Todolist = (props: Props) => {
    const dispatch = useAppDispatch();

    const addTaskHandler = (taskTitle: string) => {
        dispatch(addTask(taskTitle));
    };

    return (
        <div>
            <h2 className={s.title}>Todos</h2>
            <div className={s.wrapper}>
                <AddItemForm onAddItem={addTaskHandler} />
                <Tasks {...props} />
            </div>
        </div>
    );
};
