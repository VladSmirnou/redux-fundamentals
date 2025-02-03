import { ColorFilterPannel } from './color-filter-pannel/color-filter-pannel';
import { FilterByStatusValues } from '../../../types';
import s from './filter-options.module.css';

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
        <>
            <div>
                <h3>Filer by task status:</h3>
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
                                filterByStatusValue === 'active' ? 'aquamarine'
                                :   'transparent',
                        }}
                        onClick={() => handleSetFilterByStatusValue('active')}
                    >
                        active
                    </button>
                    <button
                        style={{
                            backgroundColor:
                                filterByStatusValue === 'completed' ?
                                    'aquamarine'
                                :   'transparent',
                        }}
                        onClick={() =>
                            handleSetFilterByStatusValue('completed')
                        }
                    >
                        completed
                    </button>
                </div>
            </div>
            <ColorFilterPannel
                colorTags={colorTags}
                selectedColorTags={selectedColorTags}
                onSetFilterByColorTagValues={onSetFilterByColorTagValues}
            />
        </>
    );
};
