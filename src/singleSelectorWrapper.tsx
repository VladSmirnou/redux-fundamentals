import { ChangeEvent } from 'react';

type Kwargs = {
    selectedColorTag: string | undefined;
    onSetColorTag: (colorTag: string) => void;
};

export const singleSelectorWrapper = (kwargs: Kwargs) => {
    const { selectedColorTag, onSetColorTag } = kwargs;

    return function SingleSelector(JSXColorSelectOptions: Array<JSX.Element>) {
        const defaultValue = 'default';
        const defaultOption = (
            <option key={defaultValue} value={defaultValue} disabled>
                color tag
            </option>
        );

        JSXColorSelectOptions.unshift(defaultOption);

        const handleSetColorTag = (e: ChangeEvent<HTMLSelectElement>) => {
            onSetColorTag(e.target.value);
        };
        return (
            <select
                value={selectedColorTag ?? defaultValue}
                onChange={handleSetColorTag}
            >
                {JSXColorSelectOptions}
            </select>
        );
    };
};
