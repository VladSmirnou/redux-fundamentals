import { FilterByStatusValues } from '../../../types';
import { Button } from '../../button/button';
import type { FilterOptionsProps } from './types';

import cn from 'classnames';
import styles from './filter-options.module.css';

const filterByStatusOptions: Array<FilterByStatusValues> = [
    'all',
    'active',
    'completed',
];

export const FilterOptions = (props: FilterOptionsProps) => {
    const { filterByStatusValue, onSetFilterByStatusValue } = props;

    const handleSetFilterByStatusValue = (value: FilterByStatusValues) => {
        onSetFilterByStatusValue(value);
    };

    return (
        <div className={styles.button_container}>
            {filterByStatusOptions.map((option) => {
                return (
                    <Button
                        className={cn(styles.button, {
                            [styles.active_option]:
                                filterByStatusValue === option,
                        })}
                        key={option}
                        onClick={() => handleSetFilterByStatusValue(option)}
                    >
                        {option}
                    </Button>
                );
            })}
        </div>
    );
};
