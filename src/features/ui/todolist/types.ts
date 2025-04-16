import type { FilterByStatusValues } from '@/common/types';

export type TodolistProps = {
    filterByStatusValue: FilterByStatusValues;
    colorTags: Array<string>;
    filterByColorTagValues: Array<string>;
};
