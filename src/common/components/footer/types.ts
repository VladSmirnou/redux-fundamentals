import type { FilterByStatusValues } from '@/common/types';
import type { ReactNode } from 'react';

export type FooterProps = {
    colorTags: Array<string>;
    selectedColorTags: Array<string>;
    filterByStatusValue: FilterByStatusValues;
    onSetFilterByStatusValue: (value: FilterByStatusValues) => void;
    onSetFilterByColorTagValues: (filterValueTags: Set<string>) => void;
};

export type FooterWidgetData = {
    title: string;
    content: ReactNode;
    modifierClasses?: {
        content?: string;
    };
};
