import { ActiveTasksCount } from './active-task-count/active-tasks-count';
import { FilterOptions } from './filter-options/filter-options';
import { TasksActions } from './tasks-actions/tasks-actions';
import { FilterByStatusValues } from '../../types';
import s from './footer.module.css';
import type { PropsWithChildren, ReactNode } from 'react';
import { ColorFilterPannel } from './filter-options/color-filter-pannel/color-filter-pannel';

type Props = {
    colorTags: Array<string>;
    selectedColorTags: Array<string>;
    filterByStatusValue: FilterByStatusValues;
    onSetFilterByStatusValue: (value: FilterByStatusValues) => void;
    onSetFilterByColorTagValues: (filterValueTags: Set<string>) => void;
};

type FooterWidgetProps = PropsWithChildren & {
    title: string;
};

const FooterWidget = (props: FooterWidgetProps) => {
    const { title, children } = props;
    return (
        <div>
            <h3>{title}</h3>
            {children}
        </div>
    );
};

type FooterWidget = {
    title: string;
    content: ReactNode;
};

export const Footer = (props: Props) => {
    const {
        filterByStatusValue,
        onSetFilterByStatusValue,
        onSetFilterByColorTagValues,
        colorTags,
        selectedColorTags,
    } = props;

    const footerWidgets: Array<FooterWidget> = [
        {
            title: 'Remaining todos',
            content: <ActiveTasksCount />,
        },
        {
            title: 'Actions',
            content: <TasksActions />,
        },
        {
            title: 'Filer by task status:',
            content: (
                <FilterOptions
                    filterByStatusValue={filterByStatusValue}
                    onSetFilterByStatusValue={onSetFilterByStatusValue}
                />
            ),
        },
        {
            title: 'Select color tags to filter tasks:',
            content: (
                <ColorFilterPannel
                    colorTags={colorTags}
                    selectedColorTags={selectedColorTags}
                    onSetFilterByColorTagValues={onSetFilterByColorTagValues}
                />
            ),
        },
    ];

    return (
        <div className={s.footer}>
            {footerWidgets.map(({ title, content }) => {
                return (
                    <FooterWidget key={title} title={title}>
                        {content}
                    </FooterWidget>
                );
            })}
        </div>
    );
};
