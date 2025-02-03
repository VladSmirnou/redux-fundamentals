import { ActiveTasksCount } from './active-task-count/active-tasks-count';
import { FilterOptions } from './filter-options/filter-options';
import { TasksActions } from './tasks-actions/tasks-actions';
import { FilterByStatusValues } from '../../types';
import s from './footer.module.css';

type Props = {
    colorTags: Array<string>;
    selectedColorTags: Array<string>;
    filterByStatusValue: FilterByStatusValues;
    onSetFilterByStatusValue: (value: FilterByStatusValues) => void;
    onSetFilterByColorTagValues: (filterValueTags: Set<string>) => void;
};

export const Footer = (props: Props) => {
    const {
        filterByStatusValue,
        onSetFilterByStatusValue,
        onSetFilterByColorTagValues,
        colorTags,
        selectedColorTags,
    } = props;

    return (
        <div className={s.footer}>
            <TasksActions />
            <ActiveTasksCount />
            <FilterOptions
                colorTags={colorTags}
                selectedColorTags={selectedColorTags}
                filterByStatusValue={filterByStatusValue}
                onSetFilterByStatusValue={onSetFilterByStatusValue}
                onSetFilterByColorTagValues={onSetFilterByColorTagValues}
            />
        </div>
    );
};
