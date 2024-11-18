import { Tasks } from './Tasks';
import { FilterByStatusValues } from './types';

type Props = {
    filterByStatusValue: FilterByStatusValues;
    colors: Array<string>;
    filterByColorTagValues: Array<string>;
};

export const Todolist = (props: Props) => {
    const { filterByStatusValue, colors, filterByColorTagValues } = props;
    return (
        <div>
            <Tasks
                colors={colors}
                filterByStatusValue={filterByStatusValue}
                filterByColorTagValues={filterByColorTagValues}
            />
        </div>
    );
};
