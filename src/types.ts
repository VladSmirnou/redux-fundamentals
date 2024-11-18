export type FilterByStatusValues = 'all' | 'active' | 'completed';
export type FilterColorTagValues = {
    [key: string]: { selected: boolean };
};
export type Task = {
    title: string;
    colorTag: string | undefined;
    isDone: boolean;
};
