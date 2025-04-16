import type { ReactNode } from 'react';
import { FilterByStatusValues } from '../../types';
import { ActiveTasksCount } from './active-task-count/active-tasks-count';
import { ColorFilterPannel } from './filter-options/color-filter-pannel/color-filter-pannel';
import { FilterOptions } from './filter-options/filter-options';
import { TasksActions } from './tasks-actions/tasks-actions';
import { FooterWidget } from './footer-widget/footer-widget';

import s from './footer.module.css';

type Props = {
    colorTags: Array<string>;
    selectedColorTags: Array<string>;
    filterByStatusValue: FilterByStatusValues;
    onSetFilterByStatusValue: (value: FilterByStatusValues) => void;
    onSetFilterByColorTagValues: (filterValueTags: Set<string>) => void;
};

type FooterWidgetData = {
    title: string;
    content: ReactNode;
    modifierClasses?: {
        content?: string;
    };
};

export const Footer = (props: Props) => {
    const {
        filterByStatusValue,
        onSetFilterByStatusValue,
        onSetFilterByColorTagValues,
        colorTags,
        selectedColorTags,
    } = props;

    const footerWidgets: Array<FooterWidgetData> = [
        {
            title: 'Remaining todos',
            content: <ActiveTasksCount />,
            modifierClasses: {
                content: s.active_task_count,
            },
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
            {footerWidgets.map(({ title, content, modifierClasses }) => {
                return (
                    <FooterWidget
                        modifierClasses={modifierClasses}
                        key={title}
                        title={title}
                    >
                        {content}
                    </FooterWidget>
                );
            })}
        </div>
    );
};
