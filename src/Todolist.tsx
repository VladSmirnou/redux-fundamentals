import { Tasks } from './Tasks';
import { FilterByStatusValues } from './types';

type Props = {
    filterByStatusValue: FilterByStatusValues;
    colorTags: Array<string>;
    filterByColorTagValues: Array<string>;
};

export const Todolist = (props: Props) => {
    return (
        <div>
            <p>What needs to be done?</p>
            <Tasks {...props} />
        </div>
    );
};
