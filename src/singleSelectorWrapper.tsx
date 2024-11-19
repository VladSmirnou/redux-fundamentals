import { ChangeEvent } from 'react';
import { DEFAULT_OPTION_VALUE as DEFAULT_OPTION_VALUE } from './constants';

type Kwargs = {
    selectedColorTag: string | undefined;
    onSetColorTag: (colorTag: string | undefined) => void;
};

export const singleSelectorWrapper = (kwargs: Kwargs) => {
    const { selectedColorTag, onSetColorTag } = kwargs;

    return function SingleSelector(JSXColorSelectOptions: Array<JSX.Element>) {
        const handleSetColorTag = (e: ChangeEvent<HTMLSelectElement>) => {
            const nextColorTagValue = e.target.value;
            onSetColorTag(
                nextColorTagValue === DEFAULT_OPTION_VALUE ? undefined : (
                    nextColorTagValue
                ),
            );
        };

        return (
            <select
                value={selectedColorTag ?? DEFAULT_OPTION_VALUE}
                onChange={handleSetColorTag}
            >
                {JSXColorSelectOptions}
            </select>
        );
    };
};
