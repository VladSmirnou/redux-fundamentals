import { DEFAULT_OPTION_VALUE } from '@/common/constants';
import { ChangeEvent } from 'react';
import type { SingleSelectorKwargs } from './types';

import styles from './single-selector.module.css';

export const singleSelectorWrapper = (kwargs: SingleSelectorKwargs) => {
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
                className={styles.selector}
                value={selectedColorTag ?? DEFAULT_OPTION_VALUE}
                onChange={handleSetColorTag}
            >
                {JSXColorSelectOptions}
            </select>
        );
    };
};
