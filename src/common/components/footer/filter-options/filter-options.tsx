import { FilterByStatusValues } from '../../../types';
import s from './filter-options.module.css';

type Props = {
    filterByStatusValue: FilterByStatusValues;
    onSetFilterByStatusValue: (value: FilterByStatusValues) => void;
};

export const FilterOptions = (props: Props) => {
    const { filterByStatusValue, onSetFilterByStatusValue } = props;

    const handleSetFilterByStatusValue = (value: FilterByStatusValues) => {
        onSetFilterByStatusValue(value);
    };

    return (
        <div>
            <div className={s.buttonContainer}>
                <button
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
                </button>
            </div>
        </div>
    );
};
