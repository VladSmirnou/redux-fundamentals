import { FilterByStatusValues } from '../../../types';
import { Button } from '../../button/button';

import cn from 'classnames';
import s from './filter-options.module.css';

type Props = {
    filterByStatusValue: FilterByStatusValues;
    onSetFilterByStatusValue: (value: FilterByStatusValues) => void;
};

const filterByStatusOptions: Array<FilterByStatusValues> = [
    'all',
    'active',
    'completed',
];

export const FilterOptions = (props: Props) => {
    const { filterByStatusValue, onSetFilterByStatusValue } = props;

    const handleSetFilterByStatusValue = (value: FilterByStatusValues) => {
        onSetFilterByStatusValue(value);
    };

    return (
        <div>
            <div className={s.buttonContainer}>
                {filterByStatusOptions.map((option) => {
                    return (
                        <Button
                            className={cn(s.button, {
                                [s.active_option]:
                                    filterByStatusValue === option,
                            })}
                            key={option}
                            onClick={() => handleSetFilterByStatusValue(option)}
                        >
                            {option}
                        </Button>
                    );
                })}
                {/* <button
                    style={{
                        backgroundColor:
                            filterByStatusValue === 'all' ? 'aquamarine' : (
                                'transparent'
                            ),
                    }}
                    onClick={() => handleSetFilterByStatusValue('all')}
                >
                    all
                </button>
                <button
                    style={{
                        backgroundColor:
                            filterByStatusValue === 'active' ? 'aquamarine' : (
                                'transparent'
                            ),
                    }}
                    onClick={() => handleSetFilterByStatusValue('active')}
                >
                    active
                </button>
                <button
                    style={{
                        backgroundColor:
                            filterByStatusValue === 'completed' ? 'aquamarine'
                            :   'transparent',
                    }}
                    onClick={() => handleSetFilterByStatusValue('completed')}
                >
                    completed
                </button> */}
            </div>
        </div>
    );
};
