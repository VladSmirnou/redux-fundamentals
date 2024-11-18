import { ColorFilterPannel } from './ColorFilterPannel';
import { FilterByStatusValues } from './types';

type Props = {
    colorTags: Array<string>;
    selectedColorTags: Array<string>;
    filterByStatusValue: FilterByStatusValues;
    onSetFilterByStatusValue: (value: FilterByStatusValues) => void;
    onSetFilterByColorTagValues: (filterValueTags: Set<string>) => void;
};

export const FilterOptions = (props: Props) => {
    const {
        colorTags,
        selectedColorTags,
        filterByStatusValue,
        onSetFilterByStatusValue,
        onSetFilterByColorTagValues,
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
                colorTags={colorTags}
                selectedColorTags={selectedColorTags}
                onSetFilterByColorTagValues={onSetFilterByColorTagValues}
            />
        </div>
    );
};
