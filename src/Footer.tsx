import { ActiveTasksCount } from './ActiveTasksCount';
import { FilterOptions } from './FilterOptions';
import { TasksActions } from './TasksActions';
import { FilterByStatusValues } from './types';

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
        <div style={{ display: 'flex' }}>
            <ActiveTasksCount />
            <TasksActions />
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
