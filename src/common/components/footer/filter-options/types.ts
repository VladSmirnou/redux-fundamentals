import type { FilterByStatusValues } from '@/common/types';

export type FilterOptionsProps = {
    filterByStatusValue: FilterByStatusValues;
    onSetFilterByStatusValue: (value: FilterByStatusValues) => void;
};
