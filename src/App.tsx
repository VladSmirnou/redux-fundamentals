import { useState } from 'react';
import { AddItemForm } from './AddItemForm';
import { Footer } from './Footer';
import { Todolist } from './Todolist';
import { FilterByStatusValues, FilterColorTagValues } from './types';
import { useAppDispatch } from './hooks/use-app-dispatch';
import { addTask } from './tasksSlice';

function App() {
    const dispatch = useAppDispatch();

    const [filterByStatusValue, setFilterByStatusValue] =
        useState<FilterByStatusValues>('all');

    const [filterByColorTagValues, setFilterByColorTagValues] =
        useState<FilterColorTagValues>({
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

    const setFilterByColorTagValuesHandler = (filterValueTags: Set<string>) => {
        const nextFilterByColorTagValues = Object.keys(
            filterByColorTagValues,
        ).reduce((acc, tag) => {
            acc[tag] = { selected: filterValueTags.has(tag) };
            return acc;
        }, {} as FilterColorTagValues);
        setFilterByColorTagValues(nextFilterByColorTagValues);
    };

    const colorTags = Object.keys(filterByColorTagValues);

    const selectedColorTagValues = Object.entries(
        filterByColorTagValues,
    ).reduce((selectedColorTags, [colorTag, { selected }]) => {
        if (selected) {
            selectedColorTags.push(colorTag);
        }
        return selectedColorTags;
    }, [] as Array<string>);

    return (
        <div>
            <AddItemForm onAddItem={addTaskHandler} />
            <Todolist
                colorTags={colorTags}
                filterByColorTagValues={selectedColorTagValues}
                filterByStatusValue={filterByStatusValue}
            />
            <Footer
                colorTags={colorTags}
                selectedColorTags={selectedColorTagValues}
                filterByStatusValue={filterByStatusValue}
                onSetFilterByStatusValue={setFilterByStatusValueHandler}
                onSetFilterByColorTagValues={setFilterByColorTagValuesHandler}
            />
        </div>
    );
}

export default App;
