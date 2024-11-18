import { shallowEqual } from 'react-redux';
import { useAppSelector } from './hooks/use-app-selector';
import { Task } from './Task';
import { FilterByStatusValues } from './types';
import { RootState } from './store';

const selectFilteredTasks = (
    state: RootState,
    filterValue: FilterByStatusValues,
    selectedColorTags: Array<string>,
) => {
    let tasks = Object.entries(state.tasks.byId);
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
        tasks = tasks.filter(([taskId]) => {
            return selectedColorTags.includes(
                state.tasks.byId[taskId].colorTag ?? '',
            );
        });
    }

    return tasks.map(([taskId]) => +taskId);
};

type Props = {
    colors: Array<string>;
    filterByStatusValue: FilterByStatusValues;
    filterByColorTagValues: Array<string>;
};

export const Tasks = (props: Props) => {
    const { filterByStatusValue, colors, filterByColorTagValues } = props;
    const taskIds = useAppSelector(
        (state) =>
            selectFilteredTasks(
                state,
                filterByStatusValue,
                filterByColorTagValues,
            ),
        shallowEqual,
    );

    const JSXTasks = taskIds.map((taskId) => {
        return <Task key={taskId} taskId={taskId} colors={colors} />;
    });

    return <ul>{JSXTasks}</ul>;
};
