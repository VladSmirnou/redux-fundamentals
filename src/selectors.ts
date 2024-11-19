import { RootState } from './store';
import { tasksAdapter } from './tasksSlice';

const selectors = tasksAdapter.getSelectors((state: RootState) => state);

export const {
    selectEntities: allTasks,
    selectIds: allTaskIds,
    selectById,
} = selectors;
