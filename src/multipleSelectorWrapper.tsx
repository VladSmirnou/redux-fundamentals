import { ChangeEvent } from 'react';

type Kwargs = {
    selectedColorTags: Array<string>;
    onSetFilterByColorTagValues: (filterValueTags: Set<string>) => void;
};

export const multipleSelectorWrapper = (kwargs: Kwargs) => {
    const { selectedColorTags, onSetFilterByColorTagValues } = kwargs;

    return function MultipleSelector(
        JSXColorSelectOptions: Array<JSX.Element>,
    ) {
        const handleSetFilterByColorTagValues = (
            e: ChangeEvent<HTMLSelectElement>,
        ) => {
            const selectedColorTags = new Set<string>();
            for (const option of e.target.selectedOptions) {
                selectedColorTags.add(option.value);
            }
            onSetFilterByColorTagValues(selectedColorTags);
        };
        return (
            <select
                multiple={true}
                value={selectedColorTags}
                onChange={handleSetFilterByColorTagValues}
            >
                {JSXColorSelectOptions}
            </select>
        );
    };
};
