import { RootState } from './store';
import { tasksAdapter } from '../features/model/tasksSlice';

const selectors = tasksAdapter.getSelectors((state: RootState) => state);

export const {
    selectEntities: allTasks,
    selectIds: allTaskIds,
    selectById,
} = selectors;
