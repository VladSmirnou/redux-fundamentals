import { ColorFilterPannel } from './ColorFilterPannel';
import { FilterByStatusValues, FilterColorTagValue } from './types';

type Props = {
    filterByStatusValue: FilterByStatusValues;
    filterByColorTagValues: FilterColorTagValue;
    onSetFilterByStatusValue: (value: FilterByStatusValues) => void;
    setFilterByColorTagValuesHandler: (filterValueTags: Array<string>) => void;
};

export const FilterOptions = (props: Props) => {
    const {
        filterByStatusValue,
        filterByColorTagValues,
        onSetFilterByStatusValue,
        setFilterByColorTagValuesHandler,
    } = props;

    const handleSetFilterByStatusValue = (value: FilterByStatusValues) => {
        onSetFilterByStatusValue(value);
    };

    return (
        <div>
            <div>
                <span>Filer by task status:</span>
                <button
                    style={{
                        backgroundColor:
                            filterByStatusValue === 'all' ? 'aquamarine' : (
                                'revert'
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
                                'revert'
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
                            :   'revert',
                    }}
                    onClick={() => handleSetFilterByStatusValue('completed')}
                >
                    completed
                </button>
            </div>
            <ColorFilterPannel
                filterByColorTagValues={filterByColorTagValues}
                setFilterByColorTagValuesHandler={
                    setFilterByColorTagValuesHandler
                }
            />
        </div>
    );
};
