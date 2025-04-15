import { DEFAULT_OPTION_VALUE } from '@/common/constants';
import { ChangeEvent } from 'react';
import s from './single-selector.module.css';

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
                className={s.selector}
                value={selectedColorTag ?? DEFAULT_OPTION_VALUE}
                onChange={handleSetColorTag}
            >
                {JSXColorSelectOptions}
            </select>
        );
    };
};
