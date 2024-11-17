import { useState } from 'react';
import { AddItemForm } from './AddItemForm';
import { Footer } from './Footer';
import { Todolist } from './Todolist';
import { FilterByStatusValues, FilterColorTagValue } from './types';
import './store';
import { useAppDispatch } from './hooks/use-app-dispatch';
import { addTask } from './tasksSlice';

function App() {
    const dispatch = useAppDispatch();

    const [filterByStatusValue, setFilterByStatusValue] =
        useState<FilterByStatusValues>('all');

    const [filterByColorTagValues, setFilterByColorTagValues] =
        useState<FilterColorTagValue>({
            red: { selected: false },
            green: { selected: false },
            blue: { selected: false },
        });

    const setFilterByStatusValueHandler = (value: FilterByStatusValues) => {
        setFilterByStatusValue(value);
    };

    const addTaskHandler = (taskTitle: string) => {
        dispatch(addTask(taskTitle));
    };

    return (
        <div>
            <AddItemForm onAddItem={addTaskHandler} />
            <Todolist />
            <Footer
                filterByStatusValue={filterByStatusValue}
                filterByColorTagValues={filterByColorTagValues}
                setFilterByStatusValue={setFilterByStatusValueHandler}
            />
        </div>
    );
}

export default App;
