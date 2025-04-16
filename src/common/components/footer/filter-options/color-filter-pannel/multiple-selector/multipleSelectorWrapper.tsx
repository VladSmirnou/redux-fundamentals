import { ChangeEvent } from 'react';
import type { MultipleSelectorWrapperKwargs } from './types';

import styles from './color-selector.module.css';

export const multipleSelectorWrapper = (
    kwargs: MultipleSelectorWrapperKwargs,
) => {
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
                className={styles.selector}
                multiple={true}
                value={selectedColorTags}
                onChange={handleSetFilterByColorTagValues}
            >
                {JSXColorSelectOptions}
            </select>
        );
    };
};
