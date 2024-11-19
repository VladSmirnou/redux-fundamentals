import { allTaskIds } from './selectors';
import { store } from './store';

export const getNextTaskId = () => {
    const taskIds = allTaskIds(store.getState());
    return taskIds.length ? Math.max(...taskIds) + 1 : 0;
};
