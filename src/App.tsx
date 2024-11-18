import { useState } from 'react';
import { AddItemForm } from './AddItemForm';
import { Footer } from './Footer';
import { Todolist } from './Todolist';
import { FilterByStatusValues, FilterColorTagValue } from './types';
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

    const setFilterByColorTagValuesHandler = (
        filterValueTags: Array<string>,
    ) => {
        const nextFilterByColorTagValues = Object.entries(
            filterByColorTagValues,
        ).reduce((acc, [tag]) => {
            acc[tag] = { selected: filterValueTags.includes(tag) };
            return acc;
        }, {} as FilterColorTagValue);
        setFilterByColorTagValues(nextFilterByColorTagValues);
    };

    const colors = Object.keys(filterByColorTagValues);

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
                filterByColorTagValues={selectedColorTagValues}
                filterByStatusValue={filterByStatusValue}
                colors={colors}
            />
            <Footer
                filterByStatusValue={filterByStatusValue}
                filterByColorTagValues={filterByColorTagValues}
                setFilterByStatusValue={setFilterByStatusValueHandler}
                setFilterByColorTagValuesHandler={
                    setFilterByColorTagValuesHandler
                }
            />
        </div>
    );
}

export default App;
