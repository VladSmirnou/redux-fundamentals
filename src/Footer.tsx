import { ActiveTasksCount } from './ActiveTasksCount';
import { FilterOptions } from './FilterOptions';
import { TasksActions } from './TasksActions';
import { FilterByStatusValues, FilterColorTagValue } from './types';

type Props = {
    filterByStatusValue: FilterByStatusValues;
    filterByColorTagValues: FilterColorTagValue;
    setFilterByStatusValue: (value: FilterByStatusValues) => void;
};

export const Footer = (props: Props) => {
    const {
        filterByStatusValue,
        filterByColorTagValues,
        setFilterByStatusValue,
    } = props;

    return (
        <div style={{ display: 'flex' }}>
            <ActiveTasksCount />
            <TasksActions />
            <FilterOptions
                filterByStatusValue={filterByStatusValue}
                filterByColorTagValues={filterByColorTagValues}
                onSetFilterByStatusValue={setFilterByStatusValue}
            />
        </div>
    );
};
