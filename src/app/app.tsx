import { Container } from '@/common/components/container/container';
import { Footer } from '@/common/components/footer/footer';
import { Header } from '@/common/components/header/header';
import { FilterByStatusValues, FilterColorTagValues } from '@/common/types';
import { Todolist } from '@/features/ui/todolist/todolist';
import { useState } from 'react';
import s from './app.module.css';

function App() {
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
        <Container>
            <Header />
            <div className={s.wrapper}>
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
                    onSetFilterByColorTagValues={
                        setFilterByColorTagValuesHandler
                    }
                />
            </div>
        </Container>
    );
}

export default App;
